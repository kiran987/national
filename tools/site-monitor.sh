#!/bin/bash
# NAA site monitor: logs server load and homepage response time so slowness can be shown to hosting support.
#
# Install on the server (not part of the website; never copy into public_html):
#   1. Save as /home/nation19/site-monitor.sh and run: chmod +x /home/nation19/site-monitor.sh
#   2. cPanel > Cron Jobs, every 5 minutes (*/5 * * * *), command: /home/nation19/site-monitor.sh
#   3. After a day or two, run: /home/nation19/site-monitor.sh report
#
# Log: /home/nation19/site-monitor.log  (tab-separated, trimmed to the last ~14 days)

URL="https://naacanada.org/"
LOG="$HOME/site-monitor.log"
MAX_LINES=4100   # 288 samples/day * 14 days

if [ "$1" = "report" ]; then
  [ -s "$LOG" ] || { echo "No data yet in $LOG"; exit 1; }
  awk -F'\t' '
    function pct(a, n, p,   i, t, k) { # a sorted ascending, 1..n
      k = int(n * p); if (k < 1) k = 1; return a[k] }
    { n++; load1[n] = $2; ttfb[n] = $5; code[n] = $4
      if ($4 != 200) bad++
      if ($5 > 3) slow++
      if ($2 > 20) hot++
      day = substr($1, 1, 10); if (!(day in dn)) order[++nd] = day; dn[day]++; if ($2 > dmax[day]) dmax[day] = $2 }
    END {
      # sort copies for percentiles
      for (i = 1; i <= n; i++) { l[i] = load1[i]; t[i] = ttfb[i] }
      for (i = 2; i <= n; i++) { v = l[i]; j = i - 1; while (j > 0 && l[j] > v) { l[j+1] = l[j]; j-- } l[j+1] = v }
      for (i = 2; i <= n; i++) { v = t[i]; j = i - 1; while (j > 0 && t[j] > v) { t[j+1] = t[j]; j-- } t[j+1] = v }
      printf "Samples: %d\n", n
      printf "Load (1 min):   median %.1f   95th pct %.1f   max %.1f\n", pct(l, n, .5), pct(l, n, .95), l[n]
      printf "Response time:  median %.2fs  95th pct %.2fs  max %.2fs\n", pct(t, n, .5), pct(t, n, .95), t[n]
      printf "Samples with load > 20:        %d (%.0f%%)\n", hot, 100 * hot / n
      printf "Samples slower than 3 seconds: %d (%.0f%%)\n", slow, 100 * slow / n
      printf "Failed or non-200 responses:   %d\n", bad
      print "Peak load per day:"
      for (i = 1; i <= nd; i++) { d = order[i]; printf "  %s  %.1f  (%d samples)\n", d, dmax[d], dn[d] }
    }' "$LOG"
  exit 0
fi

now=$(date -u +"%Y-%m-%d %H:%M:%S")
read -r load1 load5 load15 _ < /proc/loadavg
cpus=$(nproc 2>/dev/null || echo 0)

# time_starttransfer = time to first byte; max-time keeps a hung server from stacking up cron jobs
out=$(curl -s -o /dev/null --max-time 30 -w "%{http_code}\t%{time_starttransfer}\t%{time_total}" "$URL")
[ -n "$out" ] || out=$(printf "000\t30\t30")

printf "%s\t%s\t%s\t%s\t%s\t%s\t%s\n" "$now" "$load1" "$load5" "$(echo "$out" | cut -f1)" "$(echo "$out" | cut -f2)" "$(echo "$out" | cut -f3)" "$cpus" >> "$LOG"

# keep the log small
if [ "$(wc -l < "$LOG")" -gt "$MAX_LINES" ]; then
  tail -n "$MAX_LINES" "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
fi

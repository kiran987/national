#!/bin/bash
# Pull the latest built site from the public GitHub `deploy` branch into /var/www/naa/site.
# Runs as user `naa` every minute (systemd timer). Safe to run by hand: sudo -u naa /var/www/naa/bin/deploy.sh
set -u
export TZ=America/Regina   # Regina time in the deploy log
SITE=/var/www/naa/site
LOG=/var/www/naa/logs/deploy.log
exec 9>/var/www/naa/logs/deploy.lock
flock -n 9 || exit 0

cd "$SITE" || exit 1
if ! git fetch --depth 1 -q origin deploy 2>>"$LOG"; then
  echo "$(date -Is) fetch failed" >> "$LOG"
  exit 1
fi
new=$(git rev-parse FETCH_HEAD)
cur=$(git rev-parse HEAD 2>/dev/null || echo none)
if [ "$new" != "$cur" ]; then
  git reset --hard -q FETCH_HEAD && git clean -fdq
  echo "$(date -Is) deployed $new" >> "$LOG"
fi

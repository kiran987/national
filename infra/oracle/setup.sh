#!/bin/bash
# One-time (idempotent) setup of the NAA site on the Oracle server. Run with sudo from the folder holding these files.
# Never touches /var/www/wascana-fc-web or /etc/nginx/sites-*/wascanafc.conf.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO=https://github.com/kiran987/national.git

echo "== php curl extension"
php -m | grep -qi '^curl$' || apt-get install -y php8.3-curl

echo "== naa user and folders"
id naa >/dev/null 2>&1 || useradd --system --home-dir /var/www/naa --shell /usr/sbin/nologin naa
mkdir -p /var/www/naa/{bin,logs,sessions,private}
chown -R naa:naa /var/www/naa
chmod 755 /var/www/naa
chmod 750 /var/www/naa/private /var/www/naa/sessions

echo "== clone deploy branch"
if [ ! -d /var/www/naa/site/.git ]; then
  sudo -u naa git clone --depth 1 --branch deploy "$REPO" /var/www/naa/site
fi

echo "== deploy script, service, timer"
install -o naa -g naa -m 755 "$HERE/naa-deploy.sh" /var/www/naa/bin/deploy.sh
install -m 644 "$HERE/naa-deploy.service" /etc/systemd/system/naa-deploy.service
install -m 644 "$HERE/naa-deploy.timer" /etc/systemd/system/naa-deploy.timer
systemctl daemon-reload
systemctl enable --now naa-deploy.timer

echo "== php-fpm pool"
install -m 644 "$HERE/naa-fpm.conf" /etc/php/8.3/fpm/pool.d/naa.conf
php-fpm8.3 -t
systemctl reload php8.3-fpm

echo "== nginx site"
install -m 644 "$HERE/naa-security-headers.conf" /etc/nginx/snippets/naa-security-headers.conf
install -m 644 "$HERE/naa.nginx.conf" /etc/nginx/sites-available/naa.conf
ln -sf /etc/nginx/sites-available/naa.conf /etc/nginx/sites-enabled/naa.conf
if nginx -t; then
  systemctl reload nginx
  echo "nginx reloaded"
else
  rm -f /etc/nginx/sites-enabled/naa.conf
  echo "nginx config failed; NAA site disabled again, Wascana untouched" >&2
  exit 1
fi
echo "== done"

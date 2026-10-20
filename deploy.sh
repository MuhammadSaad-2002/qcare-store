#!/bin/bash
set -euo pipefail
cd -- "$(dirname -- "$0")"
for qcare_php in /opt/cpanel/ea-php84/root/usr/bin/php /opt/cpanel/ea-php85/root/usr/bin/php /usr/local/bin/php /usr/bin/php; do
  if [ -x "$qcare_php" ] && "$qcare_php" -r 'exit(PHP_VERSION_ID >= 80401 ? 0 : 1);'; then
    exec "$qcare_php" deploy.php
  fi
done
printf '%s\n' 'PHP 8.4.1 or newer is required. Select PHP 8.4 in cPanel.' >&2
exit 1

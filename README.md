# Geek's Gadgets and Gizmos (Triple G)
!(https://raw.githubusercontent.com/omscllc/triple-g.dev/develop/lighthouse_results/desktop/lighthouse_performance.svg)

Geek's Gadgets and Gizmos (Triple G) is the website for [David Weiner](mailto:thegeek@triple-g.dev) built using Drupal and a custom theme.

## Site Setup Instructions
1. Clone the repository and navigate to the project directory : `git clone git@github.com:omscllc/triple-g.dev.git && cd triple-g.dev`
2. Copy `web/sites/default/example.settings.local.php` to `web/sites/default/settings.local.php`.
3. Run `composer install` to install PHP dependencies.
4. Set up your local database and update `settings.local.php` with the database credentials.
5. Obtain a database dump and import it into your local database.
6. Set the correct permissions for the `web/sites/default/files` directory.
7. Import configuration: `drush cim -y`
8. Update the database: `drush updb -y`
9. Run `npm install` to install Node.js dependencies.
10. Build front-end assets: `npm run build`
11. Clear caches: `drush cr`

## Nginx Setup
If you are using nginx, you can use this configuration.  Update the `root` directive to point to the `web` directory in your local copy.

```nginx
server {
  root /path/to/triple-g.dev/web;

  server_name triple-g.dev;

  # Map the theme root to the /assets URL path for cleaner URLs
  location ^~ /assets/theme/ {
    alias /path/to/triple-g.dev/web/themes/custom/triple_g/;
    expires 1M;
    access_log off;
  }

  listen 80;
  listen [::]:80;

  http2 on;

  index.php;

  sendfile on;
  tcp_nopush on;

  client_max_body_size 1G;

  proxy_connect_timeout 1800;
  proxy_send_timeout 1800;
  proxy_intercept_errors on;
  proxy_redirect off;

  location / {
     try_files $uri $uri/index.html @rewrite;
  }

  location @rewrite {
    # Some modules enforce no slash (/) at the end of the URL
    # Else this rewrite block wouldn't be needed (GlobalRedirect)
    rewrite ^/(.*)$ /index.php?q=$1 last;
  }

  location = /favicon.ico {
      log_not_found off;
      access_log off;
  }

  location = /robots.txt {
      log_not_found off;
      access_log off;
      allow all;
  }

  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
      try_files $uri @rewrite;
      expires max;
      log_not_found off;
  }

  location ~ '\.php$|^/update.php' {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+?\.php)(|/.*)$;
      include fastcgi_params;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      fastcgi_param PATH_INFO $fastcgi_path_info if_not_empty;
      fastcgi_param QUERY_STRING $query_string;
      fastcgi_param HTTP_PROXY "";
      fastcgi_index index.php;
      fastcgi_intercept_errors on;
      # Depending on your PHP-FPM setup you might need to adjust the following line:
      fastcgi_pass unix:/var/run/php-fpm.sock;
      fastcgi_buffers 16 32k;
      fastcgi_buffer_size 64k;
      fastcgi_busy_buffers_size 64k;
  }

  # Change the following to match your PHP-FPM log path
	access_log /var/log/nginx/triple-g.dev-access.log combined;
	error_log  /var/log/nginx/triple-g.dev-error.log error;
}
```
If you are using Apache or another web server, please refer to the [Drupal documentation](https://www.drupal.org/docs/system-requirements/web-server-requirements) and consider updating this README with relevant configuration details.

## Notes
- Requires PHP, Composer, Node.js, and Drush. Drush will be installed when you run `composer install`.
- The custom theme is located in `web/themes/custom/triple_g`.
- For deployment, see the GitHub Actions workflows in `.github/workflows/`.

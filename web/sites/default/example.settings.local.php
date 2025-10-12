<?php
$databases['default']['default'] = array (
  'database' => '',
  'username' => '',
  'password' => '',
  'prefix' => '',
  'host' => '',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
  'collation' => 'utf8mb4_general_ci',
);

$settings['hash_salt'] = '';

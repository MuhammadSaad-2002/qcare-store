<?php

declare(strict_types=1);
use Illuminate\Foundation\Application;

function qcare_install(string $root): string
{
    if (PHP_VERSION_ID < 80401) {
        throw new RuntimeException('Select PHP 8.4.1 or newer in cPanel.');
    }
    foreach (['pdo_mysql', 'mbstring', 'openssl', 'fileinfo', 'ctype', 'tokenizer', 'dom', 'xml', 'zlib', 'Phar'] as $extension) {
        if (! extension_loaded($extension)) {
            throw new RuntimeException('Enable the PHP extension: '.$extension);
        }
    }
    if (function_exists('set_time_limit')) {
        @set_time_limit(240);
    }
    $manifest = json_decode(file_get_contents($root.'/release/manifest.json'), true, flags: JSON_THROW_ON_ERROR);
    $private = $root.'/_private';
    $backend = $private.'/releases/'.$manifest['version'].'/backend';
    $assetsReady = is_file($private.'/.assets-installed') && trim(file_get_contents($private.'/.assets-installed')) === $manifest['uploadsSha256'];
    if (is_file($backend.'/.ready') && is_file($root.'/.env') && $assetsReady) {
        return $backend;
    }
    if (! is_dir($private) && ! mkdir($private, 0750, true) && ! is_dir($private)) {
        throw new RuntimeException('The subdomain folder must be writable by PHP.');
    }
    $lock = fopen($private.'/deploy.lock', 'c');
    if (! $lock || ! flock($lock, LOCK_EX)) {
        throw new RuntimeException('Unable to lock deployment. Please retry.');
    }
    try {
        foreach (['app/public', 'app/private', 'framework/cache/data', 'framework/sessions', 'framework/views', 'logs'] as $directory) {
            $path = $private.'/storage/'.$directory;
            if (! is_dir($path)) {
                mkdir($path, 0750, true);
            }
        }
        if (! is_file($root.'/.env')) {
            $environment = file_get_contents($root.'/.env.example');
            $environment = preg_replace('/^APP_KEY=.*$/m', 'APP_KEY=base64:'.base64_encode(random_bytes(32)), $environment);
            file_put_contents($root.'/.env', $environment, LOCK_EX);
            chmod($root.'/.env', 0600);
        }
        if (! is_file($backend.'/.ready')) {
            qcare_extract($root.'/release/backend.tar.gz', dirname($backend), $manifest['backendSha256']);
            file_put_contents($backend.'/.ready', $manifest['version']);
        }
        if (! $assetsReady) {
            qcare_extract($root.'/release/uploads.tar.gz', $private.'/storage/app/public', $manifest['uploadsSha256'], true);
            file_put_contents($private.'/.assets-installed', $manifest['uploadsSha256']);
        }
    } finally {
        flock($lock, LOCK_UN);
        fclose($lock);
    }

    return $backend;
}

function qcare_extract(string $archive, string $destination, string $checksum, bool $preserveExisting = false): void
{
    if (! hash_equals($checksum, hash_file('sha256', $archive))) {
        throw new RuntimeException('Deployment archive checksum mismatch. Pull the complete build again.');
    }
    if (! is_dir($destination)) {
        mkdir($destination, 0750, true);
    }
    $temporary = tempnam(dirname($destination), 'qcare-unpack-');
    $tarPath = $temporary.'.tar';
    rename($temporary, $tarPath);
    try {
        $input = gzopen($archive, 'rb');
        $output = fopen($tarPath, 'wb');
        if ($input === false || $output === false) {
            throw new RuntimeException('Unable to unpack the deployment archive.');
        }
        try {
            if (stream_copy_to_stream($input, $output) === false) {
                throw new RuntimeException('Unable to write the deployment archive.');
            }
        } finally {
            fclose($input);
            fclose($output);
        }
        $tar = new PharData($tarPath);
        if ($preserveExisting) {
            $prefix = 'phar://'.realpath($tarPath).'/';
            foreach (new RecursiveIteratorIterator($tar, RecursiveIteratorIterator::SELF_FIRST) as $entry) {
                $relative = substr($entry->getPathname(), strlen($prefix));
                if ($entry->isLink() || preg_match('~(?:^|/)\.\.(?:/|$)|^/~', $relative)) {
                    throw new RuntimeException('Invalid uploaded asset path.');
                }
                $target = $destination.'/'.$relative;
                if ($entry->isDir()) {
                    if (! is_dir($target)) {
                        mkdir($target, 0750, true);
                    }
                } elseif (! file_exists($target)) {
                    if (! copy($entry->getPathname(), $target)) {
                        throw new RuntimeException('Unable to install an uploaded asset.');
                    }
                }
            }
        } else {
            $tar->extractTo($destination, null, true);
        }
    } finally {
        unset($tar);
        unlink($tarPath);
    }
}

function qcare_app(string $root, string $backend): Application
{
    require_once $backend.'/vendor/autoload.php';
    $app = require $backend.'/bootstrap/app.php';
    $app->useEnvironmentPath($root);
    $app->useStoragePath($root.'/_private/storage');
    $app->usePublicPath($root);

    return $app;
}

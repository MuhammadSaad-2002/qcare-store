<?php

declare(strict_types=1);
use Illuminate\Contracts\Console\Kernel;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

ini_set('display_errors', '0');
$root = __DIR__;
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
if (preg_match('~(?:^|/)\.|^/(?:_private|release)(?:/|$)|^/deploy\.|\.(?:sql|env|yml|yaml|log|bak|tar|gz|zip)$~i', $path)) {
    http_response_code(404);
    exit;
}
if (PHP_SAPI === 'cli-server' && is_file($root.$path) && $path !== '/index.php') {
    return false;
}
require $root.'/release/runtime.php';
try {
    $backend = qcare_install($root);
    if (str_starts_with($path, '/storage/')) {
        $base = realpath($root.'/_private/storage/app/public');
        $file = realpath($base.'/'.substr($path, 9));
        if (! $file || ! str_starts_with($file, $base.DIRECTORY_SEPARATOR) || ! is_file($file) || ! preg_match('/\.(?:jpe?g|png|gif|webp|avif|svg|ico)$/i', $file)) {
            http_response_code(404);
            exit;
        }
        header('Content-Type: '.(str_ends_with(strtolower($file), '.svg') ? 'image/svg+xml' : mime_content_type($file)));
        header('X-Content-Type-Options: nosniff');
        header('Cache-Control: public, max-age=86400');
        header('Content-Length: '.filesize($file));
        readfile($file);
        exit;
    }
    $app = qcare_app($root, $backend);
    if (preg_match('~^/(?:api|sanctum)(?:/|$)|^/up$~', $path)) {
        $app->handleRequest(Request::capture());
        exit;
    }
    $app->make(Kernel::class)->bootstrap();
    $request = Request::capture();
    $app->instance('request', $request);
    Paginator::currentPageResolver(fn (): int => max(1, (int) $request->query('page', 1)));
    require $root.'/release/storefront.php';
} catch (Throwable $exception) {
    error_log('Q Care deployment: '.$exception->getMessage());
    http_response_code(503);
    header('Retry-After: 300');
    header('Content-Type: text/html; charset=UTF-8');
    echo '<!doctype html><html lang="en"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Q Care Pharmacy — Setup pending</title><body style="font:18px Arial,sans-serif;max-width:680px;margin:15vh auto;padding:24px;color:#1f2933"><h1>Q Care Pharmacy</h1><p>The store is being prepared. Please try again shortly.</p><p>Administrator: select PHP 8.4 or newer, import the supplied database, and update the database credentials in the local .env file.</p></body></html>';
}

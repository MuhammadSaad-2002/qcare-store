<?php

declare(strict_types=1);
use Illuminate\Contracts\Console\Kernel;

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
require __DIR__.'/release/runtime.php';
try {
    $backend = qcare_install(__DIR__);
    $app = qcare_app(__DIR__, $backend);
    $kernel = $app->make(Kernel::class);
    $kernel->bootstrap();
    if (config('database.connections.mysql.username') === 'CHANGE_ME') {
        echo "Files installed. Import the SQL in phpMyAdmin, then edit DB_DATABASE, DB_USERNAME and DB_PASSWORD in the generated .env file.\n";
        exit(0);
    }
    $exitCode = $kernel->call('migrate', ['--force' => true, '--no-interaction' => true]);
    echo $kernel->output();
    if ($exitCode !== 0) {
        throw new RuntimeException('Database migration failed. Check the local .env and the imported database.');
    }
    echo "Deployment complete. Environment and uploaded files preserved.\n";
} catch (Throwable $exception) {
    fwrite(STDERR, 'Deployment failed: '.$exception->getMessage()."\n");
    exit(1);
}

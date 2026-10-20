<?php

declare(strict_types=1);
use App\Http\Controllers\Api\V1\PublicBrandController;
use App\Http\Controllers\Api\V1\PublicCategoryController;
use App\Http\Controllers\Api\V1\PublicProductController;
use App\Models\Product;
use App\Services\PublicSettingsService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

function escape(string|int|float|null $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function description(string $value): string
{
    $plain = trim(preg_replace('/\s+/u', ' ', strip_tags($value)));

    return mb_strlen($plain) > 160 ? mb_substr($plain, 0, 157).'…' : $plain;
}

$origin = rtrim(config('app.url'), '/');
if ($path === '/robots.txt') {
    header('Content-Type: text/plain; charset=UTF-8');
    echo "User-agent: *\nAllow: /\n";
    foreach (['admin', 'account', 'cart', 'checkout', 'wishlist', 'login', 'register', 'api', 'sanctum', '_private', 'release'] as $restricted) {
        echo 'Disallow: /'.$restricted."\n";
    }
    echo 'Sitemap: '.$origin."/sitemap.xml\n";
    exit;
}
if ($path === '/sitemap.xml') {
    header('Content-Type: application/xml; charset=UTF-8');
    echo '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    foreach (['/', '/shop', '/about', '/help'] as $url) {
        echo '<url><loc>'.escape($origin.$url).'</loc></url>';
    }
    $categories = app(PublicCategoryController::class)->index()->getData(true)['data'];
    foreach ($categories as $category) {
        if ($category['products_count'] > 0) {
            echo '<url><loc>'.escape($origin.'/shop?category='.rawurlencode($category['slug'])).'</loc></url>';
        }
    }
    Product::forStorefront()->select(['id', 'slug', 'updated_at'])->chunkById(250, function ($products) use ($origin): void {
        foreach ($products as $product) {
            echo '<url><loc>'.escape($origin.'/shop/'.rawurlencode($product->slug)).'</loc><lastmod>'.$product->updated_at->toAtomString().'</lastmod></url>';
        }
    });
    echo '</urlset>';
    exit;
}
$settings = app(PublicSettingsService::class)->get();
$siteName = $settings['siteName'] ?: 'Q Care Pharmacy';
$pages = [
    '/' => ['Online Pharmacy in Rawalpindi, Pakistan', 'Shop medicines, vitamins, medical devices and nutrition at Q Care Pharmacy in Rawalpindi, with delivery across Pakistan.', 'Your neighbourhood pharmacy'],
    '/shop' => ['Shop Pharmacy Products', 'Browse medicines, vitamins, medical devices, personal care and nutrition at Q Care Pharmacy. Compare pack details and prices and order across Pakistan.', 'Shop products'],
    '/about' => ['About Us', 'Meet Q Care Pharmacy in Bahria Town, Rawalpindi. Discover medicines, family healthcare essentials, pharmacy support and delivery across Pakistan.', 'About us'],
    '/help' => ['Contact Us', 'Contact Q Care Pharmacy in Bahria Town, Rawalpindi. Call, email or WhatsApp our team, find directions and opening hours, or get help with your order.', 'Contact us'],
    '/cart' => ['Shopping Cart', 'Review your shopping cart and continue to checkout at Q Care Pharmacy.', 'Your cart'],
    '/wishlist' => ['Wishlist', 'Your saved pharmacy products at Q Care Pharmacy.', 'Your wishlist'],
    '/checkout' => ['Checkout', 'Complete your order securely at Q Care Pharmacy.', 'Checkout'],
    '/login' => ['Sign In', 'Sign in to your Q Care Pharmacy account.', 'Sign in'],
    '/register' => ['Create Account', 'Create a Q Care Pharmacy account to place and track your orders.', 'Create account'],
];
$cleanPath = rtrim($path, '/') ?: '/';
$privatePage = (bool) preg_match('~^/(?:admin|account|cart|checkout|wishlist|login|register)(?:/|$)~', $path);
[$title, $summary, $heading] = $pages[$cleanPath] ?? ($privatePage ? ['Your Account', 'Manage your Q Care Pharmacy account and orders.', 'Your account'] : ['Page Not Found', 'This page could not be found at Q Care Pharmacy.', 'Page not found']);
$canonical = $origin.$cleanPath;
$noindex = $privatePage;
$body = '';
$schema = null;
$image = null;
if (preg_match('~^/shop/([^/]+)/?$~', $path, $matches)) {
    try {
        $product = app(PublicProductController::class)->show($matches[1])->resolve($request);
        $title = $heading = $product['name'];
        $summary = description('Shop '.$product['name'].' at Q Care Pharmacy. '.($product['summary'] ?: 'View pack size, price and availability.').' Delivery across Pakistan.');
        $canonical = $origin.'/shop/'.rawurlencode($product['slug']);
        $image = $product['image']['url'] ?? null;
        $variant = $product['variants'][0] ?? null;
        $body = ($image ? '<img src="'.escape($image).'" alt="'.escape($product['image']['alt'] ?? $title).'" width="280" height="280" style="object-fit:contain">' : '').'<p>'.escape($product['summary'] ?? '').'</p><p>'.escape($product['description'] ?? '').'</p>';
        $schema = ['@context' => 'https://schema.org', '@type' => 'Product', 'name' => $title, 'description' => $summary, 'url' => $canonical];
        if ($image) {
            $schema['image'] = [$image];
        }
        if ($product['brand']) {
            $schema['brand'] = ['@type' => 'Brand', 'name' => $product['brand']['name']];
        }
        if ($variant) {
            $price = $variant['salePrice'] ?? $variant['regularPrice'];
            $schema['sku'] = $variant['sku'];
            $schema['offers'] = ['@type' => 'Offer', 'url' => $canonical, 'priceCurrency' => $variant['currencyCode'], 'price' => $price, 'availability' => $variant['inStock'] ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'];
            $body .= '<p>Pack price: '.escape($variant['currencyCode']).' '.escape($price).'</p><p>'.($variant['inStock'] ? 'In stock' : 'Out of stock').'</p>';
        }
    } catch (ModelNotFoundException $exception) {
        http_response_code(404);
        $noindex = true;
    }
} elseif ($cleanPath === '/' || $cleanPath === '/shop') {
    $categories = app(PublicCategoryController::class)->index()->getData(true)['data'];
    $filters = array_intersect_key($request->query(), array_flip(['category', 'brand', 'disease', 'use', 'type', 'q', 'letter', 'page', 'per_page', 'on_sale', 'sort']));
    $filterRequest = Request::create($origin.'/shop', 'GET', $filters);
    try {
        $products = app(PublicProductController::class)->index($filterRequest)->getData(true);
    } catch (ValidationException $exception) {
        $products = ['data' => [], 'meta' => ['lastPage' => 1, 'currentPage' => 1]];
        $noindex = true;
    }
    $selected = collect($categories)->firstWhere('slug', $request->query('category'));
    if ($cleanPath === '/shop') {
        $brands = app(PublicBrandController::class)->index()->getData(true)['data'];
        $selectedBrand = collect($brands)->firstWhere('slug', $request->query('brand'));
        $groups = array_filter(array_intersect_key($filters, array_flip(['category', 'brand', 'disease', 'use', 'type', 'on_sale'])), fn ($value): bool => $value !== null && $value !== '');
        $noindex = $noindex || count($groups) > 1
            || count(array_diff(array_keys($filters), ['category', 'brand', 'on_sale', 'page', 'sort'])) > 0
            || (isset($filters['sort']) && $filters['sort'] !== 'latest')
            || (isset($filters['category']) && ! $selected)
            || (isset($filters['brand']) && ! $selectedBrand)
            || collect($filters)->contains(fn ($value): bool => is_string($value) && str_contains($value, '|'));
        if ($selected || $selectedBrand) {
            $title = $heading = $selected['name'] ?? $selectedBrand['name'];
            $summary = description('Browse '.$title.' at Q Care Pharmacy. Compare pack details, prices and availability, and order for delivery across Pakistan.');
        } elseif (($filters['on_sale'] ?? null) === '1') {
            $title = $heading = 'Pharmacy Offers';
        }
        if (isset($filters['q']) && is_string($filters['q'])) {
            $title = 'Search results for '.mb_substr($filters['q'], 0, 60);
        }
        $params = [];
        if (! $noindex) {
            foreach (['category', 'brand', 'on_sale', 'page'] as $key) {
                if (isset($filters[$key]) && ($key !== 'page' || (int) $filters[$key] > 1)) {
                    $params[$key] = $filters[$key];
                }
            }
        }
        $canonical .= $params ? '?'.http_build_query($params) : '';
        if (isset($filters['page']) && (int) $filters['page'] > 1) {
            $title .= ' – Page '.(int) $filters['page'];
        }
    }
    $body = '<nav aria-label="Product categories">';
    foreach ($categories as $category) {
        if ($category['products_count'] > 0) {
            $body .= '<a href="/shop?category='.rawurlencode($category['slug']).'">'.escape($category['name']).'</a> ';
        }
    }
    $body .= '</nav><div class="store-catalog-grid">';
    foreach ($products['data'] as $product) {
        $body .= '<article><a href="/shop/'.rawurlencode($product['slug']).'">'.($product['image'] ? '<img src="'.escape($product['image']['url']).'" alt="'.escape($product['image']['alt'] ?? $product['name']).'" width="180" height="180" style="object-fit:contain">' : '').'<h2>'.escape($product['name']).'</h2></a><p>'.escape($product['summary']).'</p></article>';
    }
    $body .= '</div>';
    if ($products['meta']['currentPage'] < $products['meta']['lastPage']) {
        $body .= '<a href="/shop?'.escape(http_build_query([...$request->query(), 'page' => $products['meta']['currentPage'] + 1])).'">Next page</a>';
    }
} elseif ($cleanPath === '/about') {
    $body = '<p>Q Care Pharmacy is your local pharmacy in Bahria Town, Rawalpindi. Visit us opposite Bahria International Hospital in Phase 8, or browse medicines, medical devices, supplements, nutrition and personal care online.</p><p>Home delivery in Bahria Town within 45 minutes. Website orders outside Bahria Town are delivered by courier.</p><p>'.escape($settings['address']).'</p><a href="/help">Contact the pharmacy team</a>';
} elseif ($cleanPath === '/help') {
    $body = '<p>Call <a href="tel:'.escape(preg_replace('/[^+\d]/', '', $settings['phone'] ?? '')).'">'.escape($settings['phone']).'</a></p><p>Email <a href="mailto:'.escape($settings['email']).'">'.escape($settings['email']).'</a></p><p>'.escape($settings['address']).'</p><p>Opening hours: '.escape($settings['hours']).'</p><p>Bahria Town home delivery in 45 minutes. Orders outside Bahria Town are sent by courier.</p>';
} elseif (! $privatePage && ! isset($pages[$cleanPath])) {
    http_response_code(404);
    $noindex = true;
}
$entry = json_decode(file_get_contents($root.'/assets/entry.json'), true, flags: JSON_THROW_ON_ERROR);
header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
?>
<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title><?= escape($title.' | '.$siteName) ?></title>
<meta name="description" content="<?= escape($summary) ?>">
<meta name="robots" content="<?= $noindex ? 'noindex, follow' : 'index, follow' ?>">
<link rel="canonical" href="<?= escape($canonical) ?>">
<meta property="og:type" content="<?= $schema ? 'product' : 'website' ?>"><meta property="og:locale" content="en_PK"><meta property="og:site_name" content="<?= escape($siteName) ?>">
<meta property="og:title" content="<?= escape($title.' | '.$siteName) ?>"><meta property="og:description" content="<?= escape($summary) ?>"><meta property="og:url" content="<?= escape($canonical) ?>">
<?php if ($image) { ?><meta property="og:image" content="<?= escape($image) ?>"><?php } ?>
<meta name="twitter:card" content="<?= $image ? 'summary_large_image' : 'summary' ?>"><meta name="twitter:title" content="<?= escape($title.' | '.$siteName) ?>"><meta name="twitter:description" content="<?= escape($summary) ?>">
<link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-icon.png">
<link rel="preload" href="/assets/NunitoSans.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="<?= escape($entry['css']) ?>">
<noscript><style>.store-page-loader { display: none !important; }</style></noscript>
<?php if ($schema) { ?><script id="qcare-initial-schema" type="application/ld+json"><?= json_encode($schema, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES) ?></script><?php } ?>
<?php foreach ($entry['scripts'] as $script) { ?><script defer src="<?= escape($script) ?>"></script><?php } ?>
</head><body class="antialiased"><div id="app"><?php readfile($root.'/release/loading-overlay.html'); ?><div class="storefront-shell"><header style="padding:24px"><a href="/"><?= escape($siteName) ?></a><nav><a href="/shop">Shop all</a> · <a href="/about">About us</a> · <a href="/help">Contact us</a> · <a href="/cart">Cart</a></nav></header><main id="main-content" style="max-width:1320px;margin:auto;padding:24px"><h1><?= escape($heading) ?></h1><?= $body ?><noscript><p>Enable JavaScript to use shopping, filters, checkout and account features.</p></noscript></main></div></div></body></html>

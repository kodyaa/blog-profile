<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

#[Signature('app:export')]
#[Description('Export Laravel Inertia pages to static HTML for GitHub Pages')]
class ExportSite extends Command
{
    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $targetDir = base_path('dist');

        $this->info("Preparing target directory: {$targetDir}");
        if (File::exists($targetDir)) {
            File::deleteDirectory($targetDir);
        }
        File::makeDirectory($targetDir, 0755, true);

        // Get all GET routes that don't have parameters and are not debug/internal routes
        $routes = collect(Route::getRoutes()->get('GET'))
            ->map(fn ($route) => $route->uri())
            ->filter(fn ($uri) => ! str_contains($uri, '{') &&
                ! str_starts_with($uri, '_') &&
                ! str_starts_with($uri, 'api/')
            )
            ->map(fn ($uri) => '/'.ltrim($uri, '/'))
            ->unique()
            ->values()
            ->toArray();

        if (empty($routes)) {
            $this->warn('No routes found to export.');

            return Command::SUCCESS;
        }

        $this->info('Found '.count($routes).' routes to export.');

        foreach ($routes as $route) {
            $this->info("Exporting: {$route}");

            // Create an in-memory GET request
            $request = Request::create($route, 'GET');

            // Pass request through the application kernel
            $response = app()->handle($request);

            if ($response->getStatusCode() !== 200) {
                $this->error("Failed to export {$route}. HTTP Status: ".$response->getStatusCode());

                continue;
            }

            $content = $response->getContent();

            // Determine output file path
            if ($route === '/') {
                $filePath = $targetDir.'/index.html';
            } else {
                $dir = ltrim($route, '/');
                File::makeDirectory($targetDir.'/'.$dir, 0755, true, true);
                $filePath = $targetDir.'/'.$dir.'/index.html';
            }

            File::put($filePath, $content);
            $this->line('Saved to: '.str_replace(base_path().DIRECTORY_SEPARATOR, '', $filePath));
        }

        // Copy public directory assets (CSS, JS, images, favicons) to target directory
        $publicPath = public_path();
        if (File::exists($publicPath)) {
            $this->info('Copying assets from public/ to dist/...');
            File::copyDirectory($publicPath, $targetDir);

            // Clean up index.php and web.config from static output since they are for backend servers
            if (File::exists($targetDir.'/index.php')) {
                File::delete($targetDir.'/index.php');
            }
            if (File::exists($targetDir.'/web.config')) {
                File::delete($targetDir.'/web.config');
            }
        }

        $this->info("Export completed successfully! Static files are in 'dist/'.");

        return Command::SUCCESS;
    }
}

<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    @class(['dark' => ($appearance ?? 'system') == 'dark', 'light' => ($appearance ?? 'system') == 'light'])
    data-theme="{{ ($appearance ?? 'system') === 'dark' ? 'dark' : 'light' }}"
>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Immediately apply theme before paint to avoid flash-of-unstyled-content --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark);
                const resolvedTheme = isDark ? 'dark' : 'light';

                // Apply class for Tailwind dark: variants
                document.documentElement.classList.toggle('dark', isDark);
                document.documentElement.classList.toggle('light', !isDark);

                // Apply data-theme for HeroUI component theming
                document.documentElement.setAttribute('data-theme', resolvedTheme);

                // Apply color-scheme for native browser UI
                document.documentElement.style.colorScheme = resolvedTheme;
            })();
        </script>

        {{-- Prevent background flash during load by mirroring HeroUI's bg-background --}}
        <style>
            html {
                background-color: oklch(0.9844 0.0028 275.18); /* HeroUI light --background */
            }

            html.dark {
                background-color: oklch(0.1535 0.0067 285.89); /* HeroUI dark --background */
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Laravel') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>

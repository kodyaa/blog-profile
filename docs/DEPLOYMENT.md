# Panduan Deployment - Portofolia Blog by Kodya

Dokumen ini menjelaskan langkah-langkah untuk mendeploy aplikasi Laravel + React + Inertia ini ke lingkungan produksi (production server).

---

## 1. Pilihan Hosting Utama

*   **Laravel Cloud (Rekomendasi Utama)**: Layanan resmi paling cepat dan efisien untuk deployment aplikasi Laravel secara otomatis dengan integrasi auto-scaling.
*   **VPS Tradisional (Ubuntu, Nginx, PHP-FPM)**: Memberikan kontrol penuh atas konfigurasi server.

---

## 2. Prosedur Deployment di VPS (Nginx)

### Langkah 1: Clone Repositori & Hak Akses
1.  Unduh source code ke server Anda:
    ```bash
    git clone https://github.com/kodyaa/blog-profile.git /var/www/portofolia-blog
    cd /var/www/portofolia-blog
    ```
2.  Sesuaikan hak akses folder agar web server (biasanya `www-data`) dapat menulis data log dan sesi:
    ```bash
    chown -R www-data:www-data /var/www/portofolia-blog
    chmod -R 775 storage bootstrap/cache
    ```

### Langkah 2: Instal Dependensi Backend & Frontend
1.  Instal library PHP produksi tanpa komponen development:
    ```bash
    composer install --no-dev --optimize-autoloader
    ```
2.  Instal dan kompilasi modul frontend:
    ```bash
    npm install
    npm run build
    ```
    *Catatan: Setelah perintah `npm run build` selesai, Anda dapat menghapus folder `node_modules` di server produksi jika ingin menghemat penyimpanan, karena browser hanya memerlukan aset terkompilasi di dalam folder `public/build/`.*

### Langkah 3: Konfigurasi Berkas `.env`
1.  Buat file `.env` produksi:
    ```bash
    cp .env.example .env
    ```
2.  Sesuaikan parameter penting berikut:
    ```env
    APP_ENV=production
    APP_DEBUG=false
    APP_URL=https://nama-domain-anda.com

    DB_CONNECTION=sqlite # Atau koneksi database MySQL/PostgreSQL Anda
    ```
3.  Generate application key:
    ```bash
    php artisan key:generate --force
    ```

### Langkah 4: Optimasi Laravel Cache
Jalankan perintah optimasi untuk mempercepat loading respon backend:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## 3. Konfigurasi Nginx Server Block

Berikut adalah konfigurasi dasar Nginx block untuk mengarahkan lalu lintas domain ke folder `public/` aplikasi Laravel:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name nama-domain-anda.com;
    root /var/www/portofolia-blog/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock; # Sesuaikan dengan versi PHP server Anda
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

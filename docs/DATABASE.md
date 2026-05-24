# Desain & Struktur Database - Portofolia Blog by Kodya

Website profil perusahaan ini dirancang menggunakan konsep **Frontend-Driven Static Content** pada halaman publik. Hal ini meminimalkan ketergantungan pada database operasional, meningkatkan kecepatan rendering, dan memperkuat keamanan.

---

## 1. Filosofi Desain Database
Untuk kebutuhan profil perusahaan (seperti daftar layanan, visi-misi, biografi tim, dan item portofolio), data di-hardcode dalam state komponen React di frontend. 
*   **Keuntungan**: Tidak ada query database tambahan (N+1 query) saat memuat halaman, mengurangi overhead koneksi MySQL/PostgreSQL, serta memudahkan penulisan konten statis langsung oleh developer.
*   **Keamanan**: Mempersempit vektor serangan SQL Injection karena tidak ada input data publik yang dievaluasi langsung oleh query SQL di backend.

---

## 2. Pengelolaan Data Dinamis & Autentikasi
Aplikasi ini awalnya memiliki fitur otentikasi (Laravel Fortify). Namun, untuk website profil perusahaan, konfigurasi diatur sebagai berikut:

*   **Tabel `users`**: Tidak digunakan aktif untuk fungsionalitas login/registrasi oleh publik. Fitur registrasi dan otentikasi ditutup.
*   **Tabel `sessions`**: Digunakan hanya untuk menyimpan data sesi kunjungan dasar (dark/light mode state, cache token CSRF).
*   **Tabel `cache`**: Digunakan oleh Laravel untuk mengoptimalkan pemuatan konfigurasi internal.

---

## 3. Skema Dasar Penyimpanan Session

Meskipun data bersifat statis, database default Laravel tetap berjalan untuk mendukung pengelolaan sesi (`database` session driver). Skema dasar tabel session adalah sebagai berikut:

| Field | Tipe Data | Deskripsi |
| :--- | :--- | :--- |
| `id` | `VARCHAR(255)` | ID Sesi unik (Primary Key) |
| `user_id` | `FOREIGN KEY` | Selalu bernilai `NULL` karena fitur login dimatikan |
| `ip_address` | `VARCHAR(45)` | Alamat IP pengunjung untuk keamanan rate limiting |
| `user_agent` | `TEXT` | Informasi browser/perangkat pengunjung |
| `payload` | `LONGTEXT` | Data sesi terenkripsi (token CSRF, status penampilan UI) |
| `last_activity` | `INT(11)` | Timestamp aktivitas terakhir |

---

## 4. Keamanan Koneksi Database
Jika Anda ingin menghubungkan database kustom di kemudian hari:
1.  Pastikan parameter database di `.env` (`DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`) terisi dengan benar.
2.  Gunakan SQLite sebagai default lokal jika Anda tidak ingin menjalankan database server MySQL/PostgreSQL tambahan:
    ```env
    DB_CONNECTION=sqlite
    # Laravel akan otomatis membuat database.sqlite jika belum ada
    ```

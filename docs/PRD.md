# Dokumen Kebutuhan Produk (PRD) - Portofolia Blog by Kodya

## 1. Latar Belakang & Deskripsi
Proyek ini bertujuan untuk membangun website profil perusahaan yang modern, premium, dan interaktif. Website ini berfungsi sebagai media representasi digital resmi untuk memperkenalkan perusahaan, memamerkan layanan teknis, menyajikan studi kasus proyek (portofolio), dan menyediakan sarana komunikasi bagi calon klien.

## 2. Tujuan & Target Pengguna
*   **Tujuan**: Memberikan impresi pertama yang profesional, responsif, dan meyakinkan untuk memicu minat kerja sama bisnis.
*   **Target Pengguna**: Calon klien (perusahaan enterprise/startup), mitra kerja sama, dan pengembang teknologi yang ingin mempelajari kredibilitas operasional perusahaan.

## 3. Fitur Utama (Scope)
*   **Halaman Beranda (Home Landing)**: Hero banner yang memikat, ringkasan statistik pencapaian, pilar keunggulan, dan preview layanan & portofolio.
*   **Halaman Tentang Kami (About Us)**: Sejarah singkat, pernyataan Visi & Misi yang terstruktur, Nilai-nilai Utama Perusahaan (Excellence, Integrity, Customer-Centric), serta direktori tim kepemimpinan.
*   **Halaman Layanan (Services)**: Katalog layanan lengkap dengan perincian fitur teknis, tumpukan teknologi (tech stack) yang digunakan, dan metodologi pengerjaan proyek (agile sprint).
*   **Halaman Portofolio**: Galeri proyek yang dilengkapi filter dinamis real-time (Semua, Web, Mobile, DevOps, Desain) dengan animasi hover.
*   **Halaman Kontak (Contact)**: Alamat fisik kantor pusat, email bisnis, jam operasional, formulir inquiry interaktif dengan validasi state serta visual penanda lokasi kantor (peta).

## 4. Kebutuhan Non-Fungsional (NFR)
*   **Desain & Estetika**: Premium, dinamis, mendukung transisi mode gelap/terang, layout responsif (Mobile, Tablet, Desktop) menggunakan HeroUI v3 dan Tailwind CSS v4.
*   **Performa**: Waktu muat awal cepat dengan pembagian bundle (code splitting) otomatis dari Vite.
*   **Keamanan**: Membatasi akses backend secara ketat. Semua fitur autentikasi (login, register, 2FA, passkeys) dinonaktifkan di tingkat konfigurasi (Fortify) untuk meminimalkan celah keamanan.
*   **Validasi Tipe Data**: Penulisan kode berbasis TypeScript ketat untuk mencegah runtime crash.

# Spesifikasi API & Route - Portofolia Blog by Kodya

Karena website ini berfokus pada profil perusahaan statis, server Laravel hanya bertugas melayani routing halaman publik melalui rendering Inertia. Tidak ada endpoint database CRUD dinamis yang terekspos untuk menjaga tingkat keamanan aplikasi dari serangan luar.

---

## 1. Halaman Publik (Inertia Routes)

Seluruh route didefinisikan pada berkas [routes/web.php](file:///d:/Windows%20App/Laravel/blog/routes/web.php).

| Method | Endpoint | Nama Route | Komponen View | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | `home` | `welcome.tsx` | Merender Beranda Profil Perusahaan |
| **GET** | `/about` | `about` | `about.tsx` | Merender Visi-Misi, Nilai, & Direktori Tim |
| **GET** | `/services` | `services` | `services.tsx` | Merender Katalog Layanan & Metodologi |
| **GET** | `/portfolio` | `portfolio` | `portfolio.tsx` | Merender Galeri Filter Proyek |
| **GET** | `/contact` | `contact` | `contact.tsx` | Merender Kontak, Alamat, & Formulir Inquiry |

---

## 2. Alur Pengiriman Formulir Kontak (Inquiry Form)

Pengiriman data inquiry dari halaman `/contact` saat ini diproses secara **Client-Side Simulation (Mock API)**:
1.  **Request Body**:
    ```json
    {
      "name": "String (Required)",
      "email": "String/Email (Required)",
      "subject": "String (Required)",
      "message": "String (Required)"
    }
    ```
2.  **Proses**: State komponen React menangani event `onSubmit`, merubah status tombol menjadi `isPending={true}` selama 1.5 detik (mensimulasikan delay server), kemudian mengosongkan form dan memunculkan banner sukses.
3.  **Pengembangan Masa Depan**: Jika Anda ingin menyimpan pesan inquiry ke database atau mengirimkannya via email:
    *   Ubah form handler di `contact.tsx` menjadi Inertia form submission (`useForm` dari `@inertiajs/react`).
    *   Buat route POST baru di `routes/web.php`:
        ```php
        Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
        ```
    *   Lakukan validasi data di controller dan kirim notifikasi email via Laravel Mail.

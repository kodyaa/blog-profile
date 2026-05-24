# Standar Penulisan Kode - Portofolia Blog by Kodya

Dokumen ini mendefinisikan aturan dan konvensi penulisan kode (Coding Style) untuk menjaga keterbacaan, konsistensi, dan kualitas codebase.

---

## 1. Standar Kode PHP (Backend)

*   **Pola Format**: Mengikuti aturan default **Laravel Pint**. Sebelum melakukan kompilasi akhir atau commit, jalankan linter:
    ```bash
    vendor/bin/pint --dirty --format agent
    ```
*   **Tipe Data Ketat (Type Hints)**: Wajib mendeklarasikan tipe data parameter dan tipe data kembalian (return type) pada setiap fungsi/method:
    ```php
    public function isAccessible(User $user, ?string $path = null): bool
    {
        return true;
    }
    ```
*   **Constructor Property Promotion**: Gunakan promosi properti di dalam constructor untuk meminimalkan boilerplate:
    ```php
    public function __construct(
        protected GitHubService $github
    ) {}
    ```
*   **Blok PHPDoc**: Selalu gunakan blok komentar PHPDoc untuk menerangkan tipe data array kompleks atau logika rumit di atas class/method.

---

## 2. Standar Kode JavaScript / TypeScript (Frontend)

*   **Pengecekan Tipe Data**: Seluruh kode ditulis berbasis TypeScript mode ketat (`strict: true`). Jalankan verifikasi tipe data sebelum build:
    ```bash
    npm run types:check
    ```
*   **Deklarasi Komponen**: Komponen React ditulis sebagai Functional Components dengan penulisan PascalCase.
*   **Komponen HeroUI v3**:
    *   Impor komponen dari `@heroui/react`.
    *   Gunakan struktur **dot-notation** untuk komponen majemuk (compound components) seperti `Card`, misal: `<Card.Header>`, `<Card.Content>`, `<Card.Footer>`.
    *   Gunakan properti `isPending` untuk state tombol loading daripada `isLoading`.
*   **Format Kode**: Menggunakan **Prettier** untuk merapikan baris kode:
    ```bash
    npm run format
    ```

---

## 3. Standar Tailwind CSS v4 & Styling

*   **Utility-First**: Tulis styling langsung menggunakan utility class di dalam properti `className`. Hindari menulis CSS inline `style={{ ... }}` kecuali untuk perhitungan matematika dinamis.
*   **Aturan Tailwind v4**:
    *   Gunakan kelas arah gradien linier baru: `bg-linear-to-br` menggantikan `bg-gradient-to-br`.
    *   Gunakan kelas skala default Tailwind v4 daripada nilai piksel statis jika memungkinkan (misal: `h-100` untuk 400px, `w-75` untuk 300px, `w-125` untuk 500px).
    *   Gunakan format `bg-size-[value]` daripada inline background-size `[background-size:value]`.

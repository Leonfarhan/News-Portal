# NY Times News Portal
Portal berita simpel yang menampilkan berita-berita teratas dari NY Times API. Dibangun menggunakan Angular, NgRx, Tailwind CSS, dan Three.js. Aplikasi sudah di-deploy dan bisa diakses di [https://news-portal-wine.vercel.app/](https://news-portal-wine.vercel.app/).

## Fitur-fitur

* Menampilkan berita teratas dari berbagai kategori (Home, World, Technology, Science, Health, Politics).
* Background beranimasi menggunakan Three.js.
* Navigasi mudah menggunakan kategori.
* Tampilan modern dengan Tailwind CSS.
* State management menggunakan NgRx agar data lebih rapi dan efisien.
* Animasi transisi antar komponen yang smooth.

## Persiapan

Sebelum menjalakan proyek ini, pastikan sudah install:

* [Node.js](https://nodejs.org/) (versi 18 atau lebih baru lebih disarankan)
* [Angular CLI](https://angular.io/cli)

## Cara Install

1. Clone repository ini:

```bash
git clone https://github.com/Leonfarhan/News-Portal.git
```

2. Masuk ke folder proyek:

```bash
cd News-Portal
```

3. Install dependensi:

```bash
npm install
```

## Menjalankan Aplikasi di Lokal

```bash
npm start
```

Aplikasi akan jalan di `http://localhost:4200/`.

## Deploy ke Vercel
```
ng build --prod
```
Perintah ini akan menghasilkan folder dist/News-Portal yang berisi file-file statis untuk deployment.

Import project ke Vercel:
* Buat akun Vercel jika belum punya.
* Pada dashboard Vercel, klik "Import Project".
* Pilih "Import Git Repository" atau upload folder dist/News-Portal secara langsung.

Konfigurasi Vercel (jika diperlukan):

Vercel biasanya bisa mendeteksi project Angular dengan benar. Tapi, jika ada masalah, cek pengaturan berikut:
* Output Directory: Pastikan diset ke dist/News-Portal.
* Install Command: npm install
* Build Command: Kosongkan karena sudah di-build sebelumnya.
* Framework Preset: Pilih "Other" atau "Angular" jika tersedia.
* Deploy: Setelah konfigurasi selesai, deploy project. Vercel akan memberikan URL untuk akses aplikasinya.

## Test Aplikasi
Testing aplikasi ini dilakukan secara manual. Setelah di-deploy, coba beberapa hal berikut:
* Buka aplikasi di berbagai browser (Chrome, Firefox, Safari, dll.) dan pastikan tampilannya konsisten.
* Coba klik navigasi kategori dan pastikan berita yang ditampilkan sesuai.
* Pastikan animasi background Three.js berjalan dengan lancar.
* Cek responsivitas tampilan di berbagai ukuran layar (desktop, tablet, mobile).

## Struktur Proyek

```
├── src
│   ├── app
│   │   ├── app.component.ts            # Komponen utama
│   │   ├── components                  # Komponen-komponen UI
│   │   │   ├── category-nav            # Navigasi kategori
│   │   │   ├── news-list               # Daftar berita
│   │   │   └── three-background        # Animasi background
│   │   ├── core                        # Services
│   │   │   └── services
│   │   │       └── news.service.ts     # Service untuk ambil data berita
│   │   └── store                       # NgRx store, actions, dll.
│   ├── global_styles.css               # Global styles (Tailwind CSS)
│   ├── index.html                      # File HTML utama
│   └── main.ts                         # Entry point aplikasi
├── tailwind.config.js                  # Konfigurasi Tailwind CSS
└── ...                                 # File konfigurasi lainnya
```

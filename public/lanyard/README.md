# Gambar kartu Lanyard

Letakkan gambar kustom di folder ini dengan nama berikut:

- `card-front.png` — gambar sisi depan kartu
- `card-back.png` — gambar sisi belakang kartu
- `band.png` — tekstur tali lanyard (opsional)

Gunakan gambar kartu potret berukuran sekitar 1024 × 1440 px. PNG disarankan
agar kualitas gambar tetap tajam. Tekstur tali sebaiknya berupa gambar sempit
yang dapat diulang. Jika file belum tersedia, kartu tetap dirender dengan
warna dasar komponen.

Untuk memakai nama atau format file lain, ubah properti `frontImage`,
`backImage`, dan `strapImage` pada komponen `Lanyard` di `app/page.tsx`.

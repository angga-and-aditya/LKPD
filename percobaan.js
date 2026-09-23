// Aktivitas 1 – Prediksi

let a1 = 10;
let b1 = 5;
console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);

// Aktivitas 2 - Experiment

let a2 = 20;
let b2 = 4;
console.log(a2 + b2);
console.log(a2 - b2);
console.log(a2 * b2);
console.log(a2 / b2);
console.log(a2 % b2);

// Aktivitas 3 - Input dengan Prompt

let nama = prompt("Masukkan nama:");
console.log(nama);
let umur = prompt("Masukkan umur:");
console.log(umur);

// Aktivitas 4 - Menghitung umur

let tahunLahir = prompt("Masukkan tahun lahir:");
let tahunSekarang = 2026;
let umur1 = tahunSekarang - tahunLahir;
console.log(umur1);

// Aktivitas 5 - Mesin kasir mini

let harga = prompt("Masukkan harga:");
let jumlah = prompt("Masukkan jumlah:");
let total = harga * jumlah;
console.log(total);

// Aktivitas 7 - Challenge: Warung Digital

let makanan = prompt ("Apa makanan yang anda beli")
let harga2 = prompt("Harga:");
let jumlah2 = prompt("Jumlah:");
let total2 = harga2 * jumlah2;
console.log(makanan);
console.log(harga2);
console.log(jumlah);
console.log(total);

let diskon = total * 10 / 100;
let bayar = total - diskon;
console.log(total);
console.log(diskon);
console.log(bayar);

// Aktivitas 8 - Debbugging

let harga3 = 5000;
let jumlah3 = 3;
let totalHarga3 = harga3 * jumlah3;
console.log(totalHarga3);

// Aktivitas 9 - Challenge Mandiri Kalkulator Tabungan

let uangAwal = Number(prompt("Uang awal:"));
let hariPertama = Number(prompt("Tabungan hari pertama:"));
let hariKedua = Number(prompt("Tabungan hari kedua:"));
let hariKetiga = Number(prompt("Tabungan hari ketiga"));

let total4 = uangAwal + hariPertama + hariKedua + hariKetiga;
console.log(total4);
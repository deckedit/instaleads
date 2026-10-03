// Ganti nomor berikut dengan WhatsApp bisnis Anda.
// Format: 628xxxxxxxxxx — tanpa tanda +, spasi, atau tanda hubung.
const whatsappNumber = "6281228080210";
const text = encodeURIComponent(
  "Halo, saya tertarik menggunakan jasa mencari calon pelanggan dari Instagram.\n\n" +
  "Produk/Jasa: \nLokasi target: \nJenis bisnis yang ditargetkan: \nJumlah prospek yang dibutuhkan: "
);
const btn = document.getElementById("waButton");
if (btn) btn.href = `https://wa.me/${whatsappNumber}?text=${text}`;

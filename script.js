// 1) Set tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Ganti nomor WhatsApp di sini (format internasional tanpa + dan tanpa spasi)
const WA_NUMBER = "6281234567890"; // <- ganti
const DEFAULT_MSG = "Halo, saya mau order. Bisa dibantu?";

// Fungsi bikin link WA
function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

// Set link WA di beberapa tombol
document.getElementById("btnWaTop").href = waLink(DEFAULT_MSG);
document.getElementById("btnWaHero").href = waLink(DEFAULT_MSG);
document.getElementById("btnWaContact").href = waLink(DEFAULT_MSG);
document.getElementById("fabWa").href = waLink(DEFAULT_MSG);

// Info nomor (opsional)
document.getElementById("waInfo").textContent = `Nomor: +${WA_NUMBER}`;

// 3) Tombol "Pesan" per produk: otomatis kirim nama & harga
document.querySelectorAll(".btnOrder").forEach((btn) => {
  btn.addEventListener("click", () => {
    const produk = btn.dataset.produk || "Produk";
    const harga = btn.dataset.harga || "";
    const msg = `Halo, saya mau order:\n- Produk: ${produk}\n- Harga: ${harga}\n\nApakah masih tersedia?`;
    window.open(waLink(msg), "_blank");
  });
});
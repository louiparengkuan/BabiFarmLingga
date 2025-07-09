// Inisialisasi EmailJS setelah semua file diload
window.onload = function () {
  emailjs.init("r_rFmiTkAVhFNLfaB"); // Public key dari EmailJS
};

// Fungsi untuk kirim email
function kirimNotifikasi() {
  emailjs.send("service_ymasvx6", "template_44fwxe1", {
    subject: "Pemberitahuan Tugas",
    message: "Tugas Anda Sudah di cek"
  })
  .then(function(response) {
    alert("✅ Email berhasil dikirim!");
  }, function(error) {
    alert("❌ Gagal mengirim email: " + JSON.stringify(error));
  });
}

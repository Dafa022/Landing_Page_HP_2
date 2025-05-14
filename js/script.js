document.getElementById("preorderForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const nomor = document.getElementById("nomor").value.trim();
    const warna = document.getElementById("warna").value;
    const catatan = document.getElementById("catatan").value.trim();
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nama || !email || !nomor || !warna || !catatan) {
      alert("Semua field wajib diisi.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Email tidak valid.");
      return;
    }
  
    alert("Terima kasih telah melakukan pre-order!");
    document.getElementById("preorderForm").reset();
  });
  
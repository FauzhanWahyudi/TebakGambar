function ubahNama() {
    // Memunculkan prompt untuk pengguna memasukkan nama
    let namaBaru = prompt("Masukkan nama Anda:", "Jenny");

    // Jika pengguna memasukkan nama yang valid (tidak kosong)
    if (namaBaru != null && namaBaru.trim() !== "") {
        // Menyimpan nama ke Local Storage
        localStorage.setItem("namaPengguna", namaBaru);

        // Mengarahkan ke halaman berikutnya (page2.html)
        window.location.href = "./page2.html";
    }
}



// Fungsi untuk menampilkan nama yang disimpan di Local Storage
function tampilkanNama() {
    // Mengambil nama dari Local Storage
    let namaPengguna = localStorage.getItem("namaPengguna");

    // Jika nama ditemukan di Local Storage, tampilkan di <h2>
    if (namaPengguna != null && namaPengguna.trim() !== "") {
        // Mengubah teks dan atribut 'title' di elemen <h2>
        document.getElementById("greeting").innerHTML = "Selamat Bermain " + namaPengguna;
        document.getElementById("greeting").setAttribute("title", namaPengguna);
    }
}

// Memanggil fungsi untuk menampilkan nama ketika halaman dimuat
window.onload = tampilkanNama;
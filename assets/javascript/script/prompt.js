function ubahNama() {
    // Memunculkan prompt untuk pengguna memasukkan nama
    let namaBaru = prompt("Masukkan nama Anda:", "Jenny");

    // Jika pengguna memasukkan nama yang valid (tidak kosong)
    if (namaBaru != null && namaBaru.trim() !== "") {
        // Menyimpan nama ke Local Storage
        localStorage.setItem("namaPengguna", namaBaru);

        // Mengarahkan ke halaman berikutnya (page2.html)
        window.location.href = "./page2.html";
    } else {    
        let alert = prompt("Apakah ingin menggunakan akun sebelumnya? Ya / Tidak", "Tidak");
        if (alert.toLowerCase() === "ya") {    
        //     // Mengarahkan ke halaman berikutnya (page2.html)
            window.location.href = "./page2.html";
        } else {
            window.location.href = "./index.html";
        }
    }
}



// Fungsi untuk menampilkan nama yang disimpan di Local Storage
function tampilkanNama() {
    // Mengambil nama dari Local Storage
    let namaPengguna = localStorage.getItem("namaPengguna");
    
    // Jika nama ditemukan di Local Storage, tampilkan di <h2>
    if (namaPengguna != null && namaPengguna.trim() !== "") {
        // Mengubah teks dan atribut 'title' di elemen <h2>
        document.getElementById("greeting").innerHTML = "Selamat Bermain " + namaPengguna + " ;]";
        document.getElementById("greeting").setAttribute("title", namaPengguna);
    }
    updatePemain(namaPengguna);
}

// Memanggil fungsi untuk menampilkan nama ketika halaman dimuat
window.onload = tampilkanNama;

function updatePemain(nama){
    //cari dari data pemain
    let storagePemain = JSON.parse(localStorage.getItem('pemain'));
    let pemainIndex = storagePemain.findIndex(obj => obj.name == nama);
    //jika tidak ditemukan
    if(pemainIndex < 0){
        storagePemain.push(
            {
               "name": nama,
               "point": 0
             })
    }
    localStorage.setItem('pemain', JSON.stringify(storagePemain));
    pemain = [...storagePemain];
}
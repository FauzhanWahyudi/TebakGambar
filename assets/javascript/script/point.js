//ambil nama pemain dan jawabannya


function cekJawaban(){

    //ambil data anang
    for(let perPemain of pemain){
        //cari data yang jawab
        let namaPerPemain = perPemain.name

        if(namaPemain == namaPerPemain){
            // console.log(perPemain);
            //cek apakah jawabn benar
            let point = 1000;
            if(jawabanPemain.toLowerCase() === dataGambar.jwb.toLowerCase()){
                perPemain.point += point
            }
            // console.log(pemain)
        }  
    }
    localStorage.setItem('player', JSON.stringify(pemain));
    //update data baru dan re render.
}
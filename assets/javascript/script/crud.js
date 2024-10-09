let dataGambar = gambar;
// console.log(dataGambar)

//edit array data, by finding editID, and change object.jwb to newJwb
function edit(data, editID, newJwb){
    let result = [...data] //agar tidak menjadi pass by reference

    for(let x = 0; x < result.length; x++){
        let objTemp = {};
        let perGambar = result[x];

        //cari yang id sama
        if(editID === perGambar.id){
            objTemp = perGambar;
            objTemp.jwb = newJwb;
            result[x] = objTemp
            break;
        }
    }

    return result;
}




function add() {
    let jawaban = document.getElementById("jawaban").value;
    console.log(jawaban);
    let test = document.getElementsByClassName("test")
    test.innerText = jawaban;
}

//nanti edit edit id pake id gambar yang di click, dan newJWB adalzh isi form
// dataGambar = edit(dataGambar,2, "AAA");


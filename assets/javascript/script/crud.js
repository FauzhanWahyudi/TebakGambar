let dataGambar = gambar;
// console.log(dataGambar)

// let data = [
//     {
//         id: 1,
//         url: "./assets/images/iot.png",
//         jwb : "IOT"
//     },
//     {
//         id: 2,
//         url: "./assets/images/iot.png",
//         jwb : "werfwef"
//     },
//     {
//         id: 3,
//         url: "./assets/images/iot.png",
//         jwb : "ss"
//     }
// ]

// console.log(data)

//edit array data, by finding editID, and change object.jwb to newJwb
function edit(data, editID, newJwb){
    let result = data //agar menjadi pass by reference
    // console.log(result)
    for(let x = 0; x < result.length; x++){
        let objTemp = {};
        let perGambar = result[x];
        // console.log(perGambar)
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

//nanti edit edit id pake id gambar yang di click, dan newJWB adalzh isi form
console.log(edit(dataGambar,1, "LALA"))
// console.log(edit(dataGambar,2, "AAA"))
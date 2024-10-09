let dataGambar = gambar;
// console.log(dataGambar)

//to obtain data from class
function getDataFromInput(classInput) {
    let data = document.getElementById(classInput).value;
    return data;
}

//edit array data, by finding editID, and change object.jwb to newJwb
function edit(data, editID, newJwb){
    let result = [...data] //agar tidak menjadi pass by reference

    for(let x = 0; x < result.length; x++){
        let objTemp = {};
        let perGambar = result[x];

        //cari yang id sama
        if(Number(editID) === perGambar.id){
            objTemp = perGambar;
            objTemp.jwb = newJwb;
            result[x] = objTemp
            break;
        }
    }
    // console.log(result)
    return result;
}

function editButton(editIdClass, newJwbClass){
    //ambil data
    let editId = getDataFromInput(editIdClass);
    let jawaban = getDataFromInput(newJwbClass);

    dataGambar = edit(dataGambar, editId, jawaban);

    reRender();
    // console.log(dataGambar)
}


// console.log(dataGambar)
//nanti edit edit id pake id gambar yang di click, dan newJWB adalzh isi form
// dataGambar = edit(dataGambar,2, "AAA");

// function button(actionType){
//     if(actionType === edit){

//     }

// }
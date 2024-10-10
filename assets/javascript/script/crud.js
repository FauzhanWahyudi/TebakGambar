let dataGambar = gambar;
// console.log(dataGambar)



/* CREATE FUNCTION */
function create() {
    let url = document.getElementById('url');
    let urlValue = url.value;
    console.log(urlValue);

    let jwbValue = document.getElementById('jwb').value;
    console.log(jwbValue);

    let newId = dataGambar.length !== 0 ? dataGambar[dataGambar.length - 1].id + 1 : 1;
    
    let obj = {
        id: newId,
        url : urlValue,
        jwb : jwbValue
    };

    console.log(obj);
    
    dataGambar.push(obj);
    console.log(dataGambar);

    url.value = ""
    // reRender(dataGambar)
}

/*><><><><><><><><><><><><><><><><><><><><><><<><><><><><><><><*/

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
let dataGambar = gambar;
// console.log(dataGambar)
let editID;

//to obtain data from class
function getDataFromInput(classInput) {
    let data = document.getElementById(classInput).value;
    return data;
}


/* CREATE FUNCTION */
function create() {
    let url = document.getElementById('url');
    let urlValue = url.value;
    // console.log(urlValue);

    let jwb = document.getElementById('jwb');
    let jwbValue = jwb.value;
    // console.log(jwbValue);

    let result = [];
    let newId;

    // storageImage = JSON.parse(localStorage.getItem('gambar'));
    
    if (storageImage === null) {
        result = [...gambar] //agar tidak menjadi pass by reference     
        newId = gambar.length !== 0 ? gambar[gambar.length - 1].id + 1 : 1;
    } else {
        result = [...storageImage] //agar tidak menjadi pass by reference
        newId = storageImage.length !== 0 ? storageImage[storageImage.length - 1].id + 1 : 1;
    }

    
    let obj = {
        id: newId,
        url : urlValue,
        jwb : jwbValue
    };
    // console.log(obj);
    
    result.push(obj);
    render(result);
    localStorage.setItem('gambar', JSON.stringify(result));
    storageImage = [...result]

    url.value = ""
    jwb.value = ""
    // reRender(dataGambar)
    
    cardsNav() //tutup form
    
}


function clickEdit(id) {
    //buka form
    cardsNav() 



    //start function
    editID = id;
    let result = [];

    // Loop dapetin data obj sesuai id untuk di masukan form
    if (storageImage === null) {
        result = [...gambar] //agar tidak menjadi pass by reference     
    } else {
        result = [...storageImage] //agar tidak menjadi pass by reference
    }

    let objIdSaatIni = {}

    for(let x = 0; x < result.length; x++){
        //cari yang id sama
        if(Number(editID) === result[x].id){
            objIdSaatIni = result[x]
            break;
        }
    }

    let url = document.getElementById('url');
    url.value = objIdSaatIni.url;

    let jwb = document.getElementById('jwb');
    jwb.value = objIdSaatIni.jwb;

    let addButton = document.getElementById('addButton')
    let editButton = document.getElementById('editButton')

    addButton.style.display = "none";
    editButton.style.display = "block";
}

//edit array data, by finding editID, and change object.jwb to newJwb
function simpanEdit(){

    let result = [] //agar tidak menjadi pass by reference
    
    if (storageImage === null) {
        result = [...gambar] //agar tidak menjadi pass by reference     
    } else {
        result = [...storageImage] //agar tidak menjadi pass by reference
    }
    
    let url = document.getElementById('url');
    let urlValue = url.value;
    
    let jwb = document.getElementById('jwb');
    let jwbValue = jwb.value;
    
    for(let x = 0; x < result.length; x++){
        //cari yang id sama
        if(Number(editID) === result[x].id){
            let objTemp = {
                id: result[x].id,
                url: urlValue,
                jwb: jwbValue
            }
            
            result[x] = objTemp
            break;
        }
    }
    // console.log(result)
    render(result);
    localStorage.setItem('gambar', JSON.stringify(result));
    storageImage = [...result]

    let addIcon = document.querySelector('#add');
    let editIcon = document.querySelector('#edit');
    
    addButton.style.display = "block";
    editButton.style.display = "none";
    cardsNav() //tutup form
}

//DELETE
function deleteData(id) {
    let result = [] //agar tidak menjadi pass by reference
    let idDelete = id;
    
    if (storageImage === null) {
        result = [...gambar] //agar tidak menjadi pass by reference     
    } else {
        result = [...storageImage] //agar tidak menjadi pass by reference
    }
    console.log(result, "AWAL")

    for (let i = 0; i < result.length; i++) {
        let perData = result[i];
        if (perData.id === idDelete) {  // anggap setiap object memiliki id
            let deletedData = result.splice(i, 1);  // Delete berdasarkan index
            console.log(`Data with id ${idDelete} successfully deleted:`, deletedData);
            // return;  // Exit loop setelah delete
        }
    }
    // console.log(result, "AKHIR")
    render(result);
    localStorage.setItem('gambar', JSON.stringify(result));
    storageImage = [...result]
    // console.log('ID not found');
}
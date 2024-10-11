let gambar = [
    {
        id: 1,
        url: "./assets/images/iot.png",
        jwb : "IOT"
    },
    {
        id: 2,
        url: "./fotoTebakGambar/jambi.jpg",
        jwb : "Jambi"
    },
    {
        id: 3,
        url: "./fotoTebakGambar/surabaya.jpg",
        jwb : "Surabaya"
    },
    {
        id: 4,
        url: "./fotoTebakGambar/tasik.jpg",
        jwb : "Tasik"
    },
    {
        id: 5,
        url: "https://d3p3fw3rutb1if.cloudfront.net/photos/23d840f9-a3b3-4c74-8174-5acb3789ed39",
        jwb : "Kopi"
    },
   
]


let imagesList = document.querySelector('.card-body')
let storageImage = JSON.parse(localStorage.getItem('gambar'))

function render(array) {
    imagesList.innerHTML = "";
    let isLeft = false;

    if(array.length > 3){
        //kalo data banyak, plus pundah ke kiri (awal)
        isLeft = true;
    }

    if(isLeft){
        //add (+) button to first (left)
        imagesList.innerHTML +=
        `
        <div class="card">
            <button id="add" onclick="cardsNav()">+</button>
        </div>
        `
    }
    for (let x = 0; x < array.length; x++){
        imagesList.innerHTML +=`
            <div class="card">
                <div>
                    <!-- masukkan foto gambar yang sudah di munculkan -->
                    <button onclick="clickEdit(${array[x].id})" style="background-color: white;"><img src=${array[x].url} style="max-height:150px;max-width:150px"/></button>
                </div>

                <div>
                    <!-- navText untuk hias text output -->
                    <h3 class="navText">${array[x].jwb}</h3>
                </div>
              
                <div>
                    <button onclick="deleteData(${array[x].id})" class="delete" >Delete</button>
                </div>
            </div>
        `
    }

    if(!isLeft){
    //add (+) button to last (rigt)
    imagesList.innerHTML +=
    `
    <div class="card">
        <button id="add" onclick="cardsNav()">+</button>
    </div>
    `
    }
}

if(storageImage === null){
    localStorage.setItem('gambar', JSON.stringify(gambar))
    render(gambar)
} else {
    localStorage.setItem('gambar', JSON.stringify(storageImage))
    render(storageImage);
}

function cards(){
    const Bar = document.querySelector('.cards');
    Bar.classList.toggle('short');
}

function navigationBar(){
    const Bar = document.querySelector('.navigationBox');
    Bar.classList.toggle('hidup');
}


function cardsNav(){
    cards();
    const Bar = document.querySelector('.cardsNav');
    Bar.classList.toggle('active');

    
    let url = document.getElementById('url');
    url.value = "";
    url.placeholder="Ketik URL Gambar Anda"

    let jwb = document.getElementById('jwb');
    jwb.value = "";
    jwb.placeholder="Ketik Nama Gambar Anda"

    
    let addButton = document.getElementById('addButton')
    let editButton = document.getElementById('editButton')
    
    addButton.style.display = "block";
    editButton.style.display = "none";
}
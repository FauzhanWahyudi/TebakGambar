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
]


let imagesList = document.querySelector('.card-body')
let storageImage = JSON.parse(localStorage.getItem('gambar'))

function render(array) {
    imagesList.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        let perGambar = array[x];
        imagesList.innerHTML +=`
            <div class="card">
                <div>
                    <!-- masukkan foto gambar yang sudah di munculkan -->
                    <button onclick="clickEdit(${perGambar.id})" style="background-color: white;"><img src=${perGambar.url} style="max-height:150px;max-width:150px"/></button>
                </div>

                <div>
                    <!-- navText untuk hias text output -->
                    <h3 class="navText">${perGambar.jwb}</h3>
                </div>
              
                <div>
                    <button onclick="deleteData(${perGambar.id})" >Delete</button>
                </div>
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


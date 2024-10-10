let gambar = [
    {
        id: 1,
        url: "./assets/images/iot.png",
        jwb : "IOT"
    },
    {
        id: 2,
        url: "./fotoTebakGambar/output1.jpg",
        jwb : "Kucing"
    },
    {
        id: 3,
        url: "./fotoTebakGambar/output2.jpg",
        jwb : "Monyet"
    },
    {
        id: 4,
        url: "./fotoTebakGambar/output3.jpg",
        jwb : "Gorila"
    },
]

// localStorage.setItem('gambar', JSON.stringify(gambar))

let imagesList = document.querySelector('.imageDisplay')
let storageImage = JSON.parse(localStorage.getItem('gambar'))

function render(array) {
    imagesList.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        let perGambar = array[x];
        imagesList.innerHTML +=`
            <div class="card">
                <!-- masukkan foto gambar yang sudah di munculkan -->
                <img src=${perGambar.url} />
                <!-- navText untuk hias text output -->
                <h3 class="navText">${perGambar.jwb}</h3>
            </div>
        `
    }
}

if(storageImage === null){
    render(gambar)
} else {
    render(storageImage);
}

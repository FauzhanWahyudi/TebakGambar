let pemain = [
    {
        name: "aabba",
        point: 1000,
    },
]


let leaderboard = document.querySelector('.imageDisplay')
let storageImage = JSON.parse(localStorage.getItem('gambar'))

function render(array) {
    leaderboard.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        let perGambar = array[x];
        leaderboard.innerHTML +=`
            <div class="card">
                <!-- masukkan foto gambar yang sudah di munculkan -->
                <img src=${perGambar.url} />
                <!-- navText untuk hias text output -->
                <h3 class="navText">${perGambar.jwb}</h3>
              
            </div>
            <div>
            <button onclick="clickEdit(${perGambar.id})">Edit this Quiz</button>
            <button onclick="deleteData(${perGambar.id})" >Delete</button>
            </div>
        `
    }
}

if(storageImage === null){
    render(gambar)
} else {
    render(storageImage);
}

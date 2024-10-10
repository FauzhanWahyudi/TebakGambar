let pemain = [
    {
      "index": 0,
      "name": "Belinda Oneal",
      "point": 1091
    },
    {
      "index": 1,
      "name": "Lora Grant",
      "point": 2762
    },
    {
      "index": 2,
      "name": "Clara Beach",
      "point": 1551
    },
    {
      "index": 3,
      "name": "Patti Carr",
      "point": 229
    },
    {
      "index": 4,
      "name": "Jannie Hendrix",
      "point": 565
    },
    {
      "index": 5,
      "name": "Jenny Holland",
      "point": 2557
    },
    {
      "index": 6,
      "name": "Maldonado Patrick",
      "point": 3230
    }
]

function sortRank(array){
    let result = [...array];
    result.sort((a, b) => b.point - a.point); //sort
    localStorage.setItem('pemain', JSON.stringify(result));
    pemain = [...result]
}

sortRank(pemain)

//RENDER LEADERBOARD ------------------------------------
let leaderboard = document.querySelector('#leaderboard')
let storagePemain = JSON.parse(localStorage.getItem('pemain'))

function renderLeaderboard(array) {
    leaderboard.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        leaderboard.innerHTML +=`
            <li> 
                <div>
                    Rank ${x + 1} : ${array[x].name} with ${array[x].point}
                </div>
                <div>
                    point: ${array[x].point}
                </div>
            </li>
        `
    }
}

if(storagePemain === null){
    renderLeaderboard(pemain)
} else {
    renderLeaderboard(storagePemain);
}

//RENDER IMAGE FOR PLAY ------------------------------------
let displayImage = document.querySelector('.cards')
function renderNextImage(id) {
    displayImage.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        //cari id
        if(array[x].id === id){
            displayImage.innerHTML +=`
                <div class="card">
                    <!-- masukkan foto gambar yang sudah dimunculkan -->
                    <img src="${array[x].src}" alt="${array[x].id}">
                </div>
            `
        }
    }
}

function clickDone(){
    let imageId = document.querySelector('.card')


}
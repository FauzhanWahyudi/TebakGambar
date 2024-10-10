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
    //ambil saat ini hingga sebelum terakhir
    // for(let x = 0; x < result.length - 1; x++){
    //     //ambil setelah ini hingga akhir
    //     for(let y = x + 1; y < result.length; y++){
    //         if(result[x].point < result[y].point){
    //             l[et temp = result[x];
    //             result[x] = result[y];
    //             result[y] = temp;]
    //         }
    //     }
    // }
    result.sort((a, b) => b.point - a.point); //sort
    localStorage.setItem('pemain', JSON.stringify(result));
    pemain = [...result]
}

sortRank(pemain)


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
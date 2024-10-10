let pemain = [
    {
      "name": "Belinda Oneal",
      "point": 1091
    },
    {
      "name": "Lora Grant",
      "point": 2762
    },
    {
      "name": "Clara Beach",
      "point": 1551
    },
    {
      "name": "Patti Carr",
      "point": 229
    },
    {
      "name": "Jannie Hendrix",
      "point": 565
    },
    {
      "name": "Jenny Holland",
      "point": 2557
    },
    {
      "name": "Maldonado Patrick",
      "point": 3230
    }
]

function sortRank(array){
    let result = [...array];
    result.sort((a, b) => b.point - a.point); //sort
    localStorage.setItem('pemain', JSON.stringify(result));
    pemain = [...result]
    return result;
}

//RENDER LEADERBOARD ------------------------------------
let leaderboard = document.querySelector('#leaderboard')
let storagePemain = JSON.parse(localStorage.getItem('pemain'))

function renderLeaderboard(array) {
    leaderboard.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        leaderboard.innerHTML +=`
        <div class="rank">
            <li class="rank-item"> 
                    Rank ${x + 1} : ${array[x].name}
            </li>
            <button type="button" class="point"> point: ${array[x].point} </button>
        </div>
        `
    }
}

if(storagePemain === null){
    sortRank(pemain)
    renderLeaderboard(pemain)
    renderNextImage(0);
} else {
    renderLeaderboard(storagePemain);
    renderNextImage(0);
}

//RENDER IMAGE FOR PLAY ------------------------------------
function renderNextImage(id) {
    let displayImage = document.querySelector('.cards')
    let nextId = Number(id) + 1;
    let storageImage = JSON.parse(localStorage.getItem('gambar'))
    displayImage.innerHTML = "";
    if(nextId > storageImage.length){
        displayImage.innerHTML +=`<h1 id="finished">
        <a href="./index.html" style="
  text-decoration: none;">FINISHED</a>
        </h1>`
        return 0;
    }
    for (let x = 0; x < storageImage.length; x++){
        //cari id
        if(storageImage[x].id === nextId){
            displayImage.innerHTML +=`
            <div class = "card">
                <div style=" margin: 0 10px;">
                    <!-- masukkan foto gambar yang sudah dimunculkan -->
                    <img src="${storageImage[x].url}" alt="${storageImage[x].id}">
                </div>
            </div>
            `
        }
    }
}

function clickDone(){
    let image = document.querySelector('.cards div img')
    let id = image.alt;
    let imageJwb;
    let jawabanUser = document.querySelector('#isiJwb');
    let isiJawabanUser = jawabanUser.value;

    // console.log(id)

    //cari id di gambar
    let storageImage = JSON.parse(localStorage.getItem('gambar'))
    // console.log(storageImage)
    for(let item of storageImage){
        if(item.id == id){
            imageJwb = item.jwb
            break;
        }
    }
    if (imageJwb.toLowerCase() !== isiJawabanUser.toLowerCase()){
        //kalo salah
        jawabanUser.value = "SALAH !!! Coba Lagi"
    } else {
        //kalo benar
        jawabanUser.value = "BENAR !!! Good Job"
        let pemain = document.querySelector('#greeting')
        let namaPemain = pemain.title;
        // console.log(pemain.title) //akbar


        //cari pemain di data
        let storagePemain = JSON.parse(localStorage.getItem('pemain'))
        let pemainIndex = storagePemain.findIndex(obj => obj.name == namaPemain);
        storagePemain[pemainIndex].point += 1000;
        localStorage.setItem('pemain', JSON.stringify(storagePemain));
        pemain = [...storagePemain];

        //update leaderboard
        renderLeaderboard(sortRank(storagePemain));

        
        let doneButton = document.getElementById('doneButton')
        let lanjutButton = document.getElementById('lanjutButton')
        
        doneButton.style.display = "none";
        lanjutButton.style.display = "inline";
    }
    // console.log(pemain) //IOT aaa
}

function lanjut(){
    
    let image = document.querySelector('.cards div img')
    let id = image.alt;
    renderNextImage(id)

    let doneButton = document.getElementById('doneButton')
    let lanjutButton = document.getElementById('lanjutButton')
    let jawabanUser = document.querySelector('#isiJwb');

    jawabanUser.value = ""
    jawabanUser.placeholder="Isi disini..."

    doneButton.style.display = "inline";
    lanjutButton.style.display = "none";
}

function navigationBar(){
    const Bar = document.querySelector('.navigationBar');
    Bar.classList.toggle('hidup');

    // console.log(id)

    //cari id di gambar
    let storageImage = JSON.parse(localStorage.getItem('gambar'))
    // console.log(storageImage)
    for(let item of storageImage){
        if(item.id == id){
            imageJwb = item.jwb
            break;
        }
    }
    if (imageJwb !== isiJawabanUser){
        //kalo salah
        jawabanUser.value = "SALAH !!! Coba Lagi"
    } else {
        jawabanUser.value = "BENAR !!! Good Job"
        let pemain = document.querySelector('h2')
        let namaPemain = pemain.title;
        // console.log(pemain.title) //akbar


        //cari pemain di data
        let storagePemain = JSON.parse(localStorage.getItem('pemain'))
        let pemainIndex = storagePemain.findIndex(obj => obj.name == namaPemain);
        storagePemain[pemainIndex].point += 1000;
        
        sortRank(storagePemain);
        renderLeaderboard(sortRank(storagePemain));
    }
    // console.log(pemain) //IOT aaa
}
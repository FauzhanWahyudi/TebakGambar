let profile = [
    {
        id: 1,
        url: "./fotoTebakGambar/surabaya.jpg",
        nama : "Nur Haliza",
        role : "Front End Developer",
        github: "https://github.com/nrlizahh"
    },
    {
        id: 2,
        url: "./fotoTebakprofile/jambi.jpg",
        nama : "Togi Sagala",
        role : "Front End Developer",
        github: "https://github.com/togi080204"
    },
    {
        id: 3,
        url: "./assets/images/fotoProfile/fauzhanwahyudi.jpg",
        nama : "Fauzhan Wahyudi",
        role : "Back End Developer",
        github: "https://github.com/FauzhanWahyudi"
    },
    {
        id: 4,
        url: "./fotoTebakprofile/tasik.jpg",
        nama : "Yafi Irfan Zuhdi",
        role : "Back End Developer",
        github: "https://github.com/yafiirfan"
    },
    {
        id: 5,
        url: "https://d3p3fw3rutb1if.cloudfront.net/photos/23d840f9-a3b3-4c74-8174-5acb3789ed39",
        nama : "Khaizuran",
        role : "Back End Developer",
        github: "https://github.com/onekhai"
    },
   
]


let profileList = document.querySelector('.card-body')

function render(array) {
    profileList.innerHTML = "";
    for (let x = 0; x < array.length; x++){
        profileList.innerHTML +=`
            <div class="card">
                <div>
                    <!-- masukkan foto profile yang sudah di munculkan -->
                    <button onclick="openGithub(${array[x].id})" style="background-color: white;"><img src=${array[x].url} style="max-height:150px;max-width:150px"/></button>
                </div>

                <div>
                    <!-- navText untuk hias text output -->
                    <h4 class="navText">${array[x].nama}</h4>
                </div>

                <div>
                    <!-- navText untuk hias text output -->
                    <h5 style="text-align: center;">As</h5>
                    <h3 class="navText">${array[x].role}</h3>
                </div>
            </div>
        `
    }
}

render(profile);

function navigationBar(){
    const Bar = document.querySelector('.navigationBox');
    Bar.classList.toggle('hidup');
}

//gambahkan fungsi open github
function openGithub(id){
    let profiles = [...profile];
    let profileIndex = profiles.findIndex(obj => obj.id == id);
    // window.location.href = `${profiles[profileIndex].github}`;
    window.open(`${profiles[profileIndex].github}`, '_blank').focus();
}
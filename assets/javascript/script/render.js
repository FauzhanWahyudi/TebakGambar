const imagesList = document.querySelector('.image-list')

// ABAIKAN code dibawah ini
function render() {
  
  // get new data list
  let imagesData = dataGambar;
  // console.log(dataGambar);

  // put all task to html
  for(let itemImages of imagesData){

    // create div
    const images = document.createElement('div')
    images.classList.add('images')

    // create list
    const li = document.createElement('li')
    li.classList.add('imageBlock')
    images.appendChild(li)
    
    
    //add images
    const displayImage = document.createElement('img')
    displayImage.src = itemImages.url;
    images.appendChild(displayImage)
    
    //add id
    const id = document.createElement('p')
    id.innerText = `id: ${itemImages.id}`
    id.classList.add('id')
    images.appendChild(id)

    //add jawaban
    const jawabanImages = document.createElement('p')
    jawabanImages.innerText = `jawaban: ${itemImages.jwb}`;
    jawabanImages.classList.add('jawabanImage')
    images.appendChild(jawabanImages)

    // append to imagesList
    imagesList.appendChild(images)
  }
}

render()



function reRender (){
    //get child node
    let target = imagesList.childNodes;

    //get updated data
    let updatedData = dataGambar;

    // console.log(target[0], "target") //<div class="images">......
    // console.log(updatedData, "update") //new data

    //cek apakah di update, delete, atau add
    if (target.length === updatedData.length){
      //lopping data yang udh di update
      for(let x = 0; x < updatedData.length; x++){
        perData = updatedData[x];
        perTargetNode = target[x];

              //kalo datanya sama berarti update
        
        //-------ambil class satu-satu----------------------
            //ambil id dan update pake updated data
            let id = perTargetNode.querySelector(".id");
            id.innerText = `id: ${perData.id}`
            // console.log(id, perData.id)

            //ambil image
            let image = perTargetNode.querySelector("img");
            // console.log(image.innerHTML)
            image.src = perData.url

            //ambil jawaban
            let jawabanImages = perTargetNode.querySelector('.jawabanImage')
            jawabanImages.innerText = `jawaban: ${perData.jwb}`;
          }
    } else if(updatedData.length > target.length){
      //jika data lebih besar, (added), maka bikin baru (samain aja datanya kek render)

      //looping data baru(karena push maka dia mulai dari belakang)
      for(let init = target.length - 1; x < updatedData.length; x++){
        let perNewData = updatedData[ini];
        // create div
          const images = document.createElement('div')
          images.classList.add('images')

          // create list
          const li = document.createElement('li')
          li.classList.add('imageBlock')
          images.appendChild(li)
          
          //add images
          const displayImage = document.createElement('img')
          displayImage.src = perNewData.url;
          images.appendChild(displayImage)
          
          //add id
          const id = document.createElement('p')
          id.innerText = `id: ${perNewData.id}`
          id.classList.add('id')
          images.appendChild(id)

          //add jawaban
          const jawabanImages = document.createElement('p')
          jawabanImages.innerText = `jawaban: ${perNewData.jwb}`;
          jawabanImages.classList.add('jawabanImage')
          images.appendChild(jawabanImages)

          // append to imagesList (KARENA imageList adalah sumber awal)
          imagesList.appendChild(images)
      }
    } 
}
const imagesList = document.querySelector('.image-list')

// ABAIKAN code dibawah ini
function render() {
  
  // get new data list
  let imagesData = dataGambar;

  // put all task to html
  for(let itemImages of imagesData){

    // create div
    const images = document.createElement('div')
    images.classList.add('images')

    // create list
    const id = document.createElement('li')
    id.innerText = `id: ${itemImages.id}`
    id.classList.add('image')
    images.appendChild(id)

    //add images
    const displayImage = document.createElement('img')
    displayImage.src = itemImages.url;
    images.appendChild(displayImage)

    //add jawaban
    const jawabanImages = document.createElement('p')
    jawabanImages.innerText = `jawaban: ${itemImages.jwb}`;
    images.appendChild(jawabanImages)

    // append to imagesList
    imagesList.appendChild(images)
  }
}

render()
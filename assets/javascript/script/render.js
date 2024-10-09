const imagesList = document.querySelector('.todo-list')

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
    const newImage = document.createElement('li')
    newImage.innerText = `${itemImages.jwb}`
    newImage.classList.add('image')
    images.appendChild(newImage)

    // create completed button
    const infoButton = document.createElement('button')
    infoButton.innerText = `${itemImages.id}`
    images.appendChild(infoButton)
    // append to imagesList
    imagesList.appendChild(images)
  }
}

render()
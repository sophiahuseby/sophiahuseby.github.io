const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pictures = ['pic1.jpg','pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg' : "human eye closeup",
    'pic2.jpg' : "rocky landform",
    'pic3.jpg' : "purple flowers",
    'pic4.jpg' : "egyptian paintings",
    'pic5.jpg' : "butterfly"
}

/* Looping through images */
for(const picture of pictures){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}');
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e=> {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.src;
    })
}
/* Wiring up the Darken/Lighten button */
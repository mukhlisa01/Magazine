/* script for travel story page slider */ 

// VARIABLES
const mainBtm = document.querySelector('.main-bottom');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let count = 0
let images = []
timer = null

images[0] = 'images/motocycle.jpg';
images[1] = 'images/slider_1.jpg'
images[2] = 'images/slider_2.jpg'


// EVENTS
next.addEventListener('click', function () {
    changePicture() 
    clearTimeout(timer)
    autoplay()
})

prev.addEventListener('click', function () {
    mainBtm.style.backgroundImage = 'url(' + images[count] + ')'
    
    if (count === 0) {
        count = images.length
    }
    count--
})


// FUNCTIONS
function autoplay() {
    timer = setTimeout(changePicture, 3000)
}
autoplay()

function changePicture() {
    mainBtm.style.backgroundImage = 'url(' + images[count] + ')'
    count++
    if (count === images.length) {
        count = 0
    } 
}
changePicture()


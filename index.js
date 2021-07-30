const sliderOne = document.getElementById('slider-one');
const sliderTwo = document.getElementById('slider-two');
const sliderThree = document.getElementById('slider-three');
const sliderNextBtn = document.getElementById('slider-next-btn');
const sliderPrevBtn = document.getElementById('slider-prev-btn');
const navBar = document.getElementById('nav-bar');
const mobileNav = document.getElementById('mobile-nav');
const navMenuBtn = document.getElementById('menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')

// scroll to reveal navbar
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 400) {
        navBar.classList.add('reveal-nav')
    } else{
        navBar.classList.remove('reveal-nav')

    }
})

navMenuBtn.addEventListener('click', function () {
    navBar.classList.add('d-none')
    mobileNav.classList.remove('d-none')
})

closeMenuBtn.addEventListener('click', function () {
    navBar.classList.remove('d-none')
    mobileNav.classList.add('d-none')
})



let sliderArr = [sliderOne, sliderTwo, sliderThree];

let currentSlider;

let i = 0

currentSlider = sliderArr[i];

if (currentSlider) {
    currentSlider.classList.remove('d-none')
}

function sliderLoop() {
        currentSlider = sliderArr[i]
        currentSlider.classList.remove('d-none')

    for (let b = 0; b < sliderArr.length; b++) {
        if( sliderArr[b] != currentSlider) {
            sliderArr[b].classList.add('d-none')
        }
        
    }
}

sliderNextBtn.addEventListener('click', function() {
    if (i < sliderArr.length) {
        i++
        sliderLoop()
        
    } else {
        i = 0
        sliderLoop()
    }
})

sliderPrevBtn.addEventListener('click', function () {
    if (i > 0) {
        i--
        sliderLoop()
    } else if(i == 0){
        i = 3
        sliderLoop()

    }
})


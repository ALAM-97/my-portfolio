//DARK MODE
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// ESPERIENZE
function mostraIstruzione() {
    document.getElementById("tab-istruzione").style.display="block";
    document.getElementById("tab-lavoro").style.display = "none";
    document.getElementById("istruzione-active").style.opacity = "1";
    document.getElementById("lavoro-active").style.opacity = "0.5";
}

function mostraLavoro() {
    document.getElementById("tab-lavoro").style.display = "block";
    document.getElementById("tab-istruzione").style.display = "none";
    document.getElementById("lavoro-active").style.opacity = "1";
    document.getElementById("istruzione-active").style.opacity = "0.5";
}

// PORTFOLIO
// var carouselSlide = document.querySelector('.carousel-slide');
// var carouselImages = document.querySelectorAll('.carousel-slide img');

// //buttons
// var prevBtn = document.querySelector('#prevBtn');
// var nextBtn = document.querySelector('#nextBtn');

// //counter
// let counter = 1;
// var size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //buttons listeners

// nextBtn.addEventListener('click',()=> {
//     if (counter >= carouselImages.lenght) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// })

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// })

//  carouselSlide.addEventListener('transitionend', () => {
//     if (sliderImages[counter].id === 'lastClone') {
//         slider.style.transition = 'none';
//         counter = sliderImages.length - 2;
//         slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
//     }
//     if (sliderImages[counter].id === 'firstClone') {
//         slider.style.transition = 'none';
//         counter = sliderImages.length - counter;
//         slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
//     }
//  });
const container = document.querySelector('.slider__container');
const slider = container.querySelector('.slider__container__sliders');
const sliderImages = container.querySelectorAll('.slider__container__sliders img');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
let counter = 1;
const width = sliderImages[0].clientWidth;


slider.style.transform = 'translateX(' + (-width * counter) + 'px)';

rightBtn.addEventListener('click', () => {
    if (counter >= sliderImages.length - 1) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter);
    slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
});

leftBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    console.log(counter);
    slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
});

slider.addEventListener('transitionend', () => {

    if (sliderImages[counter].id === 'lastClone') {
        slider.style.transition = 'none';
        counter = sliderImages.length - 2;
        console.log(counter);
        slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
    }
    if (sliderImages[counter].id === 'firstClone') {
        slider.style.transition = 'none';
        counter = sliderImages.length - counter;
        console.log(counter);
        slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
    }
});




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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



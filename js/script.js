//DARK MODE
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("input-area").style.backgroundColor = "red";
}

// SKILLS

var frontend = document.getElementById("frontend-skills");
var backend = document.getElementById("backend-skills");
var design = document.getElementById("design-skills");

frontend.addEventListener("click",
    function () {
        document.getElementById("fe-skills").classList.toggle("open");
        document.getElementById("be-skills").classList.remove("open");
        document.getElementById("d-skills").classList.remove("open");
        document.getElementById("arrow-up").classList.toggle("open");
        document.getElementById("arrow-down").classList.toggle("open");
    }
);
backend.addEventListener("click",
    function () {
        document.getElementById("be-skills").classList.toggle("open");
        document.getElementById("fe-skills").classList.remove("open");
        document.getElementById("d-skills").classList.remove("open");
        document.getElementById("arrow-up").classList.toggle("open");
        document.getElementById("arrow-down").classList.toggle("open");
    }
);
design.addEventListener("click",
    function () {
        document.getElementById("d-skills").classList.toggle("open");
        document.getElementById("fe-skills").classList.remove("open");
        document.getElementById("be-skills").classList.remove("open");
        document.getElementById("arrow-up").classList.toggle("open");
        document.getElementById("arrow-down").classList.toggle("open");
    }
);

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



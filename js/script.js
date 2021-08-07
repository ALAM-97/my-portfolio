function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

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
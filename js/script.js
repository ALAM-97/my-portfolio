function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function mostraIstruzione() {
    document.getElementById("tab-istruzione").style.display="block";
    document.getElementById("tab-lavoro").style.display = "none";
}

function mostraLavoro() {
    document.getElementById("tab-lavoro").style.display = "block";
    document.getElementById("tab-istruzione").style.display = "none";
}
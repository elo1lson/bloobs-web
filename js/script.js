document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("img-theme").addEventListener("click", theme)

    var classPic = document.getElementsByClassName("item")
    for (let index = 0; index < classPic.length; index++) {
        var nonePic = classPic[index]
        nonePic.style.display = "none"
    }
    classPic[0].style.display = "block"

    document.getElementById("box").addEventListener("click", randomize);
});

var slideIndex = 1;
showSlides(slideIndex);

function theme() {
    var oldTheme = "#363434"
    var newTheme = "whitesmoke"
    var body = document.getElementById("body").style

    var container = document.getElementById("container").style

    if (body.background == "whitesmoke") {
        body.background = oldTheme
        container.background = oldTheme
    } else {
        body.background = newTheme
        container.background = newTheme
    }
}
function randomize() {
    var min = 0;
    var max = 8;
    slideIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    showSlides(slideIndex);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

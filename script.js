const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".navbar ul");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    window.topFunction = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}// Preloader

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.style.display = "none";
    }, 1500);
});// Hero Slider

// Hero Slider

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slider;

function startSlider(){

    if(slides.length <= 1) return;

    slider = setInterval(nextSlide,4000);

}

function nextSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}

startSlider();

// Pause slider when tab is inactive

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        clearInterval(slider);

    }else{

        startSlider();

    }

});

if (slides.length > 0) {

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 4000);

}
//navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

//menu
const menu = document.querySelector(".menu");
const toggleMenu = () => { menu.classList.toggle("active") };

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a").forEach(link => link.addEventListener("click", toggleMenu));

//Swiper config
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    direction: "horizontal",
    lazyLoading: true,
    centeredSlides: true,
    loop: true,
    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: ".swiper.pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
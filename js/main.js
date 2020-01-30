let mobileMenu = document.querySelector(".main-nav");
let mobileState = document.querySelector(".site-list__item-wrappper");
let zeroOpacity = document.querySelector(".site-list");
let scrollUp = document.querySelector(".scroll__element");

mobileMenu.addEventListener("click", function() {
    if (mobileState.classList.contains("site-list__item--off")) {
        mobileState.classList.remove("site-list__item--off");
        mobileState.classList.add("site-list__item--on");
        zeroOpacity.classList.add("site-list--color");
    }
    else {
        mobileState.classList.remove("site-list__item--on");
        mobileState.classList.add("site-list__item--off");
        zeroOpacity.classList.remove("site-list--color");
    }
});

// Делаем появление кнопки для прокрутки вверх страницы
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        scrollUp.style.display = "block";
    }
    else {
        scrollUp.style.display = "none";
    }
}

// добавляем событие, которое будет следить за кликом по кнопке прокрутки, если клик был, то осуществится плавная прокрутка вверх
scrollUp.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior:"smooth"});
});

if (window.pageYOffset > 100) {
    scrollUp.classList.add("scroll__element--on");
}

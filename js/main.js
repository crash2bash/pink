let mobileMenu = document.querySelector(".main-nav");
let mobileState = document.querySelector(".site-list__item-wrappper");
let zeroOpacity = document.querySelector(".site-list");

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

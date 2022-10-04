/*jshint esversion: 6 */
let searchButton = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
function showSearch() {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
}
searchButton.addEventListener("click", showSearch);


let shopButton = document.querySelector("#shopping-btn");
let shoppingCart = document.querySelector(".shopping-cart");
function showShopping() {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
}
shopButton.addEventListener("click", showShopping);


let loginButton = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form");
function showLogin() {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navBar.classList.remove("active");
}   
loginButton.addEventListener("click", showLogin);


let menuButton = document.querySelector("#menu-btn");
let navBar = document.querySelector(".navbar");
function showMenu() {
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
menuButton.addEventListener("click", showMenu);


window.onscroll = () => {
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
};


//PRODUCT SWIPER FUNCTION
var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});
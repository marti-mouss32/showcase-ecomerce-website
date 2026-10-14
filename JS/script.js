const userButton = document.querySelector(".user-button");
const signupForm = document.querySelector(".signup-form");

userButton.addEventListener("click", function () {
    signupForm.classList.toggle("show");
});

const carouselTrack = document.querySelector(".carousel-track");

if (carouselTrack) {
    const products = carouselTrack.innerHTML;

    carouselTrack.innerHTML = products + products;
}

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");
    });
}
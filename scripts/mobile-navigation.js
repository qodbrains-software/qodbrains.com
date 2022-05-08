// Mobile navigation OPEN:

const ham = document.querySelector(".hamburger-container");
const mobileNav = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".back-drop");

// Onclick logic:
ham.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-show");
    backDrop.classList.toggle("show-element");
})

backDrop.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-show");
    backDrop.classList.toggle("show-element");
})
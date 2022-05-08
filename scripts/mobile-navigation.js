// Mobile navigation OPEN:

const ham = document.querySelector(".hamburger-container");
const mobileNav = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".back-drop");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item")

// Onclick logic:
ham.addEventListener("click", () => {
    toggleClass();
})

backDrop.addEventListener("click", () => {
    toggleClass();
})

const toggleClass = () => {
    mobileNav.classList.toggle("mobile-nav-show");
    backDrop.classList.toggle("show-element");
}

const attachClickListener = (listOfElements) => {
    for(var i = 0; i < listOfElements.length; i++) {   
        listOfElements[i].addEventListener("click", () => {
            toggleClass();
        })
    }
}

attachClickListener(mobileNavItems);


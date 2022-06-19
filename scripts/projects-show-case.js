const slides = document.querySelectorAll(".media");

let pause = false;
const slider = () => {
    let index = 0;
    setInterval(() => {
        if (!pause) {
            switch (index, index++) {
                case 0:
                    slides[0].style.transform = "translate(-0)"
                    slides[1].style.transform = "translate(-0)"
                    slides[2].style.transform = "translate(-0)"
                    break;
                case 1:
                    slides[0].style.transform = "translate(-100%)"
                    slides[1].style.transform = "translate(-100%)"
                    slides[2].style.transform = "translate(-100%)"
                    break;
                case 2:
                    slides[0].style.transform = "translate(-200%)"
                    slides[1].style.transform = "translate(-200%)"
                    slides[2].style.transform = "translate(-200%)"
                    break;
                }
        }
        if (index === 3) {
            index = 0;
        }
    }, 3500)
}
 slider();
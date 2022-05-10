const prototypes = ["./media/inspire.svg", "./media/digi.svg", "./media/ezcv.svg"];

const prototypeContainer =  document.querySelector(".projects-media");
const media = document.querySelector(".media object");


console.log(media);

let counter = 0;

setInterval(() => {
    if(counter === 3) {
        counter = 0;
    }
    media.data = prototypes[counter];
    counter++;
}, 3000)

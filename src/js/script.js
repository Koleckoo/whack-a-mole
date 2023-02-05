const startButton = document.querySelector(".start-button");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole")
const scoreEl = document.querySelector(".score")

let score = 0;
let timeUp = false;
// Random time function, we use this in peep function
const randomTime = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min)
}
// RandomHole function, we use this in peep function
const randomHole = (holes) => {
    const index =  Math.floor(Math.random() * holes.length)
    const hole = holes[index];
    return hole
}
// Peep function
const peep = () => {

    const time = randomTime(400, 800)
    const hole = randomHole(holes)

    hole.classList.add("active")

    setTimeout(() => {
        hole.classList.remove("active");
        if (!timeUp) {
            peep();
        }
    }, time);

}
// whack function
const whack = () => {
    score++;
    scoreEl.textContent = score;
}
// hide function
const hide = () => {
    holes.forEach((hole) => {hole.classList.remove("active")})
}
// event listener for every mole
moles.forEach((mole) => {
    mole.addEventListener(("click"), () => {
        whack();
        hide();
    });
});

//event listener for start button

startButton.addEventListener(("click"), () => {
    score = 0;
    scoreEl.textContent = 0;
    timeUp = false;

    peep();

    setTimeout(() => {
        timeUp = true;
    }, 15000)
})


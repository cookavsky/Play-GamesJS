const gameTic = document.querySelector("#Tic-Tac-Toe");
const gameTicDiv = document.querySelectorAll("#tic");

console.log(gameTic);
console.log(gameTicDiv);

let X = "";
let O = "";

const clickTic = function (Y, X) {
    for (let i = 0; i < gameTicDiv.length; i++) {
        gameTicDiv[i].addEventListener("click", function () {
            X = gameTicDiv[i].classList.add("sharp");
            O = gameTicDiv[i].classList.add("circle");
        }, { once: true })
    };
};

const clickTic = function (Y, X) {
    for (let i = 0; i < gameTicDiv.length; i++) {
        gameTicDiv[i].addEventListener("click", function () {
            X = gameTicDiv[i].classList.add("sharp");
            O = gameTicDiv[i].classList.add("circle");
        }, { once: true })
    };
};

const gameTicInit = function () {
    clickTic()
   if (gameTicDiv[0].classList.value && gameTicDiv[1].classList.value && gameTicDiv[2].classList.value === "tic sharp"){
       alert("Win X");
   }
};
gameTicInit()


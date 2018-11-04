const gameTic = document.querySelector("#Tic-Tac-Toe");
const gameTicDiv = document.querySelectorAll("#tic");

console.log(gameTic);
console.log(gameTicDiv);

let counter = 0;

const check = function () {
    if (gameTicDiv[0].classList.value === 'tic sharp' && gameTicDiv[1].classList.value === 'tic sharp' && gameTicDiv[2].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[3].classList.value === 'tic sharp' && gameTicDiv[4].classList.value === 'tic sharp' && gameTicDiv[5].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[6].classList.value === 'tic sharp' && gameTicDiv[7].classList.value === 'tic sharp' && gameTicDiv[8].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[0].classList.value === 'tic sharp' && gameTicDiv[3].classList.value === 'tic sharp' && gameTicDiv[6].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[1].classList.value === 'tic sharp' && gameTicDiv[4].classList.value === 'tic sharp' && gameTicDiv[7].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[2].classList.value === 'tic sharp' && gameTicDiv[5].classList.value === 'tic sharp' && gameTicDiv[8].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[0].classList.value === 'tic sharp' && gameTicDiv[4].classList.value === 'tic sharp' && gameTicDiv[8].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[2].classList.value === 'tic sharp' && gameTicDiv[4].classList.value === 'tic sharp' && gameTicDiv[6].classList.value === 'tic sharp') {
        alert("Win X");
    } else if (gameTicDiv[0].classList.value === 'tic circle' && gameTicDiv[1].classList.value === 'tic circle' && gameTicDiv[2].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[3].classList.value === 'tic circle' && gameTicDiv[4].classList.value === 'tic circle' && gameTicDiv[5].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[6].classList.value === 'tic circle' && gameTicDiv[7].classList.value === 'tic circle' && gameTicDiv[8].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[0].classList.value === 'tic circle' && gameTicDiv[3].classList.value === 'tic circle' && gameTicDiv[6].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[1].classList.value === 'tic circle' && gameTicDiv[4].classList.value === 'tic circle' && gameTicDiv[7].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[2].classList.value === 'tic circle' && gameTicDiv[5].classList.value === 'tic circle' && gameTicDiv[8].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[0].classList.value === 'tic circle' && gameTicDiv[4].classList.value === 'tic circle' && gameTicDiv[8].classList.value === 'tic circle') {
        alert("Win O");
    } else if (gameTicDiv[2].classList.value === 'tic circle' && gameTicDiv[4].classList.value === 'tic circle' && gameTicDiv[6].classList.value === 'tic circle') {
        alert("Win O");
    };
};

const clickTic = function () {
    for (let i = 0; i < gameTicDiv.length; i++) {
        gameTicDiv[i].addEventListener("click", function () {
            counter ++;
            if (counter === 1 || counter === 3 || counter === 5 || counter === 7 || counter === 9) {
                X = gameTicDiv[i].classList.add("sharp");
            }
            if (counter === 2 || counter === 4 || counter === 6 || counter === 8) {
            gameTicDiv[i].classList.add("circle");
            }
            check();
        }, { once: true })
    };
};

clickTic();


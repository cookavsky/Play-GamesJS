const tableCards = ["one","two","three","four","five","six","seven","eight","nine","one","two","three","four","five","six","seven","eight","nine"];

let cards = document.querySelectorAll(".MemmoryDiv");
cards = [...cards];

let nowActiv = "";
const nowActivPairs = [];

const gameFinish = cards.length / 2;
let gameStart = 0;

const clickCard = function () {
    nowActiv = this;
    if(nowActiv == nowActivPairs[0])
        return; nowActiv.classList.remove("hidden");

    if (nowActivPairs.length === 0) {
        nowActivPairs[0] = nowActiv;
        return;
    }
    else{
        cards.forEach(card => card.removeEventListener("click", clickCard))
        nowActivPairs[1] = nowActiv;
        setTimeout(function () {
            if (nowActivPairs[0].className === nowActivPairs[1].className) {
                nowActivPairs.forEach(card => card.classList.add("off"))
                gameStart++;
                cards = cards.filter(card => !card.classList.contains("off"));
                if(gameStart == gameFinish) {
                    alert(`Your Job is DONE!!`)
                    location.reload();
                }
            }
            else{
                nowActivPairs.forEach(card => card.classList.add("hidden"))
            }
            nowActiv = "";
            nowActivPairs.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard))
        }, 500)
    }
};

const init = function () {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * tableCards.length);
        card.classList.add(tableCards[position]);
        tableCards.splice(position, 1);
    })
    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 2000)
};

init()
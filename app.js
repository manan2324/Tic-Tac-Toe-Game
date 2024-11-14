let playbox = document.querySelectorAll(".box");
let scoreX = document.querySelector("#score-x");
let scoreO = document.querySelector("#score-y");
let resetTable = document.querySelector("#reset-table");
let winner = document.querySelector("#winner");
let resetGame = document.querySelector("#reset-game");
let toggleSign = "O";
let countX = 1;
let countO = 1;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8], 
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8],
];


playbox.forEach((element) => {
    element.addEventListener("click", () => {
        if (toggleSign == "O") {
            element.innerText = "O";
            toggleSign = "X";
        } else {
            element.innerText = "X";
            toggleSign = "O";
        }
        element.disabled = "true";
        checkWinner();
    })
});

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1 = playbox[pattern[0]].innerText;
        let pos2 = playbox[pattern[1]].innerText;
        let pos3 = playbox[pattern[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                updateScore(pos1);
                setTimeout(reset, 300);
            }
        }
    }
}

const updateScore = (val) => {
    if (val === "X") {
        scoreX.innerText = `X : ${countX++}`;
    } else {
        scoreO.innerText = `O : ${countO++}`;
    }
    winner.style.visibility = "visible";
    winner.innerText = `Winner : ${val}`;
}

const reset = () => {
    playbox.forEach((box) => {
        box.removeAttribute("disabled");
        box.innerText = "";
    })
    winner.style.visibility = "hidden";
}

resetTable.addEventListener("click", reset);
resetGame.addEventListener("click", () => {
    scoreX.innerText = "X : ";
    scoreO.innerText = "O : ";
    countO = 1;
    countX = 1;
})
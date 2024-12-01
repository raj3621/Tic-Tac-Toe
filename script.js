let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let game=document.querySelector("main")

let turnO = true;//playerX, playerY
const winingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "O"
            box.style.color="#560bec"
            turnO = false;
        }
        else {
            box.innerText = "X"
            box.style.color="#f53d96"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        
    }
}
const gameHide = () => {
    game.classList.add("hide");
}
const gameShow = () => {
    game.classList.remove("hide");
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameHide();
    disabledBoxes();
}
const checkWinner = () => {
    for (let pattern of winingPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("won");
                showWinner(pos1);


            }
        }
    }
}

const resetGame = () => {

    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
    gameShow();
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
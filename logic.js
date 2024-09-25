let boxes = document.querySelectorAll(".box");
let nsg = document.querySelector(".msg-contanier");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector("#msg");
const partten = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let turno = true;
boxes.forEach((tap) => {
    tap.addEventListener("click", () => {
        if (turno) {
            tap.innerText = 'o';
            turno = false;
        }
        else {
            tap.innerText = 'x';
            turno = true;
        }
        tap.disabled = true;
        console.log("Button was clicked");
        checkWinner();
    });
});
const ngame = () => {
    turno = true;
    enablebox();
    nsg.classList.add("hide");

}
const enablebox = () => {
    for (let dos of boxes) {
        dos.disabled = false;
        dos.innerText = "";
    }
}
const disableboxes = () => {
    for (let bos of boxes) {
        bos.disabled = true;
    }
}
const showwiner = (winner) => {
    msg.innerText = `Congratulastion, Winner is ${winner} `;
    nsg.classList.remove("hide");
    disableboxes();


}
const checkWinner = () => {
    for (let winpartten of partten) {
        console.log(winpartten[0], winpartten[1], winpartten[2]);
        console.log(boxes[winpartten[0]].innerText, boxes[winpartten[1]].innerText, boxes[winpartten[2]].innerText);
        let posi1 = boxes[winpartten[0]].innerText;
        let posi2 = boxes[winpartten[1]].innerText;
        let posi3 = boxes[winpartten[2]].innerText;
        if (posi1 != "" && posi2 != "" && posi3 != "") {
            if (posi1 === posi2 && posi2 === posi3) {
                console.log("I have a winer");
                showwiner(posi1);
            }
        }
    }
}
newgame.addEventListener("click", ngame);
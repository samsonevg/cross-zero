"use strict";

let boxes;
let ifzero = false;
let player;
let playerStepsParagraph;
let cleanButton;

window.onload = function () {
    cleanButton = document.getElementById("clean__button");
    boxes = document.getElementsByClassName("box");
    player = document.getElementById("player");

    playerStepsParagraph = document.getElementById("player__steps");
    playerStepsParagraph.innerHTML = boxes.length;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function (event) {
            onClick(event.currentTarget);
        })
    }

    cleanButton.addEventListener("click", cleanGameField);

    player.innerHTML = ' крестик';
}

function onClick(elem) {
    if (elem.textContent !== '')
        return;

    if (ifzero == false) {
        elem.textContent = 'x';
        player.innerHTML = ' нолик'
        ifzero = true;
    } else {
        elem.textContent = 'o';
        player.innerHTML = ' крестик'
        ifzero = false;
    }
    minusStep();

}

function minusStep() {
    playerStepsParagraph.innerHTML = +playerStepsParagraph.innerHTML - 1;

}

function cleanGameField() {
    //for (let i = 0; i < boxes.length; i++) { 
    //    boxes[i].textContent = "";
    //}
    for (const box of boxes) { //То же самое, что и цикл выше
        box.textContent = "";
    }

    playerStepsParagraph.innerHTML = boxes.length;
}

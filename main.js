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


    //Получить массив боксов по горизонтали => передать полученный массив 
    //в arrayBoxes и проверить есть ли победитель, и вывести его
    const xArray = getXArrayFromBoxes(elem);
    //Получить массив боксов по вертикали => передать полученный массив
    //в arrayBoxes и проверить есть ли победитель, и вывести его
    const yArray = getYArrayFromBoxes(elem);
    //Получить массив боксов по диагонали => передать полученный массив
    //в arrayBoxes и проверить есть ли победитель, и вывести его
    alert(getWinnerByZArray(elem));



}

function minusStep() {
    playerStepsParagraph.innerHTML = +playerStepsParagraph.innerHTML - 1;

}

function cleanGameField() {
    //for (let i = 0; i < boxes.length; i++) { 
    //    boxes[i].textContent = "";
    //}
    for (const box of boxes) {  //То же самое, что и цикл выше
        box.textContent = "";
    }

    playerStepsParagraph.innerHTML = boxes.length;
}


//В arrayBoxes должно лежать 3 элемента
function getWinner(arrayBoxes) {
    const result = null;
    const winner = arrayBoxes.every(v => v === arrayBoxes[0]);
    for (const box of arrayBoxes) {
        if (box.innerHTML = '')
            return null;
    }
    return winner ? arrayBoxes[0].innerHTML : null;
}

//Передается бокс на который кликнули
function getXArrayFromBoxes(elem) {
    const xPosition = elem.getAttribute("data-x");

    let result = [];
    for (const box of boxes) {
        if (xPosition == box.getAttribute("data-x"))
            result.push(box);
    }
    return result;
}

function getYArrayFromBoxes(elem) {
    const yPosition = elem.getAttribute("data-y");

    let result = [];
    for (const box of boxes) {
        if (yPosition == box.getAttribute("data-y"))
            result.push(box);
    }
    return result;
}

function getWinnerByZArray(elem) {
    const zPosition = elem.getAttribute("data-z");
    const center = '10';
    const leftHorizontal = '11';
    const rightHorizontal = '12';

    let leftHorizontalArray = [];
    for (const box of boxes) {
        if (box.getAttribute("data-z") == center || leftHorizontal == box.getAttribute("data-z"))
            leftHorizontalArray.push(box);
    }

    let rightHorizontalArray = [];
    for (const box of boxes) {
        if (box.getAttribute("data-z") == center || rightHorizontal == box.getAttribute("data-z"))
            rightHorizontalArray.push(box);
    }

    let leftHorizontalWinner = getWinner(leftHorizontalArray);
    let rightHorizontalWinner = getWinner(rightHorizontalArray);

    return leftHorizontalWinner || rightHorizontalWinner;
}

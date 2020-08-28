"use strict";

let boxes;
let ifzero = false;
let player;
let playerStepsParagraph;
let cleanButton;
let winnerText;

window.onload = function () {
    cleanButton = document.getElementById("clean__button");
    boxes = document.getElementsByClassName("box");
    player = document.getElementById("player");
    winnerText = document.getElementById("winner__text");

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


    // массив клеток по вертикали
    const xArray = getXArrayFromBoxes(elem);
    // массив клеток по горизонтали
    const yArray = getYArrayFromBoxes(elem);

    const xLineIsWinner = getWinner(xArray);
    const yLineIsWinner = getWinner(yArray);
    const zLineIsWinner = getWinnerByZArray(elem);


    const isFinish = xLineIsWinner || yLineIsWinner || zLineIsWinner;
    if (isFinish) {
        // объявляем победителя
        winnerText.textContent = 'Победил: ' + isFinish;
        winnerText.style.display = 'block';
    }

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
    winnerText.style.display = 'none';
}


//return - функция возвращает null, если в массиве нет победителя. Если есть победитель, то вернёт содержимое клетки ('x' либо '0')
function getWinner(arrayBoxes) {
    const winner = arrayBoxes.every(v => v.textContent === arrayBoxes[0].textContent);
    for (const box of arrayBoxes) {
        if (!box.textContent)
            return null;
    }

    return winner ? arrayBoxes[0].textContent : null;
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
    const center = '10';
    const leftHorizontal = '11';
    const rightHorizontal = '12';

    let leftHorizontalArray = [];
    for (const box of boxes) {
        if (box.getAttribute("data-z") === center || leftHorizontal === box.getAttribute("data-z"))
            leftHorizontalArray.push(box);
    }

    let rightHorizontalArray = [];
    for (const box of boxes) {
        if (box.getAttribute("data-z") === center || rightHorizontal === box.getAttribute("data-z"))
            rightHorizontalArray.push(box);
    }

    let leftHorizontalWinner = getWinner(leftHorizontalArray);
    let rightHorizontalWinner = getWinner(rightHorizontalArray);

    return leftHorizontalWinner || rightHorizontalWinner;
}

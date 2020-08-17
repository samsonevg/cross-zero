"use strict";

let boxes;

window.onload = () => {
    boxes = document.getElementsByClassName("box");


    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click',  (elem) => onclick(elem.currentTarget), false);
    }
}

function onclick(elem)
{
    alert("test: " + elem.textContent);
}

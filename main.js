"use strict";

let boxes;
let ifzero = false;
let player;
let playerStepsParagraph;

window.onload = function() {
    boxes = document.getElementsByClassName("box");
    player = document.getElementById("player");

    playerStepsParagraph = document.getElementById("player__steps");
    playerStepsParagraph.innerHTML = boxes.length;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function(event) {
            onClick(event.currentTarget);
        })
    }

    player.innerHTML = ' крестик';
}

function onClick(elem)
{   
    if (elem.textContent !== '')
    return;  

        if (ifzero == false){
            elem.textContent = 'x';
            player.innerHTML = ' нолик'
            ifzero = true;
         }  else {
            elem.textContent = 'o';
            player.innerHTML = ' крестик'
            ifzero = false;
         }
         minusStep();
         
}

function minusStep()
{
    playerStepsParagraph.innerHTML = +playerStepsParagraph.innerHTML - 1;

}   
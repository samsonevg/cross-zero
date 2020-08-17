"use strict";

let boxes;
let ifzero = false;

window.onload = () => {
    boxes = document.getElementsByClassName("box");


    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click',  (elem) => onclick(elem.currentTarget), false);
    }
}

function onclick(elem)
{   
 
    if (elem.textContent==0){
        if (ifzero == false){
            elem.textContent = 'x';
            ifzero = true;
         }  else {
            elem.textContent = 'o';
            ifzero = false;
         }}  else {
            
         }
    
   
}

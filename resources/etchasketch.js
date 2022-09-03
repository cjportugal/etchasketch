console.log("Hello World");
const gridButton = document.querySelector('button')
const gridContainer = document.querySelector('.grid-container')


let gridInput = 0;
let gridSelection = 0;

let gridItems = document.querySelectorAll(".grid-item");
let newGridItems = document.querySelectorAll(".new-grid-item");



// gridItem[0].innerHTML="hello";


    gridItems.forEach(function(gridItem) {
    gridItem.addEventListener("mouseover", function(){
        gridItem.style.backgroundColor= "black";
         })
    })




gridButton.addEventListener('click', function () {
    
    gridInput = window.prompt("how many grid sides?");
    gridSelection = gridInput * gridInput;

    if (gridSelection > 10000) {
        console.log("this is too much");
        gridSelection = 0;       
    } else {
 
        document.styleSheets[0].cssRules[1].style.gridTemplateRows = 'auto';
        document.styleSheets[0].cssRules[1].style.gridTemplateColumns = 'auto';


        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }

        for (let i = 0; i < gridSelection; i++) {
            let newGrid = document.createElement('div');
            gridContainer.appendChild(newGrid);
            newGrid.classList.add('new-grid-item')                
        }



        for (let g = 1; g < gridInput; g++) {
            document.styleSheets[0].cssRules[1].style.gridTemplateRows = document.styleSheets[0].cssRules[1].style.gridTemplateRows + ' auto';
            document.styleSheets[0].cssRules[1].style.gridTemplateColumns = document.styleSheets[0].cssRules[1].style.gridTemplateColumns + ' auto';
        }

        newGridItems = document.querySelectorAll(".new-grid-item");
        newGridItems.forEach(function(newGridItem) {
            newGridItem.addEventListener("mouseover", function(){
                newGridItem.style.backgroundColor= "black";
                })
        })
        gridSelection = 0;  
    }



})









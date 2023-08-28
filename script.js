const container = document.getElementsByClassName('container');
const containerSize = 900;
function buildGrid(size= 16) {
    let heightWidth = Math.floor((containerSize - (2*size)) / size);
    for ( let i = 0; i < size; i++ ) {
        for ( let j = 0; j < size; j++ ) {
            const box = document.createElement('div');
            box.classList.add('box');          
            box.style.height = heightWidth + 'px';
            box.style.width = heightWidth + 'px';
            box.style.border = '1px solid black';
            box.style.backgroundColor = 'white';
            container[0].appendChild(box);
        }
    }
}
buildGrid();


function darkenColor(color) {
    let minusRGB = color.slice(4, color.length-1);
    let array = minusRGB.split(',');
    let r = Number(array[0]);
    let g = Number(array[1]);
    let b = Number(array[2]);
    r -= 25;
    g -= 25;
    b -= 25;
    return ('rgb(' + r + ', ' + g + ', ' + b + ')');
}

let allDivs = document.querySelectorAll('.box');
setTheDivs();

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return ( 'rgb(' + red + ', ' + green + ', ' + blue + ')');
}

const button = document.getElementById('gridButton');

button.addEventListener('click', () => {
    let newSize;
    do {
        newSize = prompt('Enter new grid size (100 max)');
    } while(newSize > 100);
    deleteGrid();
    buildGrid(newSize);
    allDivs = document.querySelectorAll('.box');
    setTheDivs();
});

function setTheDivs () {
    allDivs.forEach(function (div) {
        div.addEventListener('mouseover', () => {
            if(div.style.backgroundColor === 'white') 
                div.style.backgroundColor = getRandomColor();
            else {
                div.style.backgroundColor = darkenColor(div.style.backgroundColor.toString());
            }
        });
    });
}

function deleteGrid () {
    allDivs.forEach(div => {
        div.remove();
    });
}
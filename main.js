// This funciton is called every time a new canvas is drawn
function deleteCanvas() {
    const canvas = document.querySelector('.canvas');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function drawGrid(e) {;
    deleteCanvas()
    const gridSize = parseInt(e.target.id);
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('.canvas').appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            column.addEventListener('mouseover', paintBackground);
        }
    }
}

// This is a function to get the arguments of an rgb() function in CSS
function getArrayFromRBG(rbg) {
    const subArr = rbg.replace(')','').split('(')[1].split(',');
    const subArrToInt = subArr.map(element => parseInt(element));
    return subArrToInt;
}

// This fnction is called when a mouseover event occurs on the canvas.
// Using the getArrayFromRGB() function, it can darken the color by 10%
function paintBackground(e) {
    if (e.target.style.backgroundColor) {
        const firstElement = (getArrayFromRBG(e.target.style.backgroundColor)[0] - 21).toString();
        const secondElement = (getArrayFromRBG(e.target.style.backgroundColor)[1] - 18).toString();
        const thirdElement = (getArrayFromRBG(e.target.style.backgroundColor)[2] - 17).toString();
        e.target.style.backgroundColor = `rgb(${firstElement}, ${secondElement}, ${thirdElement})`;
    } else {
        e.target.style.backgroundColor = '#D5BDAF';
    }
}

// Resets the board while retaining the grid size
function eraseBackground() {
    document.querySelectorAll('.column').forEach(column => {
        column.style.background = 'none';
    })
}




// Event listener which call all the above functions
document.querySelectorAll('.size-selection').forEach(button => {
    button.addEventListener('click', drawGrid)
})

document.getElementById('reset').addEventListener('click', eraseBackground)
function deleteCanvas() {
    const canvas = document.querySelector('.canvas');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function drawGrid(e) {
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
            column.addEventListener('mouseover', paintBackground)
        }
    }
}


// Helper function to reduce make any rgb(x,y,z) color a darker so that
// after ten function calls, the color will be dark black
function darken(rgbColor) {
    const numberValuesArray = rgbColor.substring(rgbColor.indexOf('(') + 1, rgbColor.indexOf(')')).split(',').map(value => parseInt(value.trim()));

    const decreaseOne = Math.round(numberValuesArray[0]/10)
    const decreaseTwo = Math.round(numberValuesArray[1]/10)
    const decreaseThree = Math.round(numberValuesArray[2]/10)

    return `rgb(${numberValuesArray[0] - decreaseOne}, ${numberValuesArray[1] - decreaseTwo}, ${numberValuesArray[2] - decreaseThree})`
}

function paintBackground(e) {
    e.target.style.bgroundColor = 'black';
    // if (bgroundColor) {
    //     console.log('this words')
    //     bgroundColor = darken(bgroundColor)
    // }
}

function eraseBackground() {
    document.querySelectorAll('.column').forEach(column => {
        column.style.background = 'none';
    })
}



// event listener which call all the above functions
document.querySelectorAll('.size-selection').forEach(button => {
    button.addEventListener('click', drawGrid)
})

document.getElementById('reset').addEventListener('click', eraseBackground)
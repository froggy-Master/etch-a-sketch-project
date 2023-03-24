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

function paintBackground(e) {
    e.target.style.backgroundColor = 'black';
}

function eraseBackground() {
    document.querySelectorAll('.column').forEach(column => {
        column.style.background = 'none';
    })
}




document.querySelectorAll('.size-selection').forEach(button => {
    button.addEventListener('click', drawGrid)
})

document.getElementById('reset').addEventListener('click', eraseBackground)
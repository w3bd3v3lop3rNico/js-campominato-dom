const playBtnDOMElement = document.getElementById('play-btn');

// - Cambiare tabella in base alla difficoltà
//     - Recupero dal DOM l'elemento select ed il suo valore
const selectModeDOMElement = document.getElementById('mode-select');
// console.log(selectModeDOMElement);

playBtnDOMElement.addEventListener('click', function() {

    if (selectModeDOMElement.value === '1') {
        gridGen(100, "cell normal-grid")
    } else if (selectModeDOMElement.value === '2') {
        gridGen(81, "cell medium-grid")
    } else if (selectModeDOMElement.value === '3') {
        gridGen(49, "cell hard-grid")
    }
    

    const cellsDOMElements = document.querySelectorAll('.cell');
    // console.log(cellsDOMElements);

    for (let i = 0; i < cellsDOMElements.length; i++ ) {

        const selectedCell = cellsDOMElements[i];
        // console.log(i, selectedCell);

        selectedCell.addEventListener('click', function() {

            selectedCell.classList.add('bg-color');
        })
    }
})

function gridGen(cellsNumb, difficultyClass) {
    const gridDOMElement = document.querySelector('.grid');

    gridDOMElement.innerHTML = '';

    for (let i = 0; i < cellsNumb; i++) {

        const numero = (i + 1);

        const cellHTML = `<div class="${difficultyClass}">${numero}</div>`;

        gridDOMElement.innerHTML += cellHTML;

        console.log(difficultyClass);
    }
}
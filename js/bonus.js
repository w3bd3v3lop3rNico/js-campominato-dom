const playBtnDOMElement = document.getElementById('play-btn');

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
    getArrayRandomFromARange(1, 100, 16)
    console.log(getArrayRandomFromARange)
    

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

// - Generare 16 bombe
//     - dichiaro una funzione che generi numeri random da 1 ad un argomento range-max
function getRandomInt(minRange, maxRange) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//     - Dichiaro una funzione contenente un'array vuoto che dovrà essere riempito successivamente
function getArrayRandomFromARange(minRange, maxRange, number){
    const bombsArray = [];
    
}
//     - inizializzo un ciclo while che mi genera 16 
//     numeri random in base al range di celle
//     - invoco la funzione che genera i numeri random
//     - mi accerto che i numeri generati non siano uguali
//         - SE i numeri generati sono uguali ad almeno un numero all'interno dell'array il ciclo continua senza leggere il codice
//         - ALTRIMENTI il numero generato viene pushato nell'array
// - Al click dell'utente su una cella determinare se ha trovato una bomba o no
//     - SE l'utente trova una bomba
//         - coloro la cella di rosso
//         - la pagina avvisa l'utente del game over
//     - ATRIMENTI il gioco prosegue
//         - viene incrementato il punteggio
//         - coloro le celle di azzuro
//         - verifico se il giocatore ha finito il gioco
const playBtnDOMElement = document.getElementById('play-btn');

const selectModeDOMElement = document.getElementById('mode-select');
// console.log(selectModeDOMElement);

const gridDOMElement = document.querySelector('.grid');

const counterDOMElement = document.querySelector('.counter');
// let counter = 0

playBtnDOMElement.addEventListener('click', function() {
    // counter = 0
    
    if (selectModeDOMElement.value === '1') {
        gridGen(100, "cell normal-grid")
    } else if (selectModeDOMElement.value === '2') {
        gridGen(81, "cell medium-grid")
    } else if (selectModeDOMElement.value === '3') {
        gridGen(49, "cell hard-grid")
    }
    const randomArray = getArrayRandomFromARange(1, 100, 16)
    console.log(randomArray)

    const cellsDOMElements = document.querySelectorAll('.cell');
    // console.log(cellsDOMElements);

    

    for (let i = 0; i < cellsDOMElements.length; i++ ) {

        const selectedCell = cellsDOMElements[i];
        // console.log(i, selectedCell);
        const cellNumber = (i + 1);
        console.log(cellNumber);

        selectedCell.addEventListener('click', function() {

            // counter++
            // const counterHTML = `<span>${counter}</span>`
            // counterDOMElement.innerHTML = counterHTML
            selectedCell.classList.add('bg-blue');

            // - Al click dell'utente su una cella determinare se ha trovato una bomba o no
            //     - SE l'utente trova una bomba
            if (randomArray.includes(cellNumber)) {
                //         - coloro la cella di rosso
                selectedCell.classList.add("bg-red");
                //         - la pagina avvisa l'utente del game over
                alert("Game over");
                //         - tolgo interattività alla griglia
                gridDOMElement.classList.add("pointer-none")
            } 
            
            //     - ATRIMENTI il gioco prosegue
            //         - viene incrementato il punteggio
            //         - coloro le celle di azzuro
            //         - verifico se il giocatore ha finito il gioco
            
        })
    }
})

function gridGen(cellsNumb, difficultyClass) {
    

    gridDOMElement.innerHTML = '';

    for (let i = 0; i < cellsNumb; i++) {

        const numero = (i + 1);

        const cellHTML = `<div class="${difficultyClass}">${numero}</div>`;

        gridDOMElement.innerHTML += cellHTML;

        // console.log(difficultyClass);
    }
}

// - Generare 16 bombe
//     - dichiaro una funzione che generi numeri random da 1 ad un argomento range-max
function getRandomInt(minRange, maxRange) {
    min = Math.ceil(minRange);
    max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min) + min);
}

//     - Dichiaro una funzione contenente un'array vuoto che dovrà essere riempito successivamente
function getArrayRandomFromARange(minRange, maxRange, number){
    const bombsArray = [];
    //     - inizializzo un ciclo while che mi genera 16 
    //  numeri random in base al range di celle
    while (bombsArray.length < number) {
        //     - invoco la funzione che genera i numeri random
        const generatedNumber = getRandomInt(minRange, maxRange);
        //     - mi accerto che i numeri generati non siano uguali
        //         - SE il numero generato è diverso da un numero già nell'array, pusho
        console.log(generatedNumber)
        if (!bombsArray.includes(generatedNumber)) {
            
            bombsArray.push(generatedNumber);
        }
        //         - ALTRIMENTI il numero non viene pushato
    }
    return bombsArray
}


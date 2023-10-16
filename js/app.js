// - Generare 100 caselle con js
//     - Richiamare elemento griglia dal DOM
const gridDOMElement = document.querySelector('.grid');
// console.log(gridDOMElement);

// - Inserire il tutto in un event listener legato al bottone 'Gioca'
//     - Recuperare il bottone dal DOM
const playBtnDOMElement = document.getElementById('play-btn');

//     - inserire il codice all'interno dell'event listener
playBtnDOMElement.addEventListener('click', function() {
    //     - creare la funzione che svuota la griglia ad ogni click
    gridDOMElement.innerHTML = '';

    //     - inizializzare un ciclo for che genera 100 caselle
    for (let i = 0; i < 100; i++) {

        //         - Dichiarare una variabile che generi un numero da 1 a 100 (const n = indice + 1)
        const numero = (i + 1);

        //         - Dichiarare una variabile che contenga un tamplate leteral con la variabile numero
        const cellHTML = `<div class="cell">${numero}</div>`;
        // console.log(i, cellHTML);
        //         - inserire il tamplate leteral (caselle) nel DOM (.innerHTML)
        gridDOMElement.innerHTML += cellHTML;
        // console.log(gridDOMElement);
    }

    // - Colorare le caselle cliccate
    //     - Recupero dal DOM le caselle (recupero un array)
    const cellsDOMElements = document.querySelectorAll('.cell');
    console.log(cellsDOMElements);

    //     - inserisco in un ciclo l'array 
    for (let i = 0; i < cellsDOMElements.length; i++ ) {

        //     - dichiaro una variabile con la quale faccio corrispondere ad ogni cella un indice
        const selectedCell = cellsDOMElements[i];
        console.log(i, selectedCell);

        //     - ad ogni casella aggiungo un event listener
        selectedCell.addEventListener('click', function() {

            //         - ogni volta che l'event listener si attiverà su una casella aggiungerà la classe 'bg-color'
            selectedCell.classList.add('bg-color');
        })
    }
})






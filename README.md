# Campo Fiorito

- Creare struttura html
- Creare stile css
- Generare 100 caselle con js
    - Recupero dal dom l'elemento 'grid'
    - Richiamare elemento griglia dal DOM
    - inizializzare un ciclo for che genera 100 caselle
        - Dichiarare una variabile che generi un numero da 1 a 100 (const n = indice + 1)
        - Dichiarare una variabile che contenga un tamplate leteral con la variabile numero
        - inserire il tamplate leteral (caselle) nel DOM (.innerHTML)
- Colorare le caselle cliccate
    - Recupero dal DOM le caselle
    - inserisco in un ciclo le caselle e faccio corrispondere ad ognuna un indice
    - ad ogni casella aggiungo un event listener
        - ogni volta che l'event listener si attiverà su una casella aggiungerà la classe 'bg-color'
- Inserire il tutto in un event listener legato al bottone 'Gioca'
    - Recuperare il bottone dal DOM
    - creare la funzione che svuota la griglia ad ogni click
    - inserire il codice all'interno dell'event listener

# Bonus
- Cambiare tabella in base alla difficoltà
    - Recupero dal DOM l'elemento select ed il suo valore
        - SE (valore === 1) la difficoltà è normale 
            - stampa la griglia a 100 caselle  
        - ALTRIMENTI SE (valore === 2) la difficoltà è media 
            - stampa la griglia con 81 caselle
            - modifico il flex basis di "cell"
        - ALTRIMENTI SE (valore === 3) la difficoltà è difficie 
            - stampa la griglia con un 49 caselle
            - modifico il flex basis di "cell"

# Logica Campo fiorito
- Generare 16 bombe
    - dichiaro una funzione che generi numeri random da 1 ad un argomento range-max
    - Dichiaro una funzione contenente un'array vuoto che dovrà essere riempito successivamente
    - inizializzo un ciclo while che mi genera 16 
    numeri random in base al range di celle
    - invoco la funzione che genera i numeri random
    - mi accerto che i numeri generati non siano uguali
        - SE i numeri generati sono uguali ad almeno un numero all'interno dell'array il ciclo continua senza leggere il codice
        - ALTRIMENTI il numero generato viene pushato nell'array
- Al click dell'utente su una cella determinare se ha trovato una bomba o no
    - SE l'utente trova una bomba
        - coloro la cella di rosso
        - la pagina avvisa l'utente del game over
    - ATRIMENTI il gioco prosegue
        - viene incrementato il punteggio
        - coloro le celle di azzuro
        - verifico se il giocatore ha finito il gioco

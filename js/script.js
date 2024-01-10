console.log('JS OK');

// Recupero elementi dalla pagina

const play = document.getElementById('play');
const container = document.getElementById('container');

// Dati di partenza

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


//* FUNZIONI

//Funzione per creare una cella

const createCell = cellNumber => {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerText = cellNumber;
    return newCell;
}


// Al click sul bottone viene creata la griglia con le 100 celle
play.addEventListener('click', () => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell(i);
        grid.appendChild(cell);

        //Al click la cella si colora d'azzurro e stampiamo il numero corrispondente in console
        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            console.log('Il numero della cella è:', i);
        })
    }
})
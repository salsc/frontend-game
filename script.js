let board = document.querySelector('#board');
let resetB = document.querySelector('#reset');
let divCount = 0;
let fieldDim = 5;
let mineField = [];
let rando;

//create sufficient divs for square of dimension fieldDim
for(let i=0;i<fieldDim*fieldDim;i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    document.querySelector('#board').appendChild(newDiv);
}
let squares = document.querySelectorAll('.square');

//randomly seed mines to each div, assign 2D array index, establish dataset
function layMines() {
    for(let i=0;i<fieldDim;i++) {
        mineField[i] = [];
        for (let j=0;j<fieldDim;j++) {
            //rando = Math.floor(Math.random()*2); //use binary - 50% seed rate
            rando = Math.random() < 0.4; //use boolean - specified seed rate 0.4
            mineField[i][j] = squares[divCount];
            mineField[i][j].dataset.isMine = rando;
            mineField[i][j].dataset.neighbMines = 0;
            mineField[i][j].dataset.row = i;
            mineField[i][j].dataset.column = j;
            mineField[i][j].setAttribute('onClick','play(this)');
            divCount++;
        }
    }
}
layMines();

//sweep thru squares adjacent to target element
function searchNeighbors(i,j) {
    for(let m=i-1;m<=i+1;m++) {
        for(let n=j-1;n<=j+1;n++){
            // console.log(i,j,m,n);
            pickyLook(i,j,m,n);
        }
    }
}

//filter the sweep to stay within bounds of 2D array
function pickyLook (i,j,m,n) {
    if (i > 0 || m >= i) {
        // console.log("i is greater than 0 or m is greater-than or equal to i");
        if (i < fieldDim-1 || m <= i) {
            // console.log('i is less than fielddim or m is less than or equal to i');
            if (j > 0 || n >= j) {
                // console.log('j is greater than 0 or n is greater than or equal to j');
                if (j < fieldDim-1 || n <= j) {
                    // console.log('j is less than fielddim or n is less than or equal to j');
                    if (m !== i || n !== j) {
                        // console.log('m is not equal to i or n is not equal to j');
                        checkNeighbor(i,j,m,n);
                    }
                }
            }
        }
    }
}

//determine if square adjacent to target element is mined
function checkNeighbor(i,j,m,n) {
    if(mineField[m][n].dataset.isMine === 'true'){
        addValue(i,j)
    }
}

//add to count of mines on squares adjacent to target element
function addValue(i,j) {
    mineField[i][j].dataset.neighbMines = parseInt(mineField[i][j].dataset.neighbMines,10) + 1;
}

//reset the board to initial
function reset() {
    divCount = 0;
    squares.forEach(function(element) {
        element.style.backgroundColor = 'yellow';
        element.innerText = '';
    })
    layMines();
}

//determine if element selected is mined or not; if mined, trip all mines
function play(element) {
    if (element.style.backgroundColor !== 'lightblue' && element.style.backgroundColor !== 'red') {
        if (element.dataset.isMine === 'false') {
            element.style.backgroundColor = 'lightblue';
            let i = parseInt(element.dataset.row,10);
            let j = parseInt(element.dataset.column,10);
            searchNeighbors(i,j);
            element.innerText = element.dataset.neighbMines;
        } else if (element.dataset.isMine === 'true') {
            squares.forEach(function(element) {
                if (element.dataset.isMine === 'true') {
                    element.style.backgroundColor = 'red';
                }
            })
        }
    }
}
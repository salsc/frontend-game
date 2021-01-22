let board = document.querySelector('#board');
let resetB = document.querySelector('#reset');
let divCount = 0;
let fieldDim = 3;
let mineField = [];

for(let i=0;i<fieldDim*fieldDim;i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    document.querySelector('#board').appendChild(newDiv);
}
let squares = document.querySelectorAll('.square');

function layMines() {
    for(let i=0;i<fieldDim;i++) {
        mineField[i] = [];
        for (let j=0;j<fieldDim;j++) {
            rando = Math.floor(Math.random()*2);
            //rando = Math.random < 0.4; //use boolean
            mineField[i][j] = squares[divCount];
            mineField[i][j].dataset.isMine = rando;
            mineField[i][j].dataset.neighbMines = 0;
            mineField[i][j].setAttribute('onClick','play(this)');
            //console.log(mineField[i][j]);
            divCount++;
        }
    }

}
layMines();

// function neighborSearch() {
//     //console.log(mineField[0][0].dataset.isMine)
//     for(let i=0;i<fieldDim;i++) {
//         for(let j=0;j<fieldDim;j++) {
//             for(let m=i-1;m<=i+1;m++) {
//                 for(let n=j-1;n<=j+1;j++){
//                     console.log(m, n);
//                     if(mineField[m][n].dataset.isMine === '1'){
//                         mineField[i][j].dataset.neighbMines = parseInt(mineField[i][j].dataset.neighbMines,10) + 1;
//                     }
//                 }
//             }
//         }
//     }
// }
// neighborSearch();


function ckNeighb(i,j,m,n) {
    if(mineField[m][n].dataset.isMine === '1'){
        addValue(i,j)
    }
    console.log(mineField[i][j]);
}
// ckNeighb();

function addValue(i,j) {
    mineField[i][j].dataset.neighbMines = parseInt(mineField[i][j].dataset.neighbMines,10) + 4;
}

function reset() {
    divCount = 0;
    squares.forEach(function(element) {
        element.style.backgroundColor = 'yellow';
    })
    layMines();
}

function play(element) {
    if (element.dataset.isMine === '0') {
        element.style.backgroundColor = 'lightblue';
    }
    if (element.dataset.isMine === '1') {
        squares.forEach(function(element) {
            if (element.dataset.isMine === '1') {
                element.style.backgroundColor = 'red';
            }
        })
    }
}
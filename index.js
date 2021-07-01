const boards = Array.from(document.querySelectorAll('.board'));

let player1turn = true, player2turn=false;

//
function addMark(){
    if(this.clicked) return
    if(!this.clicked && player1turn){
        let x ='x'
        player2turn =!player2turn
        player1turn =!player1turn
        this.clicked = true
        var img = document.createElement('img');
        img.setAttribute('src', `./x.png`);
        img.classList.add('mark x');
        return this.appendChild(img);
    }else if(!this.cliked && player2turn){
        let o ='o'
        player2turn =!player2turn
        player1turn =!player1turn
        this.clicked = true
        var img = document.createElement('img');
        img.setAttribute('src', `./o.png`);
        img.classList.add('mark o');
        return this.appendChild(img);
    }
}

//check winner
let line1= boards.slice(0,3);
let line2= boards.slice(3,6);
let line3= boards.slice(6);
let leftDiag= [boards[0],boards[4],boards[8]];
let rightDiag= [boards[2],boards[4],boards[6]];
let column1= [boards[0],boards[3],boards[6]];
let column2= [boards[1],boards[4],boards[7]];
let column3= [boards[2],boards[5],boards[8]];


function checkRows(params) {
    if(line1.every(board => board.includes(params))
     || line2.every(board => board.includes(params))
     || line2.every(board => board.includes(params))){
         return true
     }
}

function checkColumns(params) {
    if(column1.every(board => board.includes(params))
     || column2.every(board => board.includes(params))
     || column2.every(board => board.includes(params))){
         return true
     }
     return false
}

function checkLeftDiagonal(params) {
    if(leftDiag.every(board=> board.includes(params))){
        return true
    }
    return false
}

function checkRightDiagonal(params) {
   if(rightDiag.every(board=> board.includes(params))){
       return true
   }
   return false
}

function declareWinner(params) {
    if(checkColumns() || checkLeftDiagonal|| checkRows || checkRightDiagonal){
        return true 
    }{
        return false // it's a tie
    }
}


//Even listeners
boards.forEach(board=> board.addEventListener('click',addMark));
boards.forEach(board=> board.setAttribute('cliked', 'false'));

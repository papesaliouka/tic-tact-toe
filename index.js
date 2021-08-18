let boards = Array.from(document.querySelectorAll('.board'));
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

const restartButton = document.getElementById('restart')

player1.textContent = prompt('Please Enter your name player 1')
player2.textContent = prompt('Please Enter your name player 2')

let gameBoard = [];

for(let i=0; i<=2;i++){
    let newArr= new Array(3).fill('');
    gameBoard.push(newArr)
}


let player1turn = true, player2turn=false;

// create img for marker
const createImageForMarker = (marker)=>{
    var img = document.createElement('img');
    img.setAttribute('src', `./${marker}.png`);
    img.classList.add('mark');
    return img
}
// adding marker logic
function addMark (marker, self){
    const col= Number(self.attributes.col.value);
    const row = Number(self.attributes.row.value);
    gameBoard[row][col]= marker;
    player2turn =!player2turn
    player1turn =!player1turn
    self.clicked = true;
    const img= createImageForMarker(marker);
    return self.appendChild(img);
}

function play(){
    if(this.clicked) return;
    if(!this.clicked && player1turn){
        let x ='x';
        const self= this;
        addMark(x, self);
        declareWinner(x)
        return
    }else if(!this.cliked && player2turn){
        let o ='o';
        const self = this;
        addMark(o, self);
        declareWinner(o)
        return
    }
}

const checkRows = (marker) =>{
    for(let i=0; i< gameBoard.length;i++){
        if(gameBoard[i].every(board=> board == marker)){
            return true
        }
    }
    return false
}

const checkColums = (marker)=>{
        if(gameBoard[0][0] == marker && gameBoard[1][0] ==marker && gameBoard[2][0]==marker){
            return true            
        }if(gameBoard[0][1] == marker && gameBoard[1][1] ==marker && gameBoard[2][1]==marker){
            return true            
        }if(gameBoard[0][2] == marker && gameBoard[1][2] ==marker && gameBoard[2][2]==marker){
            return true            
        }
        return false
}

const checkLeftDiagonal = (marker)=>{
    if(gameBoard[0][0]==marker && gameBoard[1][1]== marker && gameBoard[2][2] == marker){
        return true
    }
    return false
}

const checkRightDiagonal = (marker)=>{
    if(gameBoard[0][2]==marker && gameBoard[1][1]== marker && gameBoard[2][0] == marker){
        return true
    }
    return false
}

const declareWinner = (marker)=>{
    if(checkColums(marker) || checkRows(marker) || checkLeftDiagonal(marker) || checkRightDiagonal(marker)){
        alert(`${marker=='x' ? player1.textContent: player2.textContent} is the winner`)
        location.reload()
    }else{
        let i=0;
            if(gameBoard[i].every(board=> board !== '' )&& gameBoard[i+1].every(board=> board !== '' )&& gameBoard[i+2].every(board=> board !== '' )){
                alert(" It's a Tie")
                location.reload()
            }
    }
}



//reset the game 


//Even listeners
boards.forEach(board=> board.addEventListener('click',play));
boards.forEach(board=> board.setAttribute('cliked', 'false'));
restartButton.addEventListener('click', ()=> location.reload())

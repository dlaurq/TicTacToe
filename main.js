const table = document.querySelector('.table')
const cells = document.querySelectorAll('.cell')
const title = document.querySelector('h1')
const hiddenBtn = document.querySelector('.hidden-btn')
const restartBtn = document.querySelector('.restart-btn')

if(localStorage.getItem('x') === null) localStorage.setItem('x',0)
if(localStorage.getItem('o') === null) localStorage.setItem('o',0)

let score = {}
score.x = parseInt(localStorage.getItem('x')) 
score.o = parseInt(localStorage.getItem('o'))
const xScore = document.querySelector('.x')
const oScore = document.querySelector('.o')
xScore.innerHTML = score.x
oScore.innerHTML = score.o

let playerTurn = 'X'


cells.forEach(cell => {
    cell.addEventListener('click', () =>{
        if(cell.innerHTML !== '')
            return
        
        cell.innerHTML= playerTurn;
        cell.classList.add(playerTurn)

        checkWinner()
        playerTurn = playerTurn ==='X' ? 'O':'X'
        
    })
});

function checkWinner(){
    //draw
    let ok=true
    cells.forEach(cell => {
        if(cell.innerHTML ==='')
            ok=false
    });
    if(ok)
        showWinner("Draw")

    //horizontal
    if(cells[0].innerHTML !== '' && cells[0].innerHTML===cells[1].innerHTML && cells[1].innerHTML===cells[2].innerHTML ||
        cells[3].innerHTML !== '' && cells[3].innerHTML===cells[4].innerHTML && cells[4].innerHTML===cells[5].innerHTML ||
        cells[6].innerHTML !== '' && cells[6].innerHTML===cells[7].innerHTML && cells[7].innerHTML===cells[8].innerHTML)
        {
        showWinner(playerTurn)
    }
    
    //vertical
    if(cells[0].innerHTML !== '' && cells[0].innerHTML===cells[3].innerHTML&& cells[0].innerHTML===cells[6].innerHTML ||
    cells[1].innerHTML !== '' && cells[1].innerHTML===cells[4].innerHTML&& cells[1].innerHTML===cells[7].innerHTML ||
    cells[2].innerHTML !== '' && cells[2].innerHTML===cells[5].innerHTML&& cells[2].innerHTML===cells[8].innerHTML){
        showWinner(playerTurn)
    }

    //diag
    if(cells[0].innerHTML !== '' && cells[0].innerHTML===cells[4].innerHTML&& cells[0].innerHTML===cells[8].innerHTML ||
    cells[2].innerHTML !== '' && cells[2].innerHTML===cells[4].innerHTML&& cells[2].innerHTML===cells[6].innerHTML){
        showWinner(playerTurn)
    }
    
}

function showWinner(winner){
    if(winner === 'Draw'){
        title.innerHTML = winner
    }else{
        title.innerHTML = winner + ' won'
        title.classList.add("winner-" + winner.toLowerCase())
        if(winner == 'X') {
            score.x += 1;
        
            localStorage.setItem('x', score.x)
        }
        if(winner == 'O') {
            score.o += 1;
            localStorage.setItem('o', score.o)
        }
        
        
    }
    const msgBox = document.querySelector('.msg-box')
    msgBox.innerHTML = 'Click to restart'
    hiddenBtn.classList.remove('hide')
    hiddenBtn.addEventListener('click', () =>{ location.reload()})
}

restartBtn.addEventListener('click', ()=>{
    localStorage.clear()
    location.reload()
})
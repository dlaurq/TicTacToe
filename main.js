const table = document.querySelector('.table')
const cells = document.querySelectorAll('.cell')
const title = document.querySelector('h1')
const hiddenBtn = document.querySelector('.hidden-btn')

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
    }
    hiddenBtn.classList.remove('hide')
    hiddenBtn.addEventListener('click', () =>{ location.reload()})
}

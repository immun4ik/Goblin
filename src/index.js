import './style.css'; 
import goblinImage from './goblin.png'; 

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const boardSize = 4;
    const holeCount = boardSize * boardSize;
    const intervalTime = 1000; 

    let holes = []; 
    let currentHoleIndex = -1; 
    let goblinElement; 

    
    function createBoard() {
        for (let i = 0; i < holeCount; i++) {
            const hole = document.createElement('div');
            hole.classList.add('hole');
            hole.dataset.index = i; 
            gameBoard.appendChild(hole);
            holes.push(hole);
        }
    }

   
    function createGoblin() {
        goblinElement = document.createElement('img');
        goblinElement.src = goblinImage; 
        goblinElement.alt = 'Goblin';
        goblinElement.classList.add('goblin');
    }

   
    function moveGoblin() {
        let newHoleIndex;
        do {
            
            newHoleIndex = Math.floor(Math.random() * holeCount);
        } while (newHoleIndex === currentHoleIndex); 
        
        const newHole = holes[newHoleIndex];

        
        newHole.appendChild(goblinElement);

        currentHoleIndex = newHoleIndex; 
    }

    
    createBoard();
    createGoblin();
    moveGoblin(); 

    
    setInterval(moveGoblin, intervalTime);
});
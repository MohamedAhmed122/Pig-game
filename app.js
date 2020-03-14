/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
*/
var roundScore, scores, dice, activePlayer;
setValues()

document.querySelector('#current-0').textContent = dice;

decleration()

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', hold)

document.querySelector('.btn-new').addEventListener('click', function () {
    setValues();
    decleration();
})


function rollDice() {
    var dice = Math.floor((Math.random() * 6) + 1);

    //Desplay result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //update the round score if was not the dice =1
    if (dice !== 1) {
        // add score
        roundScore += dice; //roundScore=roundScore+dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //display
    } else {
        // next player
        nextPlayer()
    }
}


function hold() {
    //add current score to global score
    scores[activePlayer] += roundScore;

    // update/display the userinterface ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; //display

    // check if player won the game
    if (scores[activePlayer] >= 102) {
        document.querySelector('#name-' + activePlayer).textContent = "WINNER!"
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('.player-' + activePlayer + '-panel').classList.add('winner');
        document.getElementById('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        nextPlayer();
    }
}


function nextPlayer() {

    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
        roundScore = 0;
        
    }
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


function setValues() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
}

function decleration() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}


//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
var read = document.querySelector('#score-1').textContent;
console.log(read);
*/
var scores, roundScore, activePlayer, dice, isPlaying;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
isPlaying = true;
diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;


document.querySelector(".btn-roll").addEventListener("click", function () {

    // generate arandom rumber
    dice = Math.floor(Math.random() * 6) + 1;

    // display the result
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    // update the roundScore if the dice was NOT one
    if (dice !== 1) {
        // Add the score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }

});


document.querySelector(".btn-hold").addEventListener("click", function () {
    // Add the current score to global score
    if (isPlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 104) {
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            diceDom.style.display = "none";
            isPlaying = false;
        }
        nextPlayer();

    }
});


document.querySelector(".btn-new").addEventListener("click", function () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    diceDom = document.querySelector(".dice");
    diceDom.style.display = "none";
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector("#name-0").textContent = "Player1";
    document.querySelector("#name-1").textContent = "Player2";
});


nextPlayer = () => {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
};
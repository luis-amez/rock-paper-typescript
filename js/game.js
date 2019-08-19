var userScore = 0;
var computerScore = 0;
var counter = 0;
function startGame() {
    userScore = 0;
    computerScore = 0;
    counter = 0;
    outputMessage("The game has begun!");
    hideStartButton();
}
function outputMessage(message) {
    alert(message);
}
function hideStartButton() {
    var startButton = document.querySelector(".start-button");
    startButton.style.display = "none";
}
//# sourceMappingURL=game.js.map
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            });
    }
});


let mode = '';      //used for game mode settings
let language = 0;

$('document').ready(function () {
    // grab the query parameter from the url and pass it to game setup
    mode = new URLSearchParams(window.location.search).get('mode');
   
    buildLayout(mode);
});

function buildLayout(mode) {

    if (mode === "Portuguese") {
        document.getElementById("language").innerHTML = `<p><img src="assets/images/portugal.png" alt="Portugal"> <br> Portuguese</p>`;
    } else if (mode === "Swedish") {
        document.getElementById("language").innerHTML = `<p><img src="assets/images/sweden.png" alt="Sweden"> <br> Swedish</p>`;
    } else if (mode === "French") {
        document.getElementById("language").innerHTML = `<p><img src="assets/images/france.png" alt="France"> <br>French</p>`;
    } else if (mode === "German") {
        document.getElementById("language").innerHTML = `<p><img src="assets/images/germany.png" alt="Germany"> <br> German</p>`;
    } else if (mode === "Random") {
        document.getElementById("language").innerHTML = `<p><img src="assets/images/globe.png" alt="world"> <br> Random</p>`;
    } else {
        alert(`Unknown game type ${mode}`);
        throw `Unknown game type ${mode}, aborting!`;
    }
}

function runGame() {}

function displayQuestion() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function topScore() {}
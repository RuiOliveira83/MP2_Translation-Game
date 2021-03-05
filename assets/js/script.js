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
    // grab the query parameter from the url and pass it to mode
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
    } 
    myFunction()
}



let num1 = Math.floor(Math.random() * 493);
let num2 = Math.floor(Math.random() * 493);
let num3 = Math.floor(Math.random() * 493);
let num4 = Math.floor(Math.random() * 493);
let numOptions = [num1, num2, num3, num4];
let numr = numOptions[Math.floor(Math.random() * 4)]



// --------------------Select english word
function fetchWord() {
    

    return fetch('assets/word_list.txt')
            .then(response =>
                response.text().then(text => text.split("\n")));
}

fetchWord().then(arr => document.getElementById("word").innerHTML = arr[numr]);

function myFunction() {


fetch('assets/word_list_pt.txt')
  .then(response => response.text().then(text => text.split("\n")))
  .then(data => {
      word1Pt = data[num1];
      word2Pt = data[num2];
      word3Pt = data[num3];
      word4Pt = data[num4];
   
            runGame()
  });
}


function runGame() {
      document.getElementById("option1").innerHTML = word1Pt;
      document.getElementById("option2").innerHTML = word2Pt;
      document.getElementById("option3").innerHTML = word3Pt;
      document.getElementById("option4").innerHTML = word4Pt;
}

function displayQuestion() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function topScore() {}
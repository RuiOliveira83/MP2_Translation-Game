// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
   mode = new URLSearchParams(window.location.search).get('mode');
   buildLayout(mode);
});

// --------------------Build Layout according with the selected mode

function buildLayout(mode) {
   if (mode === "Portuguese") {
      document.getElementById("language").innerHTML = '<p><img src="assets/images/portugal.png" alt="Portugal"> <br> Portuguese</p>';
   } else if (mode === "Swedish") {
      document.getElementById("language").innerHTML = '<p><img src="assets/images/sweden.png" alt="Sweden"> <br> Swedish</p>';
   } else if (mode === "French") {
      document.getElementById("language").innerHTML = '<p><img src="assets/images/france.png" alt="France"> <br>French</p>';
   } else if (mode === "German") {
      document.getElementById("language").innerHTML = '<p><img src="assets/images/germany.png" alt="Germany"> <br> German</p>';
   } else if (mode === "Random") {
      document.getElementById("language").innerHTML = '<p><img src="assets/images/globe.png" alt="world"> <br> Random</p>';
   }
   fetchWords();
}

// --------------------Select words from lists

// The function fetchWords() will:
// * generate 4 random numbers between 1 and 490 (num1, num2, num3 and num4);
// * create an array with those 4 numbers (numOptions);
// * select randomly an element of the numOptions array (numr);
// * select a random number between 1 and 4
// * run the functions fetchWord and fetch Options

function fetchWords() {
   
   num1 = Math.floor(Math.random() * 490);
   num2 = Math.floor(Math.random() * 490);
   num3 = Math.floor(Math.random() * 490);
   num4 = Math.floor(Math.random() * 490);
   numOptions = [num1, num2, num3, num4];
   numr = numOptions[Math.floor(Math.random() * 4)];
   numr2 = Math.floor(Math.random() * 4);

   fetchWord();
   fetchOptions();
}

// --------------------Select English word from list

// The function fetchWord() will fetch the word in the position number numr (numr is num1 or num2 or num3 or num4) from the 
// list called "word_list.txt" and put it inside the html on the element with the id "word". This word list was taken from the website https://summerboardingcourses.com/

function fetchWord() {

   return fetch('assets/word_list.txt')
      .then(response => response.text().then(text => text.split("\n")))
      .then(arr => {
         document.getElementById("word").innerHTML = arr[numr];
      });
}

// --------------------Select 4 different words from the list in the selected language

// The function fetchOptions() will:
// * create an array (urlList) with the 4 word lists in the 4 different languages;
// * it will detect the game mode selected and select the list accordingly; (if the game mode is "Random" it will 
// select a list randomly using the random number "numr2");
// * it will fetch 4 words from that list. The words will be in the position num1, num2, num3 and num4;
// * it will insert those words inside the html on the elements with the ID "word1", "word2", "word3" and "word4".


function fetchOptions() {

   var urlList = ['assets/word_list_pt.txt', 'assets/word_list_se.txt', 'assets/word_list_fr.txt', 'assets/word_list_de.txt'];
   var url = 0;

   if (mode === "Portuguese") {
      url = urlList[0];
   } else if (mode === "Swedish") {
      url = urlList[1];
   } else if (mode === "French") {
      url = urlList[2];
   } else if (mode === "German") {
      url = urlList[3];
   } else if (mode === "Random") {
      url = urlList[numr2];
   }

   return fetch(url)
      .then(response => response.text().then(text => text.split("\n")))
      .then(data => {
         word1 = data[num1];
         word2 = data[num2];
         word3 = data[num3];
         word4 = data[num4];

         document.getElementById("option1").innerHTML = word1;
         document.getElementById("option2").innerHTML = word2;
         document.getElementById("option3").innerHTML = word3;
         document.getElementById("option4").innerHTML = word4;
      });
}

// ----------------------Event Listener - answer given


var firstClick = 0;

var answers = document.getElementsByClassName("answer");

var myFunction = function(evt) {
  
   checkAnswer(evt);

   firstClick = firstClick + 1;
   if (firstClick === 1) {
      timer();

   } //starts timer on firstClick

};

for (var i = 0; i < answers.length; i++) {
   answers[i].addEventListener('click', myFunction, false);
}

// ----------------------------Check answer

// The function check Answer will check the answer and run the correctAnswer function if the answer is correct or run the wrongAnswer 
//  function if the answer is not correct. To check if the answer is correct it will compare the position on the list of both fetchWords,
//  if they are in the same position it means that the answer is correct.



function checkAnswer(evt) {

   if (evt.target.id === 'option1') {
      if (numr === num1) {
         correctAnswer();
      } else {
         wrongAnswer();
      }
   } else if (evt.target.id === 'option2') {
      if (numr === num2) {
         correctAnswer();
      } else {
         wrongAnswer();
      }
   } else if (evt.target.id === 'option3') {
      if (numr === num3) {
         correctAnswer();
      } else {
         wrongAnswer();
      }
   } else if (evt.target.id === 'option4') {
      if (numr === num4) {
         correctAnswer();
      } else {
         wrongAnswer();
      }
   }
}

// ---------------------------------Score

// The function correctAnswer() will start by checking if the player still have time. if the time left is 0 it doesn't do anything, if the timeLeft is > 0 it will:
// * check the game mode, if game mode is not "Random" it will add 5 to the existing score;
// * if the game mode is "Random" it will add 10 points to the existing score.
// * it will insert the new score on the element with the Id "score";
// * it will run the function topScore;
// * it will run the function playCorrect;
// * it will run the function fetchWords() to get new words.


function correctAnswer() {
   var timeLeft = parseInt(document.getElementById("time").innerText);
   if (timeLeft > 0) {
      oldScore = parseInt(document.getElementById("score").innerText);
      if (mode !== "Random") {
         score = oldScore + 5;
      } else {
         score = oldScore + 10;
      }

      document.getElementById("score").innerHTML = score;
      topScore();
      fetchWords();
      playCorrect();
   }
}

// The function wrongAnswer() will start by checking if the player still have time. if the time left is 0 it doesn't do anything, if the timeLeft is > 0 it will:
// * check the game mode, if game mode is not "Random" it will take 2 points from the existing score;
// * if the game mode is "Random" it will take 5 points from the existing score.
// * it will insert the new score on the element with the Id "score";
// * it will run the function playWrong.
// * it will run the function fetchWords() to get new words.

function wrongAnswer() {
   var timeLeft = parseInt(document.getElementById("time").innerText);
   if (timeLeft > 0) {

      oldScore = parseInt(document.getElementById("score").innerText);

      if (mode !== "Random") {
         score = oldScore - 2;
      } else {
         score = oldScore - 5;
      }

      document.getElementById("score").innerHTML = score;
      fetchWords();
      playWrong();
   }
}

// The function topScore will compare the values of the elements with the ID of "score" and "top-score". If score is bigger than top-score it will change the value of top-score and match it with the score value.

function topScore() {
   var oldScore = parseInt(document.getElementById("score").innerText);
   var topScore = parseInt(document.getElementById("top-score").innerText);
   if (topScore < oldScore) {
      topScore = oldScore;
   }
   document.getElementById("top-score").innerHTML = topScore;
}

// ---------------------------------Timer

// The function timer() calculates the value of timeleft and insert that value inside the element with the ID "time".
// The value os timeleft is updated every second, it starts with 30 (value present on the html) and decreases by 1 every second.
// When the timeleft is 0 a message saying "The End!" appears on the element with the ID "time", and ending music is played through 
// the function playEnd() and two buttons are shown below the words:
// one button will direct the user to the home pageXOffset, the other button will give the user an option to play again.


function timer() {
   var timeleft = 29;
   var downloadTimer = setInterval(function() {
      if (timeleft <= 0) {
         clearInterval(downloadTimer);
         playEnd();
         document.getElementById("time").innerHTML = "The End!";
         document.getElementById("go-home").innerHTML = `
                        <a href="index.html">
                            <button class="btn-options">Home</button>
                        </a> `;
         document.getElementById("play-again").innerHTML = `
                        <button class="btn-options" >Play Again</button> `;

      } else {
         document.getElementById("time").innerHTML = timeleft + " s";
      }
      timeleft -= 1;
   }, 1000);
}

// When the user clicks on the button with the ID "play-again" it will clear the score, it will run the function buildLayout and the function timer. 
// It will also remove the "play-again" and "go-home" buttons.

document.getElementById("play-again").addEventListener("click", function() {
   score = 0;
   document.getElementById("score").innerHTML = score;
   buildLayout(mode);
   timer();
   document.getElementById("play-again").innerHTML = "";
   document.getElementById("go-home").innerHTML = "";

});

// ---------------------------------Sound effects from https://mixkit.co/
// The functions playCorrect(), playWrong() and playEnd() will play the sounds when activated.

function playCorrect() {
   var snd = new Audio("assets/sounds/correct.wav");
   snd.play();
}

function playWrong() {
   var snd = new Audio("assets/sounds/wrong.mp3");
   snd.play();
}

function playEnd() {
   var snd = new Audio("assets/sounds/end.wav");
   snd.play();
}

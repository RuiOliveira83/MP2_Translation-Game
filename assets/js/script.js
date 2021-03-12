// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
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

    fetchWords();
}

// --------------------Select words from lists

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

function fetchWord() {

    return fetch('assets/word_list.txt')
        .then(response => response.text().then(text => text.split("\n")))
        .then(arr => {
            document.getElementById("word").innerHTML = arr[numr]
        });
}

// --------------------Select 4 different words from list in the correct language

function fetchOptions() {

    let urlList = ['assets/word_list_pt.txt', 'assets/word_list_se.txt', 'assets/word_list_fr.txt', 'assets/word_list_de.txt'];
    let url = 0;

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

let firstClick = 0;

document.body.addEventListener('click', function (evt) {



    checkAnswer(evt);

    firstClick = firstClick + 1;
    if (firstClick === 1) {
        let startTime;
        timer();

    }; //starts timer on firstClick

})

// ----------------------------Check answer

function checkAnswer(evt) {

    if (evt.target.id === 'option1') {
        if (numr === num1) {
            correctAnswer();
        } else {
            wrongAnswer();
        };
    }
    else if (evt.target.id === 'option2') {
        if (numr === num2) {
            correctAnswer();
        } else {
            wrongAnswer();
        };
    }
    else if (evt.target.id === 'option3') {
        if (numr === num3) {
            correctAnswer();
        } else {
            wrongAnswer();
        };
    }
    else if (evt.target.id === 'option4') {
        if (numr === num4) {
            correctAnswer();
        } else {
            wrongAnswer();
        };
    }
}

// ---------------------------------Score

function correctAnswer() {

    let timeLeft = parseInt(document.getElementById("time").innerText);
    if (timeLeft > 0) {
        console.log(parseInt(document.getElementById("time").innerText));
        oldScore = parseInt(document.getElementById("score").innerText);
        let score = oldScore + 5;

        document.getElementById("score").innerHTML = score;
        topScore();
        fetchWords();
        playCorrect();
    }
}




function wrongAnswer() {

    let timeLeft = parseInt(document.getElementById("time").innerText);
    if (timeLeft > 0) {

        oldScore = parseInt(document.getElementById("score").innerText);
        score = oldScore - 2;

        document.getElementById("score").innerHTML = score;
        fetchWords();
        playWrong()

    }

}

function playCorrect() {

    var snd = new Audio("assets/sounds/correct.wav");
    snd.play();
}

function playWrong() {

    var snd = new Audio("assets/sounds/wrong.mp3");
    snd.play();
}


function topScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    let topScore = parseInt(document.getElementById("top-score").innerText);
    if (topScore < oldScore) {
        topScore = oldScore;

    }

    document.getElementById("top-score").innerHTML = topScore;
}

function timer() {
    var timeleft = 30;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("time").innerHTML = "The End!";
            document.getElementById("go-home").innerHTML = `

                        <a href="index.html">
                            <button class="btn-options">Home</button>
                        </a>
                    `
            document.getElementById("play-again").innerHTML = `
                        <button class="btn-options" >Play Again</button> `


        } else {
            document.getElementById("time").innerHTML = timeleft + " s";
        }
        timeleft -= 1;
    }, 1000)
}

document.getElementById("play-again").addEventListener("click", function () {
    score = 0;
    document.getElementById("score").innerHTML = score;
    buildLayout(mode);
    timer();
    document.getElementById("play-again").innerHTML = "";
    document.getElementById("go-home").innerHTML = "";

});
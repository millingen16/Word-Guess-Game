var guessedAnswer = ["Tron", "Alien", "Footloose", "Highlander", "Spaceballs", "Willow", "Topgun", "Caddyshack", "Beetlejuice", "Commando", "Akira"]

var numGuessed;
var lettersGuessed = [];
var answerGuessed = [];
var numOfGuess = 10;
var gameWins = 0;
var gameLose = 0;
var remainingGuessedLetters = 0;
var guessedWord;
var isFinished = false;

function startGame() {
    guessedWord = guessedAnswer[Math.floor(Math.random() * guessedAnswer.length)];
    answerGuessed = [];
    for(var i=0; i<guessedWord.length; i++) {
        answerGuessed[i] = "_";
        console.log(guessedAnswer);
    }

    remainingGuessedLetters = numGuessed;
    lettersGuessed = [];

    document.getElementById("").src = "";
    document.getElementById("").style.color = "";
}

function guessTheLetterOfTheWord(letters) {
    if(lettersGuessed.indexOf(letters) === -1) {
        lettersGuessed.push(letters);
        if(answerGuessed.indexOf(letters) === -1) {
            numOfGuess--;
            if(numOfGuess <=2) {
                document.getElementById("").style.color.fontcolor = "";
            }
        } else {
            for (var i=0; i<guessedWord.length; i++) {
                if(letters === guessedWord[i]) {
                    answerGuessed[i] = letters;
                }
            }
        }
    }
};

function gameWinner() {
    if(answerGuessed.indexOf("_") === -1) {
        gameWins++;
        isFinished = true;
        if(guessedWord === "Tron") {
            document.getElementById("").src = "https://media.giphy.com/media/EZOGL7ZHOqf4s/giphy.gif";
        }else if(guessedWord === "Alien") {
            document.getElementById("").src = "https://media.giphy.com/media/xUA7b7v91cMT5sh9TO/giphy.gif";
        }else if(guessedWord === "Footloose") {
            document.getElementById("").src = "https://media.giphy.com/media/TIEyrFkz3FBe/giphy.gif";
        } else if(guessedWord === "Highlander") {
            document.getElementById("").src = "https://media.giphy.com/media/d79GcWET2roC4/giphy.gif";
        } else if(guessedWord === "Spaceballs") {
            document.getElementById("").src = "https://media.giphy.com/media/KIDQKA59Wl9YY/giphy.gif";
        } else if(guessedWord === "Willow") {
            document.getElementById("").src = "https://media.giphy.com/media/aTxuNKey7fjz2/giphy.gif";
        } else if(guessedWord === "Topgun") {
            document.getElementById("").src = "https://media.giphy.com/media/26AHCgWcYM1xSqMaA/giphy.gif";
        } else if(guessedWord === "Caddyshack") {
            document.getElementById("").src = "https://media.giphy.com/media/xUOwG43OJ9Mzf4exQQ/giphy.gif";
        } else if(guessedWord === "Beetlejuice") {
            document.getElementById("").src = "https://media.giphy.com/media/Rfeku3MGlfuPm/giphy.gif";
        } else if(guessedWord === "Commando") {
            document.getElementById("").src = "https://media.giphy.com/media/uByXeNqGGZvW0/giphy.gif";
        } else if(guessedWord === "Akira") {
            document.getElementById("").src = "https://media.giphy.com/media/3Z1kP6uFLMlyfuTA6A/giphy.gif";
        }
    }
};

function gameLooser() {
    if(numOfGuess <= 0) {
        gameLose++;
        isFinished = true;
        document.getElementById("").src = "https://media.giphy.com/media/3jIFmOGhMRtjW/giphy.gif";
    }
};

document.onkeypress = function(event) {
    if(isFinished) {
        startGame();
        isFinished = false;
    } else {
       if(event.keyCode >= 65 && event.keyCode <= 90) {
           guessTheLetterOfTheWord(); gameWinner(); gameLooser();
       } 
    }
};
startGame();
console.log(guessedWord);






















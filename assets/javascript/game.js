var answers = ["stone", "wood", "creeper", "enderman", "diamond", "pickaxe", "torch", "zombie", "dirt", "sword"];

var pickAWord = function() {
	var wordSel = answers[Math.floor(Math.random() * answers.length)];
	return wordSel;
};

wordSel = pickAWord();
console.log(wordSel);

function blankGen () {
	var answerArray = [];
	for (i = 0; i < wordSel.length; i++) {
	answerArray[i] = "_";
	};
	return answerArray;
}

function newGame () {
	pickAWord();
	wordSel=pickAWord();
	blankGen();
	answerArray=blankGen();
	lives = 10;
	remainingLetters = wordSel.length;
	guessArray = []
}

answerArray = blankGen();
console.log(answerArray);
var guessArray = [];
var remainingLetters = wordSel.length;
var lives = 10;
var wins = 0;

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(guess);

	if (guessArray.indexOf(guess) > -1){
		document.getElementById("alert").innerHTML = "That letter has already been guessed!"
	}

	else if (wordSel.indexOf(guess) > -1) {
		guessArray.push(guess);
		console.log(guessArray);
		document.getElementById("alert").innerHTML = " ";
		document.getElementById("guessed").innerHTML = guessArray.join (" ");
		for (x = 0; x < wordSel.length; x++) {
			if (wordSel[x] === guess) {
				answerArray[x] = guess;
				document.getElementById("word").innerHTML = answerArray.join(" ");
				remainingLetters--;
				console.log(remainingLetters);
				if (remainingLetters === 0) {
					document.getElementById("alert").innerHTML = "You Win!";
					wins++;
					document.getElementById("wins").innerHTML = wins;
					newGame();
				}
			}
		}
	}
	else if (wordSel.indexOf(guess) === -1) {
		guessArray.push(guess);
		document.getElementById("alert").innerHTML = " ";
		document.getElementById("word").innerHTML = answerArray.join (" ");
		document.getElementById("guessed").innerHTML = guessArray.join (" ");
		lives--;
		document.getElementById("guesses").innerHTML = lives;
			if(lives === 0) {
				document.getElementById("alert").innerHTML = "You Lose!";
				newGame();
			}
	}




};

	

var answers = ["stone", "wood", "creeper", "enderman", "diamond", "pickaxe", "torch", "zombie", "dirt", "sword"];

var pickAWord = function() {
	var wordSel = answers[Math.floor(Math.random() * answers.length)];
	return wordSel;
};

wordSel = pickAWord();
console.log(wordSel);

var lives = 10;

var wins = 0;

function blankGen () {
	var answerArray = [];
	for (i = 0; i < wordSel.length; i++) {
	answerArray[i] = "_";
	};
	return answerArray;
}
answerArray = blankGen();
console.log(answerArray);


var guessArray = [];

var lives = 10;

var wins = 0;

var remainingLetters = wordSel.length;

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(guess);

	if (lives === 0) {
		// document.getElementById("alert").innerHTML = "Game Over";
		// pickAWord();
		// wordSel = pickAWord()
		// blankGen();
		// answerArray = blankGen();
		
	}

	else if (guessArray.indexOf(guess) > -1) {
		// execute if guess is in the guessArray already
		console.log(guess);
		document.getElementById("alert").innerHTML = "Letter already guessed!";			
	}
	else if (wordSel.indexOf(guess) > -1) {
		// execute if guess is not already in the guessArray
		guessArray.push(guess);
		document.getElementById("word").innerHTML = answerArray.join(" ");
		document.getElementById("guessed").innerHTML = guessArray.join(" ")
		document.getElementById("alert").innerHTML = " ";
		for (x = 0; x < wordSel.length; x++) {
			if (wordSel[x] === guess) {
				answerArray[x] = guess;
				console.log(answerArray);
				document.getElementById("word").innerHTML = answerArray.join(" ");
				remainingLetters--;
			}
		}
	}

	else {
		lives--;
		console.log(lives);
		guessArray.push(guess);
		document.getElementById("guessed").innerHTML = guessArray.join(" ")
		document.getElementById("alert").innerHTML = " ";
			if (lives === 0) {
				document.getElementById("alert").innerHTML = "Game Over";
				document.getElementById("word").innerHTML = answerArray
				pickAWord();
				wordSel = pickAWord()
				blankGen();
				answerArray = blankGen();
			};
	}
};

	

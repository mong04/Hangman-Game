var answers = ["stone", "wood", "creeper", "enderman", "diamond", "pickaxe", "torch", "zombie", "dirt", "sword"];
var keyCodes = {
	65 : "a",
	66 : "b",
	67 : "c",
	68 : "d",
	69 : "e",
	70 : "f",
    71 : "g",
    72 : "h",
    73 : "i",
    74 : "j",
    75 : "k",
    76 : "l",
    77 : "m",
    78 : "n",
    79 : "o",
    80 : "p",
    81 : "q",
    82 : "r",
    83 : "s",
    84 : "t",
    85 : "u",
    86 : "v",
    87 : "w",
    88 : "x",
    89 : "y",
    90 : "z"
};
// Select random word from answers[]
var wordSel = answers[Math.floor(Math.random() * answers.length)];

var guessArray = [];

var lives = 10;

var wins = 0;

answerArray = [];

var remainingLetters = wordSel.length;

for (i = 0; i < wordSel.length; i++) {
	answerArray[i] = "_";
	};

document.addEventListener("keydown", function (e) {

	document.getElementById("word").innerHTML = answerArray.join(" ");
	
	console.log(wordSel);
	var guess = keyCodes[e.keyCode];
	// console.log(guess);

	if (lives === 0) {
		document.getElementById("alert").innerHTML = "Game Over";

	}

	else if (guessArray.indexOf(guess) > -1) {
		// execute if guess is in the guessArray already
		console.log(guess);
		document.getElementById("alert").innerHTML = "Letter already guessed!";			
	}
	else if (wordSel.indexOf(guess) > -1) {
		// execute if guess is not already in the guessArray
		guessArray.push(guess);
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

	else if (guessArray.indexOf(guess) !== -1) {
		lives--;
		console.log(lives);
		guessArray.push(guess);
		document.getElementById("guessed").innerHTML = guessArray.join(" ")
		document.getElementById("alert").innerHTML = " ";
	}

	else {
		lives--;
		console.log(lives);
		guessArray.push(guess);
		document.getElementById("guessed").innerHTML = guessArray.join(" ")
		document.getElementById("alert").innerHTML = " ";
	}
		

});



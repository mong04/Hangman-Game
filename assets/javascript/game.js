window.onload = function () {
// Create answers array
var answers = ["stone", "wood", "creeper", "enderman", "diamond", "pickaxe", "torch", "zombie", "dirt", "sword"];

// Grab random word from array for the game
var wordSel = answers[Math.floor(Math.random() * answers.length)];

// log selected word to the console
console.log(wordSel);

// Create blank array for "_" to display for length of word
var answerArray = [];
	
// For loop to determine how many "_" to fill array with
for (i = 0; i < wordSel.length; i++) {
	answerArray[i] = "_";
};
console.log(answerArray)
// Var to determine end-game
var remainingLetters = wordSel.length;

// While loop for game logic
while (remainingLetters > 0) {
	// console.log(answerArray.join(" "));
	document.getElementById('word').innerHTML = answerArray.join(" ");
	var guess = prompt("Guess a letter, or click Cancel to stop playing.");
	if (guess === null) {
		break;
	}
	else if (guess.length !==1) {
		alert("Please enter a single letter.");
	}
	else {
		for (x = 0; x < wordSel.length; x++) {
			if (wordSel[x] === guess){
				answerArray[x] = guess;
				remainingLetters--;
			}
		}
	}
}
alert(answerArray.join(" "));
alert("Good Job! The answer was " + wordSel);
}
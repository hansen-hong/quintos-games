(async () => { // wrapper

	let rand = Math.random() * 100;
	rand = Math.ceil(rand);

	let guess = -1;
	for (let i = 0; guess != rand; i++) {
		if (i > 7) {
			await alert("you ran out of guesses");
			break;
		}

		guess = await prompt("Guess a number 1 to 100");
		if (guess > 100 || guess < 1) {
			await alert("Invalid guess");
			i--;
		} else if (guess == rand) {
			await alert("You got it right!");
		} else if (guess < rand) {
			await alert('Your guess was too low');
		} else if (guess > rand) {
			await alert('Your guess was too high');
		}
	}
	exit();
})(); // end of wrapper

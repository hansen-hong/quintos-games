(async () => { // wrapper
	const log = console.log;

	let name = await prompt("Enter your name: ");

	if (!name) {
		playingGame = false;
	}

	let choice = -1;
	let msg = ''; // message
	let opt = [-1]; // options

	while (opt.length > 0) {

		if (choice == -1) {
			msg = name + ` was on a plane and it crashed, they surrvived with only five friends. They are left on an island with only food and water for 1 week. Then they saw a boat and a cave. What should they do?   : \n` +
				`0: Go look for help on the boat\n` +
				`1: Go in the cave`;
			opt = [0, 1];
		} else if (choice == 0) {
			msg = 'They find lots of food and water. What should they do? : \n' +
				'2: You take them to the island\n' +
				'3: Leave them and take the boat';
			opt = [2, 3];
		} else if (choice == 1) {
			msg = 'They find a box of treasure. What should they do? : \n' +
				'4: Take them with you \n' +
				'5: Open the box';
			opt = [4, 5];
		} else if (choice == 2) {
			msg = 'You take them to the island and then then you died because the foods are poisnous';
		} else if (choice == 3) {
			msg = 'Some pirates come in from nowhere and they shoot you and you die';

		} else if (choice == 4) {
			msg = 'you find a phone with max battery. You opened the phone and surprisingly there is wifi here. What should you do? : \n' +
				'6: Play video games \n' +
				'7: Ask for help';
			opt = [6, 7]
		} else if (choice == 5) {
			msg = 'You did not realize there was a snake behind you it sawllowed you. And YOU DIE';
		} else if (choice == 6) {
			msg = 'You forget to eat food due to extreme addiction to the game and YOU DIE';
		} else if (choice == 7) {
			msg = 'You found help and you got rescued. But in the middle of the trip the helicopter crashed. What should they do? : \n' +
				'8: pray to God \n' +
				'9: look for help';
			opt = [8, 9]
		} else if (choice == 8) {
			msg = 'God rescued you';
		} else if (choice == 9) {
			msg = 'You find no help and you die';
		}

		if (opt.length > 0) {
			choice = await prompt(msg);
		} else {
			await alert(msg);
			break;
		}

		log(opt);
		log(choice);

		if (opt.includes(Number(choice))) {
			// change next choice to the choice the user made
			// onnly if the choice was valid
			nextChoice = choice;
		} else {
			await alert('Invalid choice!');
		}
	}

	if (!playingGame) {
		await alert('Bye! Thanks for playing! (why did u leave? D= [im so angry now go ahead and leave my game])');
	} else {
		await alert('Bye! Thanks for playing!');
	}

})(); // end of wrapper

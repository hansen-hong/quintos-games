const log = console.log;

const hangman = [`
  +---+
  |   |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`];

let words = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buxom buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quips quiz quizzes quorum razzmatazz rhubarb rhythm scratch snazzy sphinx squawk staff strength stretch stronghold stymied subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth triphthong unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie`;


words = words.split(' ');

let random = Math.floor(Math.random() * words.length);
let word = words[random];
log(word); // don't look! no cheating! jk ;P

let lines = [];
for (let i = 0; i < word.length; i++) {
	lines.push('_'); // add something to array
}
// lines -> ['_', '_', '_', '_']

/* PART A: make a function to display the guess lines */

function displaylines() {
	let txt = '';
	for (let i = 0; i < word.length; i++) {
		txt += lines[i] + ' ';
	}
	return txt;
}

let wrongGuesses = 0;

async function startGame() {
	/* PART A: make the game loop and implement game logic */

	while (lines.includes('_')) {
		if (wrongGuesses > 6) {
			await alert("you got it wrong");
			return;
		}
		let guess = await prompt(hangman[wrongGuesses] + '\n' + displaylines());

		log(guess);

		if (guess == word) {
			break;
		}

		let wasCorrect = false;
		for (let i = 0; i < word.length; i++) {
			if (guess == word[i]) {
				lines[i] = guess;
				wasCorrect = true;
			}
		}
		if (wasCorrect == false) {
			wrongGuesses++;
		}
	} // end of while loop


	await alert("You got it right！" + word);
	// don't use the hangman yet!
	/* PART B: change one of your loops to a "for of" or "for in" loop */
	/* PART B: display the hangman in the prompt */

} // end of start game function

startGame();

const target =
	" .d88b. \n" +
	".8P  Y8.\n" +
	"88    88\n" +
	"88    88\n" +
	"'8b  d8'\n" +
	" 'Y88P' ";

/* PART A: change the values of x and y to be random */
// screen size is 80w x 30h
// target is 8w x 6h
// drawing starts from top left corner
// we want to draw the target within the bounds of the frame
// 80 screen width - 8 target width - 1 frame line = 71
// 30 screen height - 6 target height - 1 frame line = 23
let btn;
let times = [];

async function endGame() {
	let speeds = [];

	for (let i = 0; i < 4; i++) {
		speeds.push(times[i + 1] - times[i]);
	}
	console.log(speeds);

	let sum = 0;

	for (let i = 0; i < speeds.length; i++) {
		sum = sum + speeds[i];
	}

	let avg = sum / speeds.length;

	let fastest = speeds[0];
	let slowest = speeds[0];

	for (let i = 1; i < speeds.length; i++) {
		if (speeds[i] < fastest) {
			fastest = speeds[i];
		}
		if (speeds[i] > slowest) {
			slowest = speeds[i];
		}
	}

	await pc.alert("Your average time was: " + avg + "ms\nYour fastest time was: " + fastest + "ms\nYour slowest time was: " + slowest + "ms");
}

function btnClick() {
	btn.erase();

	times.push(Date.now());
	console.log(times);

	if (times.length < 5) {
		createBtn(); // create another button
	} else {
		endGame();
	}
}

function createBtn() {
	// Math.random() returns a number between 0 and 1
	let x = Math.random() * 71;
	let y = Math.random() * 23;
	// Math.ceil() rounds input number up to the higher integer
	x = Math.ceil(x);
	y = Math.ceil(y);
	btn = pc.button(target, x, y, btnClick);
}

async function startGame() {
	await pc.alert('Click the thingy as quick as you can!');
	createBtn(); // create first button
}
startGame();

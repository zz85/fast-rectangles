/* Globals */

var WIDTH = 1024;
var HEIGHT = 768;
var timeStart;
var total = 0;
var rafs = 0;
var rects = 0;

/* Implement your draw function !! */

function run() {
	rafs++
	var then = performance.now();
	draw();
	var now = performance.now();
	var lapsed = now - timeStart;
	total += now - then;

	if (lapsed < 5000) {
		requestAnimationFrame(run);
	} else {
		console.timeEnd('run');
		console.log('Number of Rafs', rafs);
		console.log('Time per Rafs', (total / rafs).toFixed(2), 'ms');

		console.log('Total Rects', rects);
		console.log('Rects / second', (rects / total * 1000).toFixed(2));

		console.log('Rects / 16.67ms', (rects * 1000  / total / 60).toFixed(2));
		console.log('Done!!');
	}
}

function start() {
	console.log('Test start!');
	timeStart = performance.now();
	console.time('run');

	run();
}
/* Globals */

var WIDTH = 1024;
var HEIGHT = 768;
var timeStart;
var total = 0;
var rafs = 0;
var rects = 0;
var results = document.createElement('pre');
results.style.cssText = 'position: fixed; top: 10px; left: 10px; font-size: 10px; z-index: 999; background: rgba(255, 255, 255, 0.5); text-align: left; color: #000;';

/* Implement your draw function !! */

function log() {
	console.log.apply(console, arguments);

	results.innerHTML += Array.from(arguments).join('\t') + '\n';
}


function run() {
	rafs++
	var then = performance.now();
	draw();
	var now = performance.now();
	var lapsed = now - timeStart;
	total += now - then;
	results.innerHTML += '.';

	if (lapsed < 5000) {
		requestAnimationFrame(run);
	} else {
		console.timeEnd('run');
		log('\nNumber of Rafs', rafs);
		log('Time per Rafs', (total / rafs).toFixed(2), 'ms');

		log('Total Rects', rects);
		log('Rects / second', (rects / total * 1000).toFixed(2));

		log('Rects / 16.67ms', (rects * 1000  / total / 60).toFixed(2));
		log('Done!!');
	}
}

function stats() {
	// print some stats, see
	// http://codeflow.org/entries/2016/feb/10/webgl_debug_renderer_info-extension-survey-results/
	// https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info

	var canvas = document.createElement('canvas');
	var gl = canvas.getContext('webgl');
	var extension = gl.getExtension('WEBGL_debug_renderer_info');
	if(extension != null){
		var gpu = extension.UNMASKED_RENDERER_WEBGL;
		var vendor = extension.UNMASKED_VENDOR_WEBGL;

		var vendor = gl.getParameter(vendor);
		var renderer = gl.getParameter(gpu);

		log('Vendor: ' + vendor);
		log('GPU: ' + renderer);
	}

	var renderer = gl.getParameter(gl.RENDERER);
	var version = gl.getParameter(gl.VERSION);
	var glsl = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);

	log('Renderer: ' + renderer);
	log('Version: ' + version);
	log('GLSL: ' + glsl);
}

function start() {
	document.body.appendChild(results);
	stats();

	log('Test started!');

	timeStart = performance.now();
	console.time('run');
	run();
}
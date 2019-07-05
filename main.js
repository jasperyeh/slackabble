// global variables :(
var output = '';
var outputCopy = '';

// Translate text to Scrabble emojis
function slackabble() {
	// Save input string, make string all lowercase and split into an array of chars
	var str = document.getElementById('input').value.toLowerCase();
	var chars = str.split('');

	// Check if string only consists of letters and whitespace
	// Alert and refresh page if other characters are found
	if (!/^[a-zA-Z\s]*$/.test(str)) {
		alert('Please only enter letters and spaces.');
		location.reload();
	} else {
		getOutput(str, chars);
	}
}

function getOutput(str, chars) {
	// Translate chars into Scrabble emoji text
	for (var i = 0; i < chars.length; i++) {
		if (chars[i] == ' ') {
			output += ':scrabble-blank:';
		} else {
			output += `:scrabble-${chars[i]}:`;
		}
	}

	// Display output to HTML
	document.getElementById('og-text').innerHTML = '"' + str.toUpperCase() + '"';
	document.getElementById('output').innerHTML = output;
	// document.getElementById('copy').innerHTML = 'Copy to clipboard';

	// Clear textbox and reset output
	document.getElementById('input').value = '';
	outputCopy = output;
	output = '';
}

function copy() {
	// Copy text to clipboard
	// https://stackoverflow.com/a/46118025
	var temp = document.createElement('input');
	document.body.appendChild(temp);
	temp.setAttribute('value', outputCopy);
	temp.select();
	document.execCommand('copy');
	document.body.removeChild(temp);
	// document.getElementById('copy').innerHTML = 'Copied to clipboard!';
	outputCopy = '';
}
// Press enter to click button
// https://stackoverflow.com/a/155263
document.getElementById('input').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('button').click();
	}
});

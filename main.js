// Translate text to Scrabble emojis
function scrabbler() {
	// Save input string, make string all lowercase and split into an array of chars
	var str = document.getElementById('input').value.toLowerCase();
	var chars = str.split('');
	var output = '';

	// Check if string only consists of letters and whitespace
	// Alert and refresh page if other characters are found
	if (!/^[a-zA-Z\s]*$/.test(str)) {
		alert('Please only enter letters and spaces.');
		location.reload();
	}

	// Translate chars into Scrabble emoji text
	for (var i = 0; i < chars.length; i++) {
		output += `:scrabble-${chars[i]}:`;
	}
	// Display output to HTML
	document.getElementById('output').innerHTML = output;

	// Clear textbox
	document.getElementById('input').value = '';

	var button = document.createElement('button');
	button.innerHTML = 'Copy to clipboard';
	// where do we want to have the button to appear?
	// you can append it to another element just by doing something like
	// document.getElementById('foobutton').appendChild(button);
	document.body.appendChild(button);

	button.onclick = function() {
		copy(output);
		document.body.removeChild(button);
	};
}

function copy(output) {
	// Copy text to clipboard
	// https://stackoverflow.com/a/46118025
	var temp = document.createElement('input');
	document.body.appendChild(temp);
	temp.setAttribute('value', output);
	temp.select();
	document.execCommand('copy');
	document.body.removeChild(temp);

	/* Alert the copied text */
	alert('Copied to clipboard!');
	// document.getElementById('button').body.removeChild(button);
}
// Press enter to click button
// https://stackoverflow.com/a/155263
document.getElementById('input').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('button').click();
	}
});

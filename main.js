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

	for (var i = 0; i < chars.length; i++) {
		output += `:scrabble-${chars[i]}:`;
	}
	// Display output to HTML
	document.getElementById('output').innerHTML = output;
	// Clear textbox
	document.getElementById('input').value = '';
}

// Press enter to click button
// https://stackoverflow.com/a/155263
document.getElementById('input').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('button').click();
	}
});

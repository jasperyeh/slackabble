// Press enter to click on button
// https://stackoverflow.com/a/155263
document.getElementById('input').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('button').click();
	}
});

// Translate text to Scrabble emojis
function scrabbler() {
	// Save input string, make string all lowercase and split into an array of chars
	var str = document.getElementById('input').value.toLowerCase();
	var chars = str.split('');

	// Check if string only consists of letters and whitespace
	// Alert and refresh page if other characters are found
	if (!/^[a-zA-Z\s]*$/.test(str)) {
		alert('Please only enter letters and spaces.');
		location.reload();
	}
	console.log(str);

	// Clear textbox
	document.getElementById('input').value = '';
}

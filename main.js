// Press enter to click on button
// https://stackoverflow.com/a/155263
document.getElementById('input').addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('button').click();
	}
});

function getInput() {
	var str = document.getElementById('input').value;
	console.log(str);

	// Clear textbox
	document.getElementById('input').value = '';
}

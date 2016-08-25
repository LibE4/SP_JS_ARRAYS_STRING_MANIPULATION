function reversal(str) {
	displayElement.innerHTML += "<br>Reverse String: " + str.split("").reverse().join("");
}

function alphabits(str) {
	displayElement.innerHTML += "<br>Alphabits of String: " + str.split("").sort().join("");
}

function palindrome(str) {
	var reversalStr = str.split("").reverse().join("");
	if (str === reversalStr) {
		displayElement.innerHTML += "<br>Your string is a palidrome";
	}
}

function processInput() {
	testString = inputElement.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}

var inputElement = document.getElementById("inputText");
var btn = document.getElementById("btn");
var displayElement = document.getElementById("display");
var testString = "";

inputElement.addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode == 13) {
		processInput();
  }
})
btn.addEventListener("click", function(event){
	processInput();
})
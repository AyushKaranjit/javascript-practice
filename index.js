// script.ts
var count = 0;
count += 1;
for (var i = 0; i < 10; i++) {
    count += i;
}
console.log(count);
var testest = "BOOOOOOOOO";
console.log(testest);
// Declare a variable
var greeting = "Hello, World!";
// Function to display a greeting
function displayGreeting() {
    console.log(greeting);
}
// Call the function to display the greeting
displayGreeting();
// Adding event listeners to buttons
var buttonOne = document.getElementById("one");
var buttonTwo = document.getElementById("two");
var buttonThree = document.getElementById("three");
// Function to handle button clicks
function handleButtonClick(buttonName) {
    console.log("Button ".concat(buttonName, " was clicked!"));
}
// Add click event listeners
buttonOne.addEventListener("click", function () { return handleButtonClick("One"); });
buttonTwo.addEventListener("click", function () { return handleButtonClick("Two"); });
buttonThree.addEventListener("click", function () { return handleButtonClick("Three"); });

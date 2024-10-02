// script.ts

let count: number = 0;
count += 1;
for (let i = 0; i < 10; i++) {
  count += i;
}
console.log(count);

const testest: string = "BOOOOOOOOO";
console.log(testest);

// Declare a variable
let greeting: string = "Hello, World!";

// Function to display a greeting
function displayGreeting(): void {
  console.log(greeting);
}

// Call the function to display the greeting
displayGreeting();

// Adding event listeners to buttons
const buttonOne = document.getElementById("one") as HTMLButtonElement;
const buttonTwo = document.getElementById("two") as HTMLButtonElement;
const buttonThree = document.getElementById("three") as HTMLButtonElement;

// Function to handle button clicks
function handleButtonClick(buttonName: string): void {
  console.log(`Button ${buttonName} was clicked!`);
}

// Add click event listeners
buttonOne.addEventListener("click", () => handleButtonClick("One"));
buttonTwo.addEventListener("click", () => handleButtonClick("Two"));
buttonThree.addEventListener("click", () => handleButtonClick("Three"));

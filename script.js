// Part 1: JavaScript Basics
// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const favoriteNumbers = [1, 5, 10];
const user = { name: "Jane Doe", age: 28 };

console.log("Name:", name, "(Type:", typeof name, ")");
console.log("Age:", age, "(Type:", typeof age, ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent, ")");
console.log("Favorite numbers:", favoriteNumbers, "(Type:", typeof favoriteNumbers, ")");
console.log("User:", user, "(Type:", typeof user, ")");

// Operators
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
const operator = prompt("Choose an operation (+, -, *, /): ");

switch (operator) {
  case "+":
    console.log(`Result: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Result: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Result: ${num1 * num2}`);
    break;
  case "/":
    console.log(`Result: ${num1 / num2}`);
    break;
  default:
    console.log("Invalid operator entered.");
}

// Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

const message = greetUser("John");
document.write(message);

// Part 2: JavaScript Control Structures
// If Statements
const userAge = parseInt(prompt("Please enter your age: "));
if (userAge >= 18) {
  document.write("<p>Congratulations! You are eligible to vote.</p>");
} else {
  document.write("<p>Sorry, you are not yet eligible to vote.</p>");
}

// Loops
document.write("<ol>");
for (let i = 1; i <= 10; i++) {
  document.write(`<li>${i}</li>`);
}
document.write("</ol>");

// Part 3: Introduction to the DOM
// Creating HTML Structure
const heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

const div = document.querySelector("#dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
div.appendChild(newParagraph);
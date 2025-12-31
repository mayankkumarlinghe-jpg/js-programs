// ===============================
// JavaScript Basics in One Program
// ===============================

// 1. Variables
var name = "Alice";
let age = 20;
const country = "India";

// 2. Data Types
let isStudent = true;
let score = 85.5;
let hobbies = ["Reading", "Coding", "Music"];
let person = {
  firstName: "Alice",
  lastName: "Johnson"
};

// 3. Output
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// 4. Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Multiplication:", a * b);

// 5. Conditional Statements
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 6. Loops
console.log("Hobbies:");
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

// 7. Functions
function greet(userName) {
  return "Hello, " + userName + "!";
}

console.log(greet(name));

// 8. Arrow Function
const square = (num) => num * num;
console.log("Square of 4:", square(4));

// 9. While Loop
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}

// 10. Basic Math
console.log("Random number:", Math.random());

// 11. String Methods
let message = "JavaScript is fun";
console.log(message.toUpperCase());
console.log(message.length);

// 12. Array Methods
hobbies.push("Gaming");
console.log("Updated hobbies:", hobbies);

// 13. Object Access
console.log("First Name:", person.firstName);

// End of Program
console.log("=== End of JavaScript Basics Program ===");

// Comprehensive JavaScript Conditional Statements Program

// Section 1: Basic if Statement
console.log("=== 1. Basic if Statement ===");
// Executes code only if condition is true

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Simple condition with comparison
let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");
}

// Boolean direct check
let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for umbrella."); // This will print
}

// Section 2: if-else Statement
console.log("\n=== 2. if-else Statement ===");

let score = 75;
if (score >= 60) {
  console.log("You passed the exam!");
} else {
  console.log("You failed. Better luck next time.");
}

// Multiple conditions
let time = 14; // 24-hour format
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// Section 3: else if Chain
console.log("\n=== 3. else if Chain ===");

let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+ (Excellent)");
} else if (marks >= 80) {
  console.log("Grade: A (Very Good)");
} else if (marks >= 70) {
  console.log("Grade: B (Good)");
} else if (marks >= 60) {
  console.log("Grade: C (Average)");
} else {
  console.log("Grade: F (Fail)");
}

// Section 4: Nested if Statements
console.log("\n=== 4. Nested if ===");

let username = "admin";
let password = "secret123";
let role = "superadmin";

if (username === "admin") {
  if (password === "secret123") {
    console.log("Login successful!");
    if (role === "superadmin") {
      console.log("Welcome, Super Administrator!");
    } else {
      console.log("Welcome, Regular Admin.");
    }
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Unknown username.");
}

// Section 5: Logical Operators (&&, ||, !)
console.log("\n=== 5. Logical Operators ===");

let income = 50000;
let creditScore = 700;
let hasJob = true;

// AND (&&) - all must be true
if (income > 40000 && creditScore > 650 && hasJob) {
  console.log("Loan approved!");
} else {
  console.log("Loan denied.");
}

// OR (||) - at least one true
let hasLicense = false;
let hasPermit = true;
if (hasLicense || hasPermit) {
  console.log("You can drive.");
} else {
  console.log("Driving not allowed.");
}

// NOT (!)
let isHoliday = false;
if (!isHoliday) {
  console.log("Workday: Go to office.");
}

// Combined
let weather = "sunny";
let day = "Saturday";

if ((weather === "sunny" || weather === "cloudy") && day === "Saturday") {
  console.log("Perfect day for a picnic!");
}

// Section 6: Ternary Operator (Conditional Expression)
console.log("\n=== 6. Ternary Operator ? : ===");
// Short form of simple if-else

let isAdult = age >= 18 ? "Adult" : "Minor";
console.log("Category:", isAdult);

let price = 100;
let discount = price > 80 ? 10 : 5;
console.log(`Discount: ${discount}%`);

let status = score >= 60 ? "Pass" : "Fail";
console.log("Exam Status:", status);

// Nested ternary (use sparingly for readability)
let grade = marks >= 90 ? "A+" :
            marks >= 80 ? "A" :
            marks >= 70 ? "B" : "C";
console.log("Nested Ternary Grade:", grade);

// Section 7: switch-case Statement
console.log("\n=== 7. switch-case Statement ===");

let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day:", dayName);

// Without break (fall-through)
console.log("\nWeekend check with fall-through:");
let dayType = dayNumber;
switch (dayType) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid");
}

// switch with string
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "pear":
    console.log("This is a pome fruit.");
    break;
  case "banana":
    console.log("This is a berry.");
    break;
  default:
    console.log("Unknown fruit type.");
}

// Section 8: Truthy and Falsy Values
console.log("\n=== 8. Truthy & Falsy ===");

let values = [false, 0, "", null, undefined, NaN, "hello", 42, [], {}];

values.forEach(val => {
  if (val) {
    console.log(`${JSON.stringify(val)} is TRUTHY`);
  } else {
    console.log(`${JSON.stringify(val)} is FALSY`);
  }
});

// Section 9: Practical Real-World Examples
console.log("\n=== 9. Practical Examples ===");

// Example 1: BMI Calculator
let weight = 70; // kg
let height = 1.75; // meters
let bmi = weight / (height * height);

console.log(`BMI: ${bmi.toFixed(2)}`);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal weight");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// Example 2: Simple Login System
function login(user, pass) {
  return (user === "admin" && pass === "12345") ? "Access Granted" :
         (user === "guest" && pass === "") ? "Guest Access" :
         "Access Denied";
}
console.log(login("admin", "12345"));
console.log(login("guest", ""));
console.log(login("hacker", "pass"));

// Example 3: Traffic Light System
let light = "green";
switch (light) {
  case "green": console.log("Go!"); break;
  case "yellow": console.log("Slow down"); break;
  case "red": console.log("Stop!"); break;
  default: console.log("Invalid light");
}

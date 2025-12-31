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

function login(user, pass) {
  return (user === "admin" && pass === "12345") ? "Access Granted" :
         (user === "guest" && pass === "") ? "Guest Access" :
         "Access Denied";
}
console.log(login("admin", "12345"));
console.log(login("guest", ""));
console.log(login("hacker", "pass"));


let light = "green";
switch (light) {
  case "green": console.log("Go!"); break;
  case "yellow": console.log("Slow down"); break;
  case "red": console.log("Stop!"); break;
  default: console.log("Invalid light");
}

// This program focuses exclusively on Arrow Functions (=>)

// Section 1: Basic Syntax Variations
console.log("=== 1. Arrow Function Syntax Variations ===");

// 1.1 With parameters and block body
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Alice");

// 1.2 Single parameter - parentheses optional
const upperCase = str => {
  return str.toUpperCase();
};
console.log("javascript ->", upperCase("javascript"));

// 1.3 No parameters - must use empty parentheses
const sayHi = () => {
  console.log("Hi from arrow function!");
};
sayHi();

// 1.4 Multiple parameters
const add = (a, b) => {
  return a + b;
};
console.log("15 + 25 =", add(15, 25));

// Section 2: Concise Body & Implicit Return
console.log("\n=== 2. Concise Body (Implicit Return) ===");

// When body is a single expression, {} and return are optional
const multiply = (x, y) => x * y;
console.log("8 * 7 =", multiply(8, 7));

const square = num => num * num;
console.log("Square of 9:", square(9));

const getMessage = name => `Welcome back, ${name}!`;
console.log(getMessage("Bob"));

const isEven = n => n % 2 === 0;
console.log("10 is even?", isEven(10));
console.log("7 is even?", isEven(7));

// Returning object literal - wrap in parentheses
const createPerson = (name, age) => ({ name: name, age: age });
console.log("Created person:", createPerson("Charlie", 30));

// Section 3: Arrow Functions vs Regular Functions - Key Differences
console.log("\n=== 3. this Binding Behavior ===");

// Regular function: 'this' depends on how function is called
const regularObj = {
  name: "Regular",
  sayName: function() {
    console.log("Regular this.name:", this.name);
    const inner = function() {
      console.log("Inner this.name:", this.name); // undefined (this lost)
    };
    inner();
  }
};
regularObj.sayName();

// Arrow function: 'this' is lexically bound (inherits from outer scope)
const arrowObj = {
  name: "Arrow",
  sayName: () => {
    console.log("Arrow this.name:", this.name); // undefined (this is global/window)
  },
  sayNameCorrect: function() {
    console.log("Correct this.name:", this.name);
    const innerArrow = () => {
      console.log("Inner arrow this.name:", this.name); // inherits from sayNameCorrect
    };
    innerArrow();
  }
};
arrowObj.sayName();           // undefined
arrowObj.sayNameCorrect();    // Works correctly

// Practical use: in callbacks where we want to preserve 'this'
const counter = {
  count: 0,
  increment: function() {
    setTimeout(() => {
      this.count++;
      console.log("Count (arrow):", this.count);
    }, 1000);
  },
  incrementWrong: function() {
    setTimeout(function() {
      this.count++; // 'this' is not counter here
      console.log("Count (regular):", this.count); // NaN or error
    }, 1000);
  }
};
// counter.increment();      // Uncomment to see working example
// counter.incrementWrong(); // Would not work as expected

// Section 4: Arrow Functions in Array Methods
console.log("\n=== 4. Arrow Functions with Array Methods ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array:", sum);

// forEach
console.log("Printing with forEach:");
numbers.forEach(n => console.log(`Number: ${n}`));

// sort (descending)
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDesc);

// Section 5: Limitations of Arrow Functions
console.log("\n=== 5. Limitations ===");

// 5.1 No 'arguments' object
const regularArgs = function() {
  console.log("Regular arguments:", arguments);
};
regularArgs(1, 2, 3);

const arrowArgs = () => {
  // console.log("Arrow arguments:", arguments); // ReferenceError
};
// arrowArgs(1, 2, 3);

// Use rest parameters instead
const arrowWithRest = (...args) => {
  console.log("Arrow with rest args:", args);
};
arrowWithRest("a", "b", "c");

// 5.2 Cannot be used as constructors
// const BadConstructor = () => {};
// new BadConstructor(); // TypeError

// 5.3 Not hoisted (function expressions aren't either)
greetArrow(); // ReferenceError
const greetArrow = () => console.log("Hello from arrow");

// Section 6: Practical Real-World Examples
console.log("\n=== 6. Practical Arrow Function Examples ===");

// Example 1: Simple calculator object
const calc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error")
};

console.log("Calculator results:");
console.log("10 + 5 =", calc.add(10, 5));
console.log("20 - 8 =", calc.subtract(20, 8));
console.log("6 * 7 =", calc.multiply(6, 7));
console.log("15 / 3 =", calc.divide(15, 3));

// Example 2: Data transformation pipeline
const users = [
  { name: "alice", age: 25 },
  { name: "bob", age: 17 },
  { name: "charlie", age: 30 },
  { name: "diana", age: 16 }
];

const adultUserNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase())
  .sort((a, b) => a.localeCompare(b));

console.log("Adult user names (uppercase, sorted):", adultUserNames);

// Example 3: Event listener style (common in frontend)
const buttonSim = {
  clicks: 0,
  handleClick: function() {
    // Simulate adding event listener with arrow to preserve 'this'
    const listener = () => {
      this.clicks++;
      console.log(`Button clicked ${this.clicks} times`);
    };
    // Simulate calling listener
    listener();
    listener();
  }
};
buttonSim.handleClick();

// Example 4: Higher-order function returning arrow
const createMultiplier = factor => value => value * factor;

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("Triple 5 =", triple(5));
console.log("Quadruple 7 =", quadruple(7));

// Example 5: Async arrow function (common with promises/fetch)
const fetchDataSim = async () => {
  console.log("Fetching data...");
  // Simulate async work
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received!"), 500);
  });
};
// fetchDataSim().then(console.log); // Uncomment to see async behavior

// Section 7: Best Practices Summary
console.log("\n=== 7. Best Practices for Arrow Functions ===");
console.log("Use arrow functions when:");
console.log("  • You need lexical 'this' (callbacks, object methods)");
console.log("  • Writing short, concise callbacks (map, filter, etc.)");
console.log("  • Creating simple utility functions");
console.log("Avoid arrow functions when:");
console.log("  • You need 'arguments' object");
console.log("  • Defining object methods that rely on dynamic 'this'");
console.log("  • Creating constructors or generators");



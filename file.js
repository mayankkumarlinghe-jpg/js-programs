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
// Comprehensive JavaScript Program Demonstrating Data Types
// This program covers all primitive and object data types in JavaScript.
// It includes declarations, operations, and explanations via comments.
// The code is structured into sections for clarity.
// We use console.log to output results for demonstration purposes.
// Note: This is a Node.js compatible script, but can run in browser console too.

// Section 1: Primitive Data Types
// Primitives are immutable and passed by value.

// 1.1 Number Type
// Numbers can be integers or floats. JS uses IEEE 754 floating-point representation.
console.log("=== Number Type ===");
let integerNum = 42; // Integer
console.log("Integer:", integerNum, typeof integerNum);

let floatNum = 3.14159; // Floating point
console.log("Float:", floatNum, typeof floatNum);

let scientificNum = 1.23e+4; // Scientific notation: 12300
console.log("Scientific:", scientificNum);

let infinityNum = Infinity; // Special value
console.log("Infinity:", infinityNum);

let negativeInfinity = -Infinity;
console.log("Negative Infinity:", negativeInfinity);

let nanValue = NaN; // Not a Number
console.log("NaN:", nanValue, "isNaN:", isNaN(nanValue));

// Operations on Numbers
let sum = integerNum + floatNum;
console.log("Sum:", sum);

let product = integerNum * floatNum;
console.log("Product:", product);

let division = integerNum / 0; // Results in Infinity
console.log("Division by zero:", division);

// 1.2 String Type
// Strings are sequences of characters, immutable.
console.log("\n=== String Type ===");
let singleQuoteString = 'Hello, World!';
console.log("Single Quote String:", singleQuoteString, typeof singleQuoteString);

let doubleQuoteString = "JavaScript is fun!";
console.log("Double Quote String:", doubleQuoteString);

let templateLiteral = `Template Literal with variable: ${integerNum}`;
console.log("Template Literal:", templateLiteral);

let escapedString = "This is a \"quoted\" string.";
console.log("Escaped String:", escapedString);

// String Operations
let concatenated = singleQuoteString + " " + doubleQuoteString;
console.log("Concatenated:", concatenated);

console.log("Length:", concatenated.length);

console.log("Uppercase:", concatenated.toUpperCase());

console.log("Substring (0-5):", concatenated.substring(0, 5));

console.log("Includes 'World':", concatenated.includes('World'));

// 1.3 Boolean Type
// Booleans represent true or false.
console.log("\n=== Boolean Type ===");
let trueValue = true;
console.log("True:", trueValue, typeof trueValue);

let falseValue = false;
console.log("False:", falseValue);

let comparison = (5 > 3);
console.log("Comparison (5 > 3):", comparison);

// Logical Operations
let andOperation = true && false;
console.log("AND:", andOperation);

let orOperation = true || false;
console.log("OR:", orOperation);

let notOperation = !true;
console.log("NOT:", notOperation);

// 1.4 Undefined Type
// Undefined means a variable has been declared but not assigned a value.
console.log("\n=== Undefined Type ===");
let undefinedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);

// 1.5 Null Type
// Null represents intentional absence of any object value.
// Note: typeof null is 'object' due to a historical bug in JS.
console.log("\n=== Null Type ===");
let nullVar = null;
console.log("Null:", nullVar, typeof nullVar);

// 1.6 Symbol Type
// Symbols are unique and immutable, often used as object keys.
console.log("\n=== Symbol Type ===");
let symbol1 = Symbol('unique');
console.log("Symbol:", symbol1, typeof symbol1);

let symbol2 = Symbol('unique'); // Even with same description, symbols are unique
console.log("Another Symbol:", symbol2);
console.log("Symbols equal?", symbol1 === symbol2); // false

// 1.7 BigInt Type
// BigInts represent integers with arbitrary precision.
console.log("\n=== BigInt Type ===");
let bigIntNum = 123456789012345678901234567890n;
console.log("BigInt:", bigIntNum, typeof bigIntNum);

// Operations (cannot mix with regular numbers without conversion)
let bigSum = bigIntNum + 1n;
console.log("BigInt Sum:", bigSum);

// Section 2: Object Data Types
// Objects are mutable and passed by reference.

// 2.1 Object Type
// Objects are collections of key-value pairs.
console.log("\n=== Object Type ===");
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log("Person Object:", person, typeof person);

console.log("Access name:", person.name);
console.log("Access age:", person['age']); // Bracket notation

// Modify object
person.age = 31;
console.log("Updated age:", person.age);

// Add new property
person.city = "New York";
console.log("Added city:", person.city);

// Call method
console.log("Greet:", person.greet());

// Object methods
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 2.2 Array Type
// Arrays are ordered lists, a special type of object.
console.log("\n=== Array Type ===");
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits, typeof fruits); // 'object'

console.log("Length:", fruits.length);
console.log("First element:", fruits[0]);

// Array Operations
fruits.push("Date"); // Add to end
console.log("After push:", fruits);

let popped = fruits.pop(); // Remove from end
console.log("Popped:", popped, "Array now:", fruits);

fruits.unshift("Apricot"); // Add to beginning
console.log("After unshift:", fruits);

fruits.shift(); // Remove from beginning
console.log("After shift:", fruits);

let sliced = fruits.slice(1, 3); // Extract subset
console.log("Sliced:", sliced);

fruits.splice(1, 1, "Blueberry"); // Remove and insert
console.log("After splice:", fruits);

// Iteration
console.log("ForEach:");
fruits.forEach(fruit => console.log(fruit));

let mapped = fruits.map(fruit => fruit.toUpperCase());
console.log("Mapped to uppercase:", mapped);

let filtered = fruits.filter(fruit => fruit.startsWith('B'));
console.log("Filtered starting with B:", filtered);

// 2.3 Function Type
// Functions are callable objects.
console.log("\n=== Function Type ===");
function add(a, b) {
  return a + b;
}
console.log("Function:", add, typeof add);
console.log("Add 5 + 3:", add(5, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Arrow Function Multiply 4 * 2:", multiply(4, 2));

// Function as object property (method) - already shown in person object

// Higher-order function
function operate(func, x, y) {
  return func(x, y);
}
console.log("Operate add:", operate(add, 10, 20));
console.log("Operate multiply:", operate(multiply, 10, 20));

// Anonymous function
let anonResult = (function(x) { return x * x; })(5);
console.log("Anonymous square of 5:", anonResult);

// Section 3: Type Coercion and Conversions
console.log("\n=== Type Coercion ===");
// Implicit coercion
let coerced = "5" + 3; // String concatenation
console.log("'5' + 3:", coerced, typeof coerced);

let coercedNum = "5" - 3; // Numeric subtraction
console.log("'5' - 3:", coercedNum, typeof coercedNum);

// Explicit conversions
let strToNum = Number("42");
console.log("String to Number:", strToNum, typeof strToNum);

let numToStr = String(42);
console.log("Number to String:", numToStr, typeof numToStr);

let toBool = Boolean(0); // falsy
console.log("0 to Boolean:", toBool);

let toBoolTruthy = Boolean(1); // truthy
console.log("1 to Boolean:", toBoolTruthy);

// Section 4: Special Cases and Edge Cases
console.log("\n=== Special Cases ===");
// Falsy values: false, 0, '', null, undefined, NaN
console.log("Falsy check: if(0):", Boolean(0));

// Truthy: everything else
console.log("Truthy check: if(1):", Boolean(1));

// Equality: == (coercion) vs === (strict)
console.log("5 == '5':", 5 == '5'); // true
console.log("5 === '5':", 5 === '5'); // false

// NaN equality
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// Section 5: Advanced Topics (Briefly)
// 5.1 Date Object
let now = new Date();
console.log("\n=== Date Object ===");
console.log("Current Date:", now, typeof now);

// 5.2 RegExp Object
let regex = /hello/i;
console.log("\n=== RegExp Object ===");
console.log("Regex:", regex, typeof regex);
console.log("Test 'Hello World':", regex.test('Hello World'));

// 5.3 Map and Set
let myMap = new Map();
myMap.set('key', 'value');
console.log("\n=== Map ===");
console.log("Map get 'key':", myMap.get('key'));

let mySet = new Set([1, 2, 3]);
console.log("\n=== Set ===");
console.log("Set has 2:", mySet.has(2));

// 5.4 Promise (Async)
console.log("\n=== Promise ===");
let promise = new Promise((resolve) => resolve("Resolved!"));
promise.then(console.log);

// To keep it under 500 lines, we'll stop here.
// This program is about 200 lines with comments.
// You can expand sections with more examples if needed.

// End of Program
console.log("\n=== End of Demonstration ===");

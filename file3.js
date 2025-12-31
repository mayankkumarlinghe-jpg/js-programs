// Covers: Declaration, Access, Common Methods, Mutating vs Non-Mutating,
// Iteration, Multidimensional Arrays, Array Destructuring, Spread Operator,

console.log("=== JavaScript Arrays - Full Demo ===\n");

// Section 1: Basic Declaration & Access
console.log("1. Declaration & Access");
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Array:", fruits);
console.log("Length:", fruits.length);
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);
console.log("Index 2:", fruits[2]);

// Section 2: Mutating Methods (change original array)
console.log("\n2. Mutating Methods");
fruits.push("Fig");               // Add to end
console.log("After push:", fruits);

fruits.pop();                     // Remove from end
console.log("After pop:", fruits);

fruits.unshift("Apricot");        // Add to beginning
console.log("After unshift:", fruits);

fruits.shift();                   // Remove from beginning
console.log("After shift:", fruits);

fruits.splice(1, 2, "Blueberry", "Blackberry"); // Remove 2, insert 2
console.log("After splice:", fruits);

fruits.sort();                    // Alphabetical sort
console.log("Sorted:", fruits);

// Section 3: Non-Mutating Methods (return new array)
console.log("\n3. Non-Mutating Methods");
let numbers = [10, 5, 8, 1, 9, 3];

let sortedNumbers = [...numbers].sort((a, b) => a - b); // Copy + sort
console.log("Original:", numbers);
console.log("Sorted (new array):", sortedNumbers);

let sliced = numbers.slice(2, 5); // Extract subset
console.log("Sliced (2 to 5):", sliced);

let concatenated = numbers.concat([100, 200]);
console.log("Concatenated:", concatenated);

let reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// Section 4: Iteration Methods (map, filter, reduce, forEach)
console.log("\n4. Iteration Methods");

let doubled = numbers.map(n => n * 2);
console.log("Doubled (map):", doubled);

let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers (filter):", evens);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum (reduce):", sum);

console.log("\nforEach loop:");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// Section 5: find, findIndex, some, every
console.log("\n5. Search Methods");

let firstEven = numbers.find(n => n % 2 === 0);
console.log("First even number:", firstEven);

let firstEvenIndex = numbers.findIndex(n => n % 2 === 0);
console.log("Index of first even:", firstEvenIndex);

let hasNegative = numbers.some(n => n < 0);
console.log("Has negative number?", hasNegative);

let allPositive = numbers.every(n => n > 0);
console.log("All positive?", allPositive);

// Section 6: Spread Operator & Destructuring
console.log("\n6. Spread Operator & Destructuring");

let moreFruits = ["Grape", "Honeydew"];
let allFruits = [...fruits, ...moreFruits, "Kiwi"];
console.log("Combined with spread:", allFruits);

let [first, second, ...rest] = allFruits;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// Section 7: Multidimensional Arrays
console.log("\n7. Multidimensional Arrays (Matrix)");

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix:");
matrix.forEach(row => console.log(row.join(" ")));

let sumMatrix = matrix.reduce((acc, row) => acc + row.reduce((a, b) => a + b, 0), 0);
console.log("Sum of all elements:", sumMatrix);

// Section 8: Practical Examples
console.log("\n8. Real-World Examples");

// Example 1: Remove duplicates
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(duplicates)];
console.log("Unique values:", unique);

// Example 2: Flatten nested array
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = nested.flat(Infinity); // Deep flatten
console.log("Flattened:", flat);

// Example 3: Group by property
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" }
];

let groupedByGrade = students.reduce((acc, student) => {
  if (!acc[student.grade]) acc[student.grade] = [];
  acc[student.grade].push(student.name);
  return acc;
}, {});
console.log("Grouped by grade:", groupedByGrade);

// Section 9: Edge Cases
console.log("\n9. Edge Cases");
let empty = [];
console.log("Empty array length:", empty.length);
console.log("Access empty[0]:", empty[0]); // undefined

let sparse = [1, , 3, , 5];
console.log("Sparse array:", sparse);
console.log("Length:", sparse.length); // 5

let arrayLike = "Hello";
let chars = Array.from(arrayLike);
console.log("From string:", chars);

// Section 10: Bonus - Array.from & Array.of
console.log("\n10. Bonus: Array.from & Array.of");

let fromRange = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Array from range (1-5):", fromRange);

let fromString = Array.from("hello");
console.log("Array from string:", fromString);

let special = Array.of(1, "hello", true, null);
console.log("Array.of:", special);




// Section 1: Dynamic Typing
console.log("=== 1. Dynamic Typing ===");
let dynamicVar = 42; // Number
console.log("dynamicVar:", dynamicVar, typeof dynamicVar);

dynamicVar = "Now a string"; // Changes type seamlessly (unlike static languages like Java)
console.log("dynamicVar:", dynamicVar, typeof dynamicVar);

dynamicVar = true; // Boolean
console.log("dynamicVar:", dynamicVar, typeof dynamicVar);

// Section 2: Prototypal Inheritance
console.log("\n=== 2. Prototypal Inheritance ===");
// Unlike class-based (e.g., Java), JS uses prototypes.

let animal = {
  eats: true,
  walk: function() {
    console.log("Animal walks");
  }
};

let rabbit = Object.create(animal); // rabbit inherits from animal
rabbit.jumps = true;

console.log("Rabbit eats?", rabbit.eats); // true, from prototype
rabbit.walk(); // Inherited method

console.log("rabbit.__proto__:", rabbit.__proto__ === animal); // true

// Modify prototype affects all
animal.eats = false;
console.log("Rabbit eats now?", rabbit.eats); // false

// Section 3: Functions as First-Class Citizens
console.log("\n=== 3. Functions as First-Class ===");
// Functions can be stored in variables, passed as args, returned.

function sayHello() {
  return "Hello!";
}

let funcVar = sayHello; // Assign to variable
console.log("funcVar():", funcVar());

// Pass as argument
function executeFunc(fn) {
  console.log("Executing:", fn());
}

executeFunc(sayHello);

// Return function
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

let hiGreeter = createGreeter("Hi");
console.log(hiGreeter("Alice"));

// Section 4: Closures
console.log("\n=== 4. Closures ===");
// Inner functions access outer scope even after outer finishes.

function outer() {
  let outerVar = "I'm from outer";
  function inner() {
    console.log(outerVar); // Remembers outerVar
  }
  return inner;
}

let closureFunc = outer();
closureFunc(); // "I'm from outer"

// Practical: Counter
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}

let counter = makeCounter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.get()); // 2

// Section 5: Hoisting
console.log("\n=== 5. Hoisting ===");
// var and function declarations are hoisted (moved to top).

console.log("hoistedVar before declaration:", hoistedVar); // undefined (hoisted but not initialized)
var hoistedVar = "Now assigned";
console.log("hoistedVar after:", hoistedVar);

// Function hoisting
hoistedFunc(); // Works!
function hoistedFunc() {
  console.log("Hoisted function called");
}

// let/const not hoisted (Temporal Dead Zone)
// console.log(notHoisted); // ReferenceError
let notHoisted = "let not hoisted";

// Section 6: this Keyword
console.log("\n=== 6. this Binding ===");
// 'this' depends on call context (unlike fixed in other langs).

let obj = {
  name: "Object",
  method: function() {
    console.log("this.name:", this.name);
  }
};

obj.method(); // "Object"

let extracted = obj.method;
extracted(); // undefined (this is global/window)

// Arrow functions lexically bind this
let arrowObj = {
  name: "ArrowObj",
  arrowMethod: () => {
    console.log("Arrow this.name:", this.name); // undefined (lexical this)
  },
  regularWithArrow: function() {
    let innerArrow = () => console.log("Inner arrow this.name:", this.name);
    innerArrow();
  }
};

arrowObj.arrowMethod(); // undefined
arrowObj.regularWithArrow(); // "ArrowObj"

// bind, call, apply
let bound = obj.method.bind({ name: "Bound" });
bound(); // "Bound"

// Section 7: Event Loop & Asynchronicity
console.log("\n=== 7. Asynchronicity ===");
// Single-threaded but non-blocking via event loop.

console.log("Start sync");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End sync"); // Runs before timeout due to event loop

// Promises
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved"), 100);
});

promise.then(console.log);

// async/await
async function asyncDemo() {
  let result = await new Promise(r => setTimeout(() => r("Async result"), 200));
  console.log(result);
}

asyncDemo();

// Section 8: Equality Operators
console.log("\n=== 8. Equality == vs === ===");
// == coerces types, === strict.

console.log("1 == '1':", 1 == '1'); // true (coercion)
console.log("1 === '1':", 1 === '1'); // false

console.log("0 == false:", 0 == false); // true
console.log("0 === false:", 0 === false); // false

console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Section 9: Quirks and Gotchas
console.log("\n=== 9. Quirks ===");

// typeof null
console.log("typeof null:", typeof null); // 'object' (historical bug)

// NaN
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// Undefined vs Null
let undef;
console.log("Undefined:", undef); // undefined
console.log("Null:", null);

// Array quirks: arrays are objects
let arr = [1, 2, 3];
console.log("typeof arr:", typeof arr); // 'object'
console.log("Array.isArray(arr):", Array.isArray(arr)); // true

arr["prop"] = "I'm an object too";
console.log("arr.prop:", arr.prop);

// Floating point precision
console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004 (no true integers)

// Section 10: Weak Typing & Coercion
console.log("\n=== 10. Coercion ===");

console.log("'5' + 3:", '5' + 3); // '53' (string concat)
console.log("'5' - 3:", '5' - 3); // 2 (numeric op coerces)
console.log("[] == 0:", [] == 0); // true (coercion to '')
console.log("[] === 0:", [] === 0); // false

// Truthy/Falsy
console.log("Boolean(''):", Boolean('')); // false
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('0'):", Boolean('0')); // true

// Section 11: Global Scope
console.log("\n=== 11. Global Scope ===");
// In browser, window; in Node, global.

var globalVar = "I'm global";
console.log("globalVar:", globalThis.globalVar || window.globalVar); // Works in both envs

// Strict mode avoids accidental globals
// 'use strict'; // Uncomment to see errors on undeclared vars

// Section 12: No Classes (Pre-ES6 Style)
console.log("\n=== 12. Constructor Functions ===");
// Simulate classes with functions (before ES6 class keyword).

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

let alice = new Person("Alice", 30);
alice.greet();

// Inheritance
function Employee(name, age, role) {
  Person.call(this, name, age);
  this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let bob = new Employee("Bob", 40, "Developer");
bob.greet();
console.log("Bob's role:", bob.role);

// Section 13: ES6+ Unique Features (Brief)
console.log("\n=== 13. ES6+ Features ===");

// Arrow Functions (no own this, arguments)
const arrow = () => console.log("Arrow function");
arrow();

// Destructuring
let [a, b] = [1, 2];
console.log("a:", a, "b:", b);

let {name: personName} = {name: "Charlie"};
console.log("personName:", personName);

// Spread/Rest
let spreadArr = [...[1,2], 3];
console.log("Spread:", spreadArr);

function rest(...args) {
  console.log("Rest args:", args);
}
rest(1,2,3);

// Template Literals
let tlName = "David";
console.log(`Hello, ${tlName}!`);

// Section 14: Arrays as Special Objects
console.log("\n=== 14. Arrays Specialties ===");

let specialArr = [];
specialArr[0] = "zero";
specialArr.push("one");
console.log("specialArr:", specialArr);

// Sparse arrays
specialArr[10] = "ten";
console.log("Length:", specialArr.length); // 11
console.log("specialArr[5]:", specialArr[5]); // undefined

// Higher-order methods
let mapped = [1,2,3].map(x => x*2);
console.log("Mapped:", mapped);

// Section 15: No Multithreading (But Workers)
console.log("\n=== 15. Single-Threaded Model ===");
// JS is single-threaded; use Web Workers for parallelism (browser only).
// Demo: Simple loop blocks
console.log("Before blocking loop");
for (let i = 0; i < 1e8; i++) {} // Blocks event loop
console.log("After blocking loop");


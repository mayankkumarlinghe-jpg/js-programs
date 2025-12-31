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


console.log("Run this in Node.js or browser console to see all examples clearly!");

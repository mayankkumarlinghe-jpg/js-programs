// JavaScript Logic Building  Program
// This program contains 10 practical logic-building problems with solutions.

// Problem 1: Check if a number is Prime
console.log("=== Problem 1: Prime Number Check ===");
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

console.log("17 is prime?", isPrime(17));
console.log("24 is prime?", isPrime(24));
console.log("29 is prime?", isPrime(29));

// Problem 2: Reverse a Number
console.log("\n=== Problem 2: Reverse a Number ===");
function reverseNumber(num) {
  let reversed = 0;
  let n = Math.abs(num); // Handle negative
  while (n > 0) {
    reversed = reversed * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return num < 0 ? -reversed : reversed;
}

console.log("Reverse of 12345:", reverseNumber(12345));
console.log("Reverse of -9876:", reverseNumber(-9876));

// Problem 3: Check Palindrome (Number & String)
console.log("\n=== Problem 3: Palindrome Check ===");
function isPalindrome(str) {
  str = str.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

console.log("121 is palindrome?", isPalindrome(121));
console.log("'Racecar' is palindrome?", isPalindrome("Racecar"));
console.log("'hello' is palindrome?", isPalindrome("hello"));

// Problem 4: Fibonacci Sequence up to n terms
console.log("\n=== Problem 4: Fibonacci Sequence ===");
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2]);
  }
  return seq;
}

console.log("First 10 Fibonacci numbers:", fibonacci(10));

// Problem 5: Find Largest & Smallest in Array
console.log("\n=== Problem 5: Max & Min in Array ===");
function findMinMax(arr) {
  if (arr.length === 0) return null;
  let min = arr[0], max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

let scores = [45, 87, 23, 99, 12, 76];
let result = findMinMax(scores);
console.log("Scores:", scores);
console.log("Min:", result.min, "Max:", result.max);

// Problem 6: Count Vowels and Consonants
console.log("\n=== Problem 6: Vowel & Consonant Count ===");
function countVowelsConsonants(str) {
  str = str.toLowerCase();
  let vowels = 0, consonants = 0;
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let char of str) {
    if (/[a-z]/.test(char)) {
      if (vowelSet.has(char)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}

let sentence = "JavaScript is awesome!";
let counts = countVowelsConsonants(sentence);
console.log(`"${sentence}"`);
console.log("Vowels:", counts.vowels, "Consonants:", counts.consonants);

// Problem 7: Armstrong Number Check
// A number equal to sum of its digits raised to power of number of digits
console.log("\n=== Problem 7: Armstrong Number ===");
function isArmstrong(num) {
  let original = num;
  let sum = 0;
  let digits = num.toString().length;
  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
  }
  return sum === original;
}

console.log("153 is Armstrong?", isArmstrong(153)); // 1^3 + 5^3 + 3^3 = 153
console.log("370 is Armstrong?", isArmstrong(370));
console.log("123 is Armstrong?", isArmstrong(123));

// Problem 8: Factorial using Recursion
console.log("\n=== Problem 8: Recursive Factorial ===");
function factorial(n) {
  if (n < 0) return "Not defined";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 7:", factorial(7));

// Problem 9: Find GCD (Greatest Common Divisor)
console.log("\n=== Problem 9: GCD of Two Numbers ===");
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log("GCD of 48 and 18:", gcd(48, 18));
console.log("GCD of 35 and 14:", gcd(35, 14));

// Problem 10: Simple Pattern Printing (Triangle)
console.log("\n=== Problem 10: Star Pattern Triangle ===");
function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = '';
    // Spaces
    for (let j = 1; j <= rows - i; j++) {
      line += ' ';
    }
    // Stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += '*';
    }
    console.log(line);
  }
}

console.log("Triangle with 5 rows:");
printTriangle(5);

// Bonus: FizzBuzz Classic Problem
console.log("\n=== Bonus: FizzBuzz (1 to 30) ===");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

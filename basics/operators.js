console.log("========== JavaScript Operators Demo ==========\n");

// -------------------- VARIABLES --------------------
let a = 10;
let b = 2;

console.log("------ Arithmetic Operators ------");
console.log("Initial values → a =", a, ", b =", b);

console.log("a + b  =", a + b); // Addition
console.log("a - b  =", a - b); // Subtraction
console.log("a * b  =", a * b); // Multiplication
console.log("a / b  =", a / b); // Division
console.log("a % b  =", a % b); // Modulus (remainder)
console.log("a ** b =", a ** b); // Power

// Increment / Decrement
console.log("\n--- Increment & Decrement ---");
console.log("a++ (post) =", a++); // prints first, then increases
console.log("a (after a++) =", a);

console.log("++a (pre) =", ++a); // increases first, then prints

console.log("b-- (post) =", b--);
console.log("b (after b--) =", b);

console.log("--b (pre) =", --b);

// -------------------- ASSIGNMENT --------------------
console.log("\n------ Assignment Operators ------");

a += 10;
console.log("a += 10 →", a);

a /= 10;
console.log("a /= 10 →", a);

a -= 10;
console.log("a -= 10 →", a);

a *= 10;
console.log("a *= 10 →", a);

a %= 10;
console.log("a %= 10 →", a);

a **= 10;
console.log("a **= 10 →", a);

// -------------------- COMPARISON --------------------
console.log("\n------ Comparison Operators ------");

console.log("a == b  =", a == b); // value only
console.log("a != b  =", a != b);
console.log("a === b =", a === b); // value + type

let c = "10",
  d = 10;

console.log("\nString vs Number:");
console.log("c === d =", c === d); // false (different types)

c = 10;
d = 10;

console.log("c === d =", c === d); // true

// -------------------- TEST CASE --------------------
console.log("\n------ Test Cases ------");

let test1 = 5;
let test2 = 5;

console.log("test1 == test2  =", test1 == test2);
console.log("test1 === test2 =", test1 === test2);
console.log("test1 != test2  =", test1 != test2);
console.log("test1 !== test2 =", test1 !== test2);

// -------------------- STRING COMPARISON --------------------
console.log("\n------ String Comparison ------");

let test3 = "5";

console.log("test3 (string) =", test3);

console.log("test1 == test3  =", test1 == test3); // true (type conversion)
console.log("test1 === test3 =", test1 === test3); // false (strict)
console.log("test1 != test3  =", test1 != test3);
console.log("test1 !== test3 =", test1 !== test3);

// -------------------- LOGICAL --------------------
console.log("\n------ Logical Operators ------");

let x = 10,
  y = 20;

console.log("x > 5 && y > 15 =", x > 5 && y > 15); // AND
console.log("x > 15 || y > 15 =", x > 15 || y > 15); // OR
console.log("!(x > 5) =", !(x > 5)); // NOT
console.log("!(y > 15) =", !(y > 15));

// -------------------- BITWISE --------------------
console.log("\n------ Bitwise Operators ------");

let m = 5; // 0101
let n = 3; // 0011

console.log("m & n  =", m & n); // AND
console.log("m | n  =", m | n); // OR
console.log("m ^ n  =", m ^ n); // XOR
console.log("~m     =", ~m); // NOT
console.log("m << 1 =", m << 1); // Left shift
console.log("m >> 1 =", m >> 1); // Right shift
console.log("m >>> 1 =", m >>> 1); // Unsigned right shift

// -------------------- TERNARY --------------------
console.log("\n------ Ternary Operator ------");

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

age = 16;
canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

// -------------------- TYPEOF --------------------
console.log("\n------ Typeof Operator ------");

console.log("typeof a =", typeof a);
console.log("typeof c =", typeof c);
console.log("typeof test1 =", typeof test1);
console.log("typeof test3 =", typeof test3);
console.log("typeof user_info =", typeof user_info);

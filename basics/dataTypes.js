console.log("========== JavaScript Data Types ==========\n");

// -------------------- PRIMITIVE TYPES --------------------
console.log("------ Primitive Data Types ------");

// String
let name = "Roshan Mallick";
console.log("name =", name);
console.log("type =", typeof name);

name = "Roshan";
console.log("updated name =", name);
console.log("type =", typeof name);

// Number → then changed to string
let age = 21;
console.log("\nage =", age);
console.log("type =", typeof age);

age = "twenty one"; // type changed (not good practice)
console.log("updated age =", age);
console.log("type =", typeof age);

// Boolean
let isStudent = true;
console.log("\nisStudent =", isStudent);
console.log("type =", typeof isStudent);

// Null
let interest = null;
console.log("\ninterest =", interest);
console.log("type =", typeof interest);
// ⚠️ JS bug: typeof null → "object"

// Undefined
let Variable;
console.log("\nVariable =", Variable);
console.log("type =", typeof Variable);

// Symbol (unique identifier)
let id = Symbol("id is a unique identifier");
console.log("\nid =", id);
console.log("type =", typeof id);

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log("\nbigInt =", bigInt);
console.log("type =", typeof bigInt);

// BigInt using function
let a = BigInt(1) + BigInt(1);
console.log("BigInt addition =", a);
console.log("type =", typeof a);

// -------------------- OBJECTS (Non-Primitive Data Type) --------------------
console.log("\n------ Objects (Reference Type) ------");

// Object example
const student = {
  name: "Roshan Mallick",
  age: 21,
  isStudent: true,
};

console.log("student =", student);
console.log("type =", typeof student);
console.log("student.name =", student.name);

// Object with custom keys
let studentAge = {
  "ROSHAN MALLICK": 21,
  "JOHN DOE": 25,
};

console.log("\nAccess using bracket notation:");
console.log("ROSHAN MALLICK age =", studentAge["ROSHAN MALLICK"]);

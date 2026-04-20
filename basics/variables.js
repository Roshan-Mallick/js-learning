console.log("========== JavaScript Variables & Objects ==========\n");

// -------------------- VARIABLES --------------------
console.log("------ Variables & Dynamic Typing ------");

let user = "Roshan";
console.log("Initial user =", user);

user = 10; // type changed (string → number)
console.log("Updated user =", user);

// -------------------- CONCATENATION --------------------
console.log("\n------ String Concatenation ------");

let user_1 = "Jeshan";
let user_id = 12345;

console.log("user_1 + user_id =", user_1 + user_id); // joins string + number

// -------------------- TYPE CHECK --------------------
console.log("\n------ Type Checking (typeof) ------");

console.log("Type of user =", typeof user); // number
console.log("Type of user_1 =", typeof user_1); // string
console.log("Type of (user_1 + user_id) =", typeof (user_1 + user_id)); // string

// -------------------- OBJECT (CONST) --------------------
console.log("\n------ Object with const ------");

const user_info = {
  name: "Roshan",
  age: 20,
  city: "Kolkata",
  student: true,
};

console.log("Original user_info =", user_info);

// Modify existing property
console.log("\n--- Modify Property ---");
user_info["name"] = "Jeshan"; // allowed
console.log("After name change =", user_info);

// Add new property
console.log("\n--- Add New Property ---");
user_info["name_2"] = "Rohit"; // allowed
console.log("After adding name_2 =", user_info);

// -------------------- DICTIONARY OBJECT --------------------
console.log("\n------ Dictionary Object ------");

const dictionary = {
  apple: "a fruit",
  car: "a vehicle",
  house: "a place to live",
  book: "a source of knowledge",
  pen: "a writing instrument",
};

console.log("Dictionary =", dictionary);

// Accessing properties
console.log("\n--- Accessing Properties ---");

console.log("dictionary.book =", dictionary.book); // dot notation
console.log("dictionary['book'] =", dictionary["book"]); // bracket notation

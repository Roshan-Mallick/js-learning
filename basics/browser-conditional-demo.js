// Browser ONLY (NOT Node.js)

let age = prompt("What is your age?");
age = parseInt(age);

if (age >= 18) {
  alert("You can vote");
} else {
  alert("You cannot vote");
}

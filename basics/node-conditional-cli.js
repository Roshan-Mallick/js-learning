console.log("===== CONDITIONAL EXPRESSIONS DEMO =====");

// Ternary Operator
let age1 = 18;
let can_vote = age1 >= 18 ? "You can vote" : "You cannot vote";
console.log("Ternary Result:", can_vote);

// If Statement
let number = 10;
if (number > 0) {
  console.log("Number is positive");
}

// If-Else Statement
if (age1 >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// If-Else If Ladder
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Switch Statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Switch with variable assignment
let dayName;

switch (day) {
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

// Default override
dayName = "Sunday";

console.log("Day name is:", dayName);

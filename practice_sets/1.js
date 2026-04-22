console.log(
  "<===========================practice set 1===========================>",
);

console.log("Q.1 write a program to find a persons is age between 10 and 20");

let age = 15;

if (age > 10 && age < 20) {
  console.log("The person is between 10 and 20 years old ");
} else {
  console.log("the person is not between 10 and 20 years old");
}

console.log("Q.2Demonstarte the use of switch case statement in javascript");

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("satuday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

console.log(
  "Q.3 write a program to find if the number is divisible by 2 and 3 or not ",
);

let num = 21;
parseInt(num); // to convert the string to number if the input is in string format and floor the number if the input is in decimal format

if ((num % 2 === 0) & (num % 3 === 0)) {
  console.log("the number is divisible by 2 and 3");
} else {
  if (num % 2 === 0) {
    console.log("the number is divisible by 2  but not divisible by 3 ");
  } else if (num % 3 === 0) {
    console.log("the number is divisible by 3 but not divisible by 2");
  } else {
    console.log("the number is not divisible by 2 and 3");
  }
}

console.log(
  "Q.5  write a program to find if the person is eligible for voting or not",
);

let voterAge = 18;

let result =
  voterAge >= 18
    ? console.log("The person is eligible for voting")
    : console.log("The person is not eligible for voting");

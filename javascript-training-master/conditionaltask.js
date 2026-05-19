// Create a variable and console log whether a number is odd or even

let number = 7;
if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
    console.log("The largest number is:", a);
} else if (b > a && b > c) {
    console.log("The largest number is:", b);
} else {
    console.log("The largest number is:", c);
}

// Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

// Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,if the temperature   is above 15 display “Normal temperature” otherwise display “Cold temperature”
let temperature = prompt("Enter the temperature in °C:");
temperature = parseFloat(temperature);
if (temperature > 30) {
    console.log("The temperature is too high");
} else if (temperature > 15) {
    console.log("Normal temperature");
} else {
    console.log("Cold temperature");
}

// Write a js program that checks if a variable x is between 10 and 20 (inclusive) and if another variable y is greater than 100. If both conditions are true, display"Conditions met", otherwise display"Conditions not met"
let x = 15;
let y = 150;
if (x >= 10 && x <= 20 && y > 100) {
    console.log("Conditions met");
} else {
    console.log("Conditions not met");
}   

// Write a js program that checks if a variable password is equal to the string "secret123". If it is, display "Access   granted", otherwise display"Access denied"
let password = prompt("Enter the password:");
if (password === "secret123") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}   
// Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise display "Good score, but attendance needs improvement"
let student_score = parseFloat(prompt("Enter the student's score:"));
let attendance = parseFloat(prompt("Enter the student's attendance percentage:"));
if (student_score > 90) {
    if (attendance > 80) {
        console.log("Excellent student");
    } else {
        console.log("Good score, but attendance needs improvement");
    }
} else {
    console.log("Score is not high enough");
}

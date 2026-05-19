// Write a program that takes the date of birth of 
// a person and the program outputs the age in terms 
// of years,months,days TODAY.datetime

// 1. Get TODAY'S DATE (We only use new Date() to grab today's numbers, not for calculation)
let today = new Date();
let tYear = 2026
let tMonth = 5
let tDay = 19

// 2. Get BIRTH DATE from user
let bYear = Number(prompt("Enter birth year (e.g., 1995)"));
let bMonth = Number(prompt("Enter birth month (1-12)"));
let bDay = Number(prompt("Enter birth day (1-31)"));

// 3. Calculate basic difference
let years = tYear - bYear;
let months = tMonth - bMonth;
let days = tDay - bDay;

// 4. If days are negative, borrow days from the PREVIOUS month
if (days < 0) {
    months = months - 1;

    // Find which month we are borrowing from
    let prevMonth = tMonth - 1;
    let prevYear = tYear;

    // If current month is January, previous month is December of last year
    if (prevMonth == 0) {
        prevMonth = 12;
        prevYear = tYear - 1;
    }

    // Figure out how many days are in that previous month
    let daysInPrevMonth = 31; // Default for most months

    if (prevMonth == 2) { // February
        if ((prevYear % 4 == 0 && prevYear % 100 != 0) || (prevYear % 400 == 0)) {
            daysInPrevMonth = 29; // Leap year
        } else {
            daysInPrevMonth = 28;
        }
    } else if (prevMonth == 4 || prevMonth == 6 || prevMonth == 9 || prevMonth == 11) {
        daysInPrevMonth = 30; // Apr, Jun, Sep, Nov
    }

    // Add the borrowed days
    days = days + daysInPrevMonth;
}

// 5. If months are negative, borrow months from the PREVIOUS year
if (months < 0) {
    months = months + 12;
    years = years - 1;
}

// 6. Output the result
console.log("Your age is: " + years + " years, " + months + " months, " + days + " days");


// //Write a program that prints the largest of 4 inputs taken as input from a user.
// let num1 = Number(prompt("Enter first number"))
// let num2 = Number(prompt("Enter second number"))
// let num3 = Number(prompt("Enter third number"))
// let num4 = Number(prompt("Enter fourth number"))

// if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
//     console.log("The largest number is: " + num1)
// } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
//     console.log("The largest number is: " + num2)
// } else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
//     console.log("The largest number is: " + num3)
// } else {
//     console.log("The largest number is: " + num4)
// }

// // Write a program that takes the email and password
// //  as input from a user and checks if they are equal
// // to “admin @mail.com” and password is “Admin @123” ,
// // if so then print  “Login is Successful” and if not 
// //    print “Invalid username or password”. ONLY accept 3
// //     tries after which it notifies you that you have been
// // blocked.
// let correctEmail = "admin@mail.com";    
// let correctPassword = "Admin@123";
// let attempts = 3;   

// while (attempts > 0) {
//     let email = prompt("Enter your email");
//     let password = prompt("Enter your password");       
//     if (email === correctEmail && password === correctPassword) {
//         console.log("Login is Successful");
//         break;  
//     } else {
//         attempts--;     
//         if (attempts > 0) {
//             console.log("Invalid username or password. You have " + attempts + " attempts left.");
//         } else {
//             console.log("You have been blocked.");
//         }               
//     }
// }



// // Write a program that takes input of 2 values and adds them. 
// // The program should only accept numbers and floats only or otherwise
// //  display an error “invalid character entered” and take the user to re-enter the inputs .

// let validInput = false;
// while (!validInput) {
//     let input1 = prompt("Enter first number");
//     let input2 = prompt("Enter second number"); 
//     let num1 = Number(input1);
//     let num2 = Number(input2);
//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Invalid character entered. Please enter valid numbers.");
//     }  
//     else {
//         let sum = num1 + num2;
//         console.log("The sum is: " + sum);
//         validInput = true; 
//     }               
// }   

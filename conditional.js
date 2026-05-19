// let y= Number(prompt("Enter a number"))

// if(y%2 ==0){
//     console.log("Even Number")
// }   else{
//     console.log("Odd")
// }


// let num1 = Number(prompt("Enter a number"))
// let num2 = Number(prompt("Enter another number"))
// let num3 = Number(prompt("Enter a third number"))

// if(num1 > num2 && num1 > num3){
//     console.log(num1 + " is the largest number")
// }   else if(num2 > num1 && num2 > num3){
//     console.log(num2 + " is the largest number")
// }   else if(num3 > num1 && num3 > num2){
//     console.log(num3 + " is the largest number")
// }   else{
//     console.log("All numbers are equal")
// }                                   

//write a sipmple statement to check elegibility of a voter(assume a voter must
//be atleast 18 years old)

let age = Number(prompt("Enter your age"))

if(age >= 18){
    console.log("You are eligible to vote")
}   else{
    console.log("You are not eligible to vote")
}

//write a program that checks wheter the length of a username is
//atleast 8 characters
//if length < 8, output 'too short' otherwise output'correct format'

// let username = prompt("Enter a username")

// if(username.length < 8){
//     console.log("Username is too short")
// }   else{
//     console.log("Username is in correct format")
// }

// //write a program that determines ticket prices based on age
// //under 12- 500/=, uner 18- 650/=, adults- 800/=
// //over 60yrs - 400/=

// let age = Number(prompt("Enter your age"))

// if(age < 12){
//     console.log("Ticket price: 500/=")
// }   else if(age < 18){
//     console.log("Ticket price: 650/=")
// }   else if(age < 60){
//     console.log("Ticket price: 800/=")
// }   else{
//     console.log("Ticket price: 400/=")
// }
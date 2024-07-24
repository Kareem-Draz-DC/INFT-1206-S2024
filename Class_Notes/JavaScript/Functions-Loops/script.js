// console.log("Script is running...");

// ----------- Loops ------------

// A loop is a block of code that we want to repeat a certain number of times. A loop will repeat until a condition is met.

// For Loop

// for (let i = 0; i <= 20; i += 3) {
//     console.log(i)
// }

// While Loop
// let i = 0;
// while (i <= 20) {
//     console.log(i)
//     i += 3 // If we don't include this line, we will have a problem, we will have an infinite loop
// }

// Do While Loop
// let i = 0;
// do {
//     console.log(i)
//     i += 3;
// } while (i <= 20)

// For Of Loop
// let numsArray = [1,2,3,4,5,6,7]

// for (let num of numsArray) {
//     console.log(num)
// }

// For In Loop

// Foreign Objects - UFO
// let car = {type: "Hypercar", brand: "Porsche", model: "Spyder"}

// for (let key in car) {
//     console.log(key)
//     console.log(car[key])
// }


// ------------ Functions ------------

// We want to create a function that will take 2 numbers as input and return the sum of those numbers

// () -> An expression commonly used when invoking a function or method

// function printPaper(a, b) {
//     console.log("Printing....")
//     return "printed." // paper
// }


// function sumOfTwoNumbers(a, b) {
//     // Body of the function
//     return a + b
// }

// let c = sumOfTwoNumbers(5,12)
// let d = sumOfTwoNumbers(13,18)
// let e = sumOfTwoNumbers(523,121)

// console.log(c)
// console.log(d)
// console.log(e)



// Function Declaration -> Hoisting
// function sum(a,b) {
//     return a + b
// }

// Function Expression
// let sum = function(a,b) {
//     return a + b
// }

// Arrow Function
// let sum = (a,b) => a + b

// console.log(sum(5,10))

// let a = 5 // -> Defined in global scope
// function closedScope() {
//     let a = 5 // Enclosed in the local function scope
//     console.log(a)
// }

// closedScope()

// console.log(a)

// Closures

// function outerFunction(){
    
//     let x = 10 // Defined in Lexical Scope
    
//     function innerFunction() {
//         console.log(x)
//     }
//     innerFunction()
// }
// outerFunction()


let arr = [1,2,3,4,5,6,7,8,9,10]

let obj = {key1: "value1", key2: "value2", key3:"value3"}

// 1. Write a function that will display all the numbers from 1 to 999

// 2. Write a function that will display all the even numbers from 1 to 999

// 3. Write a function that will display all the numbers divisible by 7 from 1 to 999

// 4. Write a function that will iterate through an object and display all of its keys and values

// 5. Write a function that will iterate through an array and display all of its elements

// 6. Write a function that will iterate through a numbers array and add 1 to each of its values

// 7. Write a function that will initiate a prompt where you write the name of the month and it will return (log) which season the month is in




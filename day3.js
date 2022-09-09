//1. what are promises and why do we need them?
//Promises are used to handle asynchronous operations in JavaScript.
//They are easy to manage when dealing with multiple asynchronous operations where callbacks 
//can create callback hell leading to unmanageable code.
//It also allows us to make API calls or fetch data from Web Servers successfully. 
//Using Promise we can write cleaner code in efficient way.
//Eg:
// const printAlphabet = (time,value) =>{
//     return new Promise((resolve, reject)) =>{
//         setTimeout(()=>{
//             console.log(value);
//             resolve();
//         }, time);
//      })
    
// }
// printAlphabet(6000, A)
// .then(()=> printAlphabet(5000, E))
// .then(()=> printAlphabet(4000, I))
// .then(()=> printAlphabet(3000, O))
// .then(()=> printAlphabet(2000, U))

//2,10. What is the purpose of async/await keywords?
//async/await is introduce in ES8 version. Purpose is to simplify the code.
//Able to debug the code easily
//Syntax is easy than promises
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
//avoiding the need to explicitly configure promise chains.
//Eg:
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();
// O/P : Promise resolved
//         hello


//3. What is Hoisting?
// Hoisting means we can access the variables and functions even before declaring them.
//Eg:
a = 5;
console.log(a);
var a; 
//O/P : 5
//Eg:
console.log(test);   
var test;
//O/P : undefined

//4. What is DOM?
// DOM stands for Document Object Model
//When a web page is loaded, the browser creates a Document Object Model of the page.
//It defines the logical structure of documents and the way a document is accessed and manipulated.

//5. Difference b/w undefined vs not defined vs NaN?
// Undefined - when we try to access a variable that is declared but not initialized.
// Not Defined - when we try to access the variable that is not declared
//NaN: NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number.

//6. How many operators do we have in js?

// Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Increment & Decrement Operators
// Logical Operators
// Ternary Operators
// Comma Operators.

//7. What is callback hell?

//Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.

//8. What is promise chaining?
//Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order.
//Eg:
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
});

//9.What is Arrow function?

//Ans : Arrow functions were introduced in ES6
//Arrow functions allow us to write shorter function syntax.
//This allows the omission of the curly brackets and the return keyword.

//Eg:
hello = () => {
    return "Hello World!";
  }


//1. What is temporial dead zone?
// the term to describe the state where variables are un-reachable. 
// They are in scope, but they aren't declared.
//to access a variable before its complete initialization, 
//JavaScript will throw a ReferenceError.

//2. What is for-in loop in javascript? Give its syntax?
//The for..in loop in JavaScript allows you to iterate over all property keys of an object.
//syntax:for (key in object) {
    // body of for...in
//}
//Eg:
const details = {
    name: 'Girishma',
    Profession: 'Developer',
    age: 23
}

for ( let key in details ) {

    console.log(`${key} = ${details[key]}`);
}
//3. Explain Local scope, Block scope, Functional scope and scope chain in JS?
//Block Scope
//let and const, These two keywords provide Block Scope in JavaScript.
//Variables declared inside a {} block cannot be accessed from outside the block.
//Functional Scope
//JavaScript has function scope: Each function creates a new scope.
//Variables defined inside a function are not accessible (visible) from outside the function.
//Local scope
//Local Scope occurs when you create a variable inside a function.
//Scope chain
// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) 
// is used by another variable or function having another scope (may be global or local/function or block scope). 
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.

//4. What is the difference between null and undefined and where to use what?
//undefined is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything. 
//null is a variable that is defined but is missing a value.

//5.What is Symbol?
//Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//Every time you invoke Symbol() we get a new and unique symbol, guaranteed to be different from all other symbols
//Eg:Symbol() === Symbol() //false


//6. Write code to explain map and filters in arrays?
//map in arrays
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
//Eg:
const listOfNumbers = [2, 3, 5, 6, 4, 1, 8, 4];

const mappedNumbers = listOfNumbers.map((item) => item * 2);
console.log(mappedNumbers);

//filters in arrays
// filter() method creates a new array filled with elements that pass a test provided by a function.
// filter() method does not execute the function for empty elements.
// filter() method does not change the original array.
//Eg:
const marks = [99, 98, 100, 50];
const result = marks.filter(centum);

function centum(mark) {
  return mark >= 90;
}

//7. Explain pass by value and pass by reference?
//Passed by Value:
//Works with Primitive Data Type
//Eg:
let a = 5;
let b = 8;
b = a + 5;
console.log(b);
console.log(a);
//Passed by Reference:
//Works with Non-Primitive Data Type
//Eg:
let object = {
    name : "Ciri",
    age : 23
}
let obj = object;
obj.age = 24
console.log(obj);
//Eg:
let a1 = [1,2];
let b1 = a1;
b1.push = 5;
console.log(b1);
console.log(a1);

//8. Explain self invoking function and its code?
//self invoking functions are kind of an anonymous function which gets invoked automatically after its declaration.
//we dont have to manually invoke it.
    (function(){
        let x = "hello there";
        console.log(x);
    })();

    //9 .What is an event loop and call stack?
//The event loop is a constantly running process that monitors both the callback queue and the call stack. 
//If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack.





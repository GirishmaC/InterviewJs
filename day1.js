//Ques-1. Difference between == & ===?
//ANS : "==" is used for comparison between two variables irrespective of the datatype of variable.
// "=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

//Ques-2. What is SpreadOperator?
//ANS : The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
//Eg: 
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
//O/P : [ 2, 4, 6, 1, 3, 5 ]

//Ques-3. Difference b/w var,let and const?

//var :
// 1. we can declare the variable name in one line and initialize it on another line
// or in the same line itself.
// 2. Two variables with same name are possible with var
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. var is global scoped.
// 5. var supports Hoisting.

//let :
// 1. we can declare the variable name in one line and initialize it on another line or in the same line itself.
// 2. Two variables with same name aren't possible with let
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. let is block scoped.
// 5. Let doesn't supports Hoisting.

//const :
// 1. we have to declare the variable and initialize in the same line itself.
// 2. Two variables with same name aren't possible with const.
// 3. We can't reassign/update the values of the variable which have already been initialized.
// 4. const is block scoped.
// 5. const also doesn't supports Hoisting.

//Ques-4 : What is meant by First Class Functions?
//ANS : JavaScript has first-class functions, which are functions that can be:
//Assigned to variables, Passed as arguments to functions, Returned from functions,
//OR
//The first class functions are the first class citizens and are treated as the first-class object which can be stored in variables,
//passed as an argument in functions, returned from other functions, have their own properties. 
//Eg:
const ArithmeticOp = {
    add: (x1, x2) => {
        return `${x1} + ${x2} = ${x1 + x2}`;
    },
    subtract: (x1, x2) => {
        return `${x1} - ${x2} = ${x1 - x2}`
    }
}
document.write(ArithmeticOp.add(100, 100) + "<br>"); // O/P: 100 + 100 = 200

document.write(ArithmeticOp.subtract(100, 7) + "<br>"); // O/P: 100 - 7 = 93

//Ques-5 : What are Closures? Give an Example?
// clousers - It's not something that we create manually or explicity. it happens automatically in certain situations which we need to analyze/realize ourselves.
// clouser makes a function remeber all the variables that existed in the function birth place initially.
// any function always have access to the "variable environment(variable which is using)" of the execution context in which the function created.
//Eg:
const ticketBooking = function(){
    let passengerCount0 = 0;
    let passengerCount1 = 0;
    return function(){
        passengerCount0++;
        passengerCount1++;
        console.log(`The count of the passsenger are ${passengerCount0}  ${passengerCount1}`);
    }
}
const bookie = ticketBooking();

console.log(bookie);//fn dfn
console.dir(bookie);
bookie();
bookie();
bookie();

//Ques-6 : What is Execution Context?

//ANS : When the JavaScript engine executes the JavaScript code, it creates execution contexts.
//Each execution context has two phases: the creation phase and the execution phase. 
//OR
//Execution context is the concept for describing the internal working of a code. In JavaScript, 
//the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context.

//Ques-7 : What is Creation Phase and Execution Phase?

//ANS : Creation Phase : 1. Memory is allocated, 2. It  is also called Variable Environment
//Execution Phase  : It is also called as Thread of Execution.Once the code execution starts the "undefined" is updated with the values assigend to the variable.


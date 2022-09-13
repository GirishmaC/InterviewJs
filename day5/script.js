//Ques 1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.
$("#buttonC").click(function () {
    $("#mern").toggle();
});

//Ques 2. Write code to get 1st H1 element from a webpage using DOM.
document.querySelector("h1").style.color = "blue";

//Ques 3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.
const Time = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    document.getElementById("time-zone").innerHTML = `
          ${hh} hrs : ${mm} mts : ${ss} sec`;
    setTimeout(Time, 1000);
};
Time();

//Ques 4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy" .

document.getElementById("buttonR").addEventListener("click", function () {
    document.getElementById("hellowrld").innerText = "Welcome to Elevation academy";
});

//Ques 5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.

document.getElementById("buttonH").addEventListener("click", function () {
    document.getElementById("hide").style.visibility = "hidden";
});

//Ques 6. Given an array of 0's and 1's find out number of 0's
const array = [1, 1, 1, 0, 1, 0, 0, 1];
let num = 0;
for (number of array) {
    if (number === 0)
        num = num + 1;
}
console.log(num);

//Ques 7. Given an array find out total no. of odd and even nos.
const arrays = [18, 12, 14, 90, 20, 50];
let even = 0;
let odd = 0;
for (number of arrays) {
    number % 2 == 0 ? (even = even + 1) : (odd = odd + 1);
}
console.log(`even num: ${even}, odd num: ${odd}`);

//Ques 8. Given a string find out number of vowels.
const message = "Welcome to Elevation academy";
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
for (vowel of message) {
    if (vowels.includes(vowel)) {
        count = count + 1;
    }
}
console.log(count);

//Ques 9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let object1 = {
    message: "Welcome to Elevation academy",
    arr1: ["one", "two", "three"],
};
let object2 = {
    message: "Hi, Welcome to Elevation academy",
    arr2: ["one", "two", "three"],
};
function compareMethod(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    else {
        let result = false;
        for (let index in arr1) {
            if (arr1[index] === arr2[index]) result = true;
            else return false;
        }
        return result;
    }
}
console.log(compareMethod(object1.arr1, object2.arr2));
/*
// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:




// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
*/

function splitBill(amt1, amt2){
    return `bill amount split = ${amt1}, ${amt2}`;
}

console.log(splitBill(10, 2));


/*
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown() {
  // write your code here
}

// const countingDown = countdown();

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
*/

function countdown(counter){
    console.log(`countdown starting from ${counter}...`);
    for(let i=counter; i>=0; i--)
        console.log(`${i}`);
}

//countdown(5);

function likesCounter(){
    let noOfLikes = 0;
    return function ret_likes(){
        return noOfLikes += 1;
    }
}

// <=================================================================CLOSURES IN JS ================================================================================>
const likes = likesCounter();   // closure property of javascript
// if we just print likesCounter() it returns the anonymous function inside likesCounter()
// so we assign the value returned by the likesCounter() to likes variable
console.log(likes());
console.log(likes());
console.log(likes());
// since we are being returned a function so likes is called like -> likes()
/*
the value each time we call increments by 1 because
normally when a function is called, the inner function references the outer function variable still
so the outer function variables dont get destroyed and still it remains in memory so we can see the value increments to 1 2 3 each time we call it
*/

// function v1
const cap = function (name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}
console.log(cap('sourav bose'));

// function v2 (arrow function)
// by default arrow function has return statement 
const cap2 = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
console.log(cap2('soustav bose'));

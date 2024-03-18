// ******************** reduce in js *******************

// reduce method is used  to apply a function on each element of an array, resulting in single output value.
// reduce is a method that takes an array and reduces it down to a single value.  
// It uses a callback function, which gets called for each element of the array  
// with two arguments: accumulator (the current result) and currentValue (the  
// value from the array). The callback returns the new accumulator value. 

const numbers  = [10,20,30,40];
let initial = 0 ;
let sum = numbers.reduce((accumulator , currentValue ) => { 
    return accumulator + currentValue; 
}, initial);
console.log(sum); // Output : 100

/* In above example we are adding all elements of the array together using reduce() */

// Now let's try to find out maximum number in the array using reduce().

const numArray = [56,78,98,23,12] ;
let maxNum = numArray.reduce((maxSoFar , currentVal) => {
     return Math.max(maxSoFar , currentVal) ;
} ,numArray[0]); /* We start by assuming first element as the largest one*/

console.log("The Maximum Number is ",maxNum ); // Output : The Maximum Number is  98

/********* Another Example *******/
const arr = [{name:'John'},{name:'Jane',age:30},{name:'Alice'}];

let output = arr.reduce((obj, nextObj) => {
    obj.people.push(nextObj.name);
    if (nextObj.age && nextObj.age > obj.oldest) {
        obj.oldest = nextObj.age;
    }
    return obj;
}, {oldest: 0, people: []});

console.log('Output ', output);

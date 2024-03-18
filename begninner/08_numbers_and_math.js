// ************************* numbers and Math in javaScript  ************************

//numbers have properties 
//1. toString : it converts the number into string
let num = 121.321
console.log(num.toString()) 

//2. tofixed (): It is used to convert a number into a fixed-point decimal representation.
console.log(num.toFixed(2));   //It returns a string with a fixed number of digits after the decimal point, rounded to that precision.

//3. toPrecison (): It is used to specify the desired precision of a number
let i=334.141592653589793;
console.log(i.toPrecision(3));  // output : 334
console.log(i.toPrecision(2));   //output :3.3e+2

//4. toLocalString() : returns a localized version of the number as a string
 let  n = 1000000000;
 console.log(n.toLocaleString())  
 //for india
 console.log(n.toLocaleString('en-IN'));  
 //for us
 console.log(n.toLocaleString('en-US')) ;




 // ************************* Maths  functions in javascript ***********************
 //1. Math.abs(): Returns the absolute value of a number.
console.log(Math.abs(-10));



//2. Math.round() :  it return the round value
console.log(Math.round(10.49))    // output: 10
console.log(Math.round(10.52)) // output: 11



//3. Math.ceil() : it return the upper vaue always 
console.log(Math.ceil(11.1)); // output: 12




//4. Math.floor(): It return the lower value always
console.log(Math.floor(12.9)); // output: 12
//Math.min() :  
 let arr = [1,3,4,5]
 console.log(Math.min(arr)); // output NaN because syntex  error
 // Math.min():
let arr1 = [1, 3, 4, 0.8, 5];
console.log(Math.min(...arr1)); // Corrected usage



//5. Math.ramdom() : it  returns random numbeer between 0 to 1  excluding 0 and 1 but we can fix the range also 

console.log(Math.random());     // returns random decimal between 0 to 1

// now for min to max range random number
console.log(Math.floor((Math.random() * (6 - 1) )+ 1)); //Output will be between 1 and 6
//general syntex
let min = 10
let max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) ) + min);
// ********************* how to declare funtions  in javaScript *************************
// function keyword is used to declare a function.
// Syntax: function name(parameters) {
//     code block to be executed when the function is called;
// }
function greet() {
  console.log("Hello, World!");
}
greet();

// Functions can also return values using the "return" statement.
// The value after the "return" keyword is returned by the function.
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addNumbers(2, 3)); // Output: 5

// If a function doesn't have a return statement, it returns undefined by default.
function subtractNumbers(a, b) {
  return a - b;
}
console.log(subtractNumbers(5, 2)); // Output: 3

// You can pass zero or more arguments to a JavaScript function.
// Here are two examples of calling functions with different numbers of arguments:
function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 7)); // Output: 28

function userLogin(username, password) {
  if (!username || !password) {
    console.log("Username and Password cannot be empty");
  } else if (username === "admin" && password === "password") {
    return true;
  } else {
    return false;
  }
}

console.log(userLogin()); // Output: Username and Password  cannot be empty
console.log(userLogin("admin")); // Output: Username and Password  cannot be empty
console.log(userLogin("admin", "password")); // Output: true

// ********************** handle multiple inputs using rest  parameter ***************************

// rest  parameter return  an array of all the input values passed
function calculateCartItems(...values) {
  let total = 0;
  for (let index = 0; index < values.length; index++) {
    total += values[index];
  }
  console.log(total);
}
calculateCartItems();
calculateCartItems(10, 20, 30); // Output: 60
calculateCartItems(10, 20, 30, 87, 45, 35); // output : 227

// ****************************** handle objects  as argument ********************

const person = { name: "John Doe", age: 30 };
const address = { city: "New York", country: "USA" };

function displayInfo(personObj, addressObj) {
  console.log(`Name: ${personObj.name}`);
  console.log(`Age: ${personObj.age}`);
  console.log(`City: ${addressObj.city}`);
  console.log(`Country: ${addressObj.country}`);
}
displayInfo(person, address);

// You can also use destructuring to make it more readable

function displayInfoDestructured({ name, age }, { city, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
  console.log(`Country: ${country}`);
}
displayInfoDestructured(person, address);

// ****************************** handle Array  as argument ********************

const arrArgs = [10, 20, 30];
function sumArrayElements(args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sumArrayElements(arrArgs)); // Output: 60</s>

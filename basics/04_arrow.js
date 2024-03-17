// ******************** this keyword  **********************

// this reffers  to the current object in which it is called.
const user = {
  name: "John",
  age: 30,
  city: "New York",
  message: function () {
    console.log(
      `Hello! My name is ${this.name} and I am ${this.age} years old living in ${this.city}.`
    );
  },
};

user.message(); // output - Hello! My name is John and I am 30 years old living  in New York.
user.name = "Jane";
user.message(); //output - Hello! My name is Jane and I am 30 years old living in New York.

// ********************************* lets try to use this inside function *****************************************
function showThis() {
  let username = "zaid";
  console.log("The type of this is ", typeof this);
  console.log("The value of this is ", this.username); // not able to acess username.
}
showThis(); // The type of this is object
// The value of this is undefined

//********************************************     Arrow function      ********************** */
const arrowFunc = (num1, num2) => {
  console.log(this.num1); // not able to acess same as above
  console.log(num1 + num2);
};

arrowFunc(2, 4);

// we can declare arrow funtion as implicit so we dont have to write return  statement.

const func = (num1, num2) => num1 + num2;
console.log(func(5, 7)); // 12

// return object  using arrow function
const func1 = (num1, num2) => ({ name: "zaid" });
console.log(func1(5, 7));

/* In arrow functions there is no this so it refers to window or global object if we are calling an arrow function outside any other function then it */

// ********************** IIFE  Immediately Invoked Function Expression ********************
// invoke  immediately when it declared and execute the code inside that function.
// (function definition)(funtion call)

(function fun() {
  console.log("i am iife");
})();

// why we use iife  ?

/*

An Immediately Invoked Function Expression (IIFE) is a pattern in JavaScript where a function is defined and then immediately called, all in the same expression. IIFEs are commonly used to create a local scope for variables, which can help prevent variable collisions and preserve the integrity of the global scope. Here's an example of an IIFE:


(function() {
  // Variables and functions defined here are local to this IIFE
  var message = "Hello, world!";
  function logMessage() {
    console.log(message);
  }
  logMessage(); // Outputs: Hello, world!
})();
console.log(message); // Uncaught ReferenceError: message is not defined

In the example above, the message variable and logMessage function are defined within the IIFE and are therefore not accessible from outside the IIFE. This can be useful for creating private variables and functions that are not exposed to the rest of the codebase. 


Another common use case for IIFEs is to create a self-contained module that can be easily reused throughout an application. For example:

var myModule = (function() {
  // Variables and functions defined here are local to this IIFE
  var privateVariable = 0;
  function privateFunction() {
    // ...
  }
  function publicFunction() {
    // ...
  }
  return {
    publicFunction: publicFunction
  };
})();
myModule.publicFunction(); // Call the public function
In the example above, the myModule variable is assigned the return value of the IIFE, which is an object containing the publicFunction method. The privateVariable and privateFunction variables and functions are not accessible from outside the IIFE, but can still be used within the publicFunction method. Overall, IIFEs are a powerful tool for creating local scope and encapsulating functionality in JavaScript. By using IIFEs, developers can create self-contained modules that are easy to reuse and that don't pollute the global scope.

*/
"use strict"; // all code will be treated as new js version
 // alert(3 + 3); //this is a simple expression in javascript with will run on browser not on node js.

console.log(3 + 3);



/*console.log(3 
    + 
    3); //code readeability  can be improved by using the above format instead of this one*/


/*
          NOTE:
           1>use MDN, and TC39 documentation and  W3schools for learning JavaScript
           2>Always use comments to explain
    */

// Data types in JavaScript

var num = 5; // Number: Represents integer or floating point numbers

var bigInt = 1111111111111111111111111n; // BigInt: Allows working with large integers

var str = "Hello"; // String: Represents a sequence of characters

var bool = true; // Boolean: Has two values - True or False

var undefVar; // Undefined: Declared but not initialized

var nullVal = null; // Null: Represents no value or an empty value
Symbol ("Unique"); // Symbol: A unique primitive data type introduced in ES6

typeof num; // Returns 'number'
typeof str; // Returns 'string'
typeof Symbol ("Unique") // Returns 'symbol'
typeof bool; // Returns 'boolean'
typeof undefVar; // Returns 'undefined'
typeof nullVal; // Returns 'object'

console.table([typeof num,typeof str,typeof bool,typeof undefVar,typeof nullVal, typeof Symbol])

/* output
─────────┬─────────────-
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'number'    │
│ 1       │ 'string'    │
│ 2       │ 'boolean'   │
│ 3       │ 'undefined' │
│ 4       │ 'object'    │
│ 5       │ 'function'  │
└─────────┴─────────────┘
*/


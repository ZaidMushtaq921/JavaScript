// types of memory in JavaScript
// 1. Static Memory (Stack)
//  - local variables and function parameters are stored here (premetive types)
/// - it return the copy of the data
// 2. Dynamic Memory (Heap) 
//   - global variables, array elements, object properties are stored here (non premetive types)
/// - It returns reference to the data not a copy


// **************************** Stack  Memory ***********************
let x = 'Hello World';
console.log(x);
 let  y = x;
 console.log(y);
y= "zaid mushtaq"
console.log('after changing value of y is ', y ,'and x is ' , x);
// In  JS when we assign variable y = x then only  copy  of x is copied into y . So both values are not same , they have different memory location and contain different value.


// ********************** heap  memory *******************************

let userOne = {
    Email : "zaid@gmail.com"
}
 let userTwo = userOne

 console.log('before changing value of userOne email is ', userOne.Email ,' and userTwo is ', userTwo.Email) 
 
 userTwo.Email = "newEmail@gmail.com"
 console.log('after changing value of userTwo email is ', userTwo.Email ,' and userOne is ', userOne.Email)
 // non premetive use heap and share refrences and when one  changes other also gets affected.





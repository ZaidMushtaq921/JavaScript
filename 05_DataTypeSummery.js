// kis tarah data ko memory mai store kiya jataha us basis pai we have only two types .

// premitive type and non-primitive type.

//*******************  Primitve Type   ******************************
//   Primitve Type : we have 7  primitive types in javascript 
//       a) Number
//       b) String
//       c) Boolean
//       d) Undefined
//       e) Null
//       f) Symbol ( ES6 )
//       g) BigInt   ( ES8 )

let num = 45;                                    //Number
console.log(num);
let str = "Hello World";                         //String
console.log(str);
let bool = true;                                //Boolean
console.log(bool);
let undef = undefined;                           //Undefined    
console.log(undef);
let nul = null;                                 // Null                  
console.log(nul);



//******************* Non-Primitve Type   ******************************

//   Non-Primitive Type : When we declare any object or array it is called as Non-Primitive Type 
//        Objects are collection of properties , methods etc .
//        Arrays are also objects but they  have some extra property like length which all arrays has by default .

// 3 types : 
//     1) Array  
//     2) Function 
//     3) Object

let arr = [1,2,3,4];                             //Array
console.log(arr);

 const fun = function() { console.log("This is function") } ;               //Function   
fun();

let obj = {name:"John", age:25};              //Object
console.log(obj);
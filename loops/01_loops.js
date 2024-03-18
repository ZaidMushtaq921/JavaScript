// ****************************** For loop  *********************************
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

// ************************** while  loop ***********************************
let j = 0;
while (j < 5) {
  // console.log("I am inside the while loop  and my value is " + j);
  j++;
}

// ************************ do  while loop *********************************
let k = 0;
do {
  //console.log("I am inside the do while loop and my value is" + k);
  k++;
} while (k < 3);

// ************************* break statement *****************

for (let m = 0; m < 6; m++) {
  //  console.log("Value of l is : "+l+" And Value of m is :"+m);
  break;
}

// ************************* continue statement *****************
for (var o = 0; o <= 9; o++) {
  if (o % 2 == 0) {
    continue;
  }
  // console.log("The value of o is:"+o);
}

// ******************************** high order Array loops  ******************************************

// 1. for of loop
const arr1 = ["a", "b", " c"];
for (const item of arr1) {
  console.log(`Item ${item}`);
}
//   NOTE :=> On object  we cannot  use for...of loop to iterate over its properties .

// 2. for in loop  : in this we get key, so we can easily find value  corresponding to that key using bracket notation
const obj1 = { name: "John Doe", age: 45, country: "USA" };
for (const key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}

// **************************** Map ********************************

// map: it contain key  and value pair  and no duplicate  values are allowed .
let m = new Map().set(1, "one").set(2, "two").set(3, "I'm aMap");

// display array using desetructureing
for (const [key, value] of m) {
  console.log(`${key}  : ${value}`);
}

console.log(m.get(1)); // one
console.log(m.size); // 3

let ki = [...m.keys()]; // returns an array of the keys
console.log(ki); // [ 1, 2, 3]

let v = [...m.values()]; //returns an array of values
console.log(v); // ['one', 'two', "I'm aMap"]

let e = [...m.entries()]; // returns an array of entries
// [[1, 'one'], [2, 'two'] [3, "I'm aMap"]]
console.log(e);

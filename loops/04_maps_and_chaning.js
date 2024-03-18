// ********************* MAPS **************************
// map function  in js  is used  to create a new array with the results of calling a provided function on every element in an input array
// map har element pai voh kaam karta hai jo funtion mai decleare kiya hoo

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = nums.map((n) => n * 10);
console.log(newArray); // [  10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]


// *********************** chaning ***********************
// we can do chaning  of maps also like this
const result = nums
  .map((num) => num + 10) // when num  is added with 10 it will be pased  to next function and when that get executed the value will be stored in result.
  .filter((x) => x % 2 === 0);
console.log(result); // [ 12, 14, 16, 18, 20 ]




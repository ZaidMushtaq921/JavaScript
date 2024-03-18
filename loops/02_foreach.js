
// most important loop , for each  loop or simply called as enhanced for loop
// it can be used on both array and objects
// we can pass 3 parameters : 1=> value, 2=> key, 3=> full array (our wish how many to pass but in order)
// the funtion we use is a callback funtion, so we mostly use arrow funtions, we can use normal also but without name

const fruits = ["apple", "banana", "cherry", "mango", "peech"];
// way 1 : arrow  function
fruits.forEach((currentFruit, i, arr) => {
//   console.log(currentFruit, i, arr);
});

// way 2 : normal  function
fruits.forEach(function (value) {
//   console.log(value);
});

//way 3  : saperate  function refrence
function printValue(value) {
//   console.log(value);
}
fruits.forEach(printValue);

// important example: working on array contain object  
const objArray = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Roger", age: 45 },
];
objArray.forEach((singleObj) => {
//   console.log(`name : ${singleObj.name} , age: ${singleObj.age}`);
});

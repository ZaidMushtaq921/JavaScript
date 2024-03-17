// ***************************** declaration of array in javascript  ****************************

let myArray  = [10,20,"Hello",true];   // array can contain  different data types.
console.log(myArray);

let array2 =  new Array("Apple","Orange","Banana");    // creating an array using constructor function.
console.log(array2);

// we can access the elements by their index.
//  Accessing elements from the array :

console.log(myArray[0]);     // accessing first element of the array i.e., 10



// ********************* Array methods  and properties *******************



// 1.  length property : It gives us the number of elements present inside the array.
console.log(myArray.length) ;       // Output: 4


// 2. push() method :  Adds one or more elements to the end of an array and returns the new length of the array
 myArray.push('Dog');           // adding a new element
 console.log(myArray);          // Output : [10, 20, "Hello", true, 'Dog']
                                

 //3. pop()  method : It is used to remove the last element from an array and return that value.
 let removedElement= myArray.pop();      // removing last element from array and storing it into variable.
 console.log(removedElement);               // Output : Dog
 console.log(myArray);              // Output : [10, 20, "Hello", true]


 //4. shift() method : It  is used to remove the first element from an array and return that value.
 let removedFirstElement = myArray.shift();        // removing first element from array and storing it into variable.
console.log(removedFirstElement);


// 5. unshift() method :  It adds a new item to the start of an array and returns the new length of the array.

array2.unshift(50);             // Adding an element at the beginning of the array.
console.log(array2);            //   Output : [50, "Apple", "Orange", "Banana"]


// 6. includes() method :  It returns true if an array contains a specified element otherwise false.
console.log(array2.includes("Orange"));        // Output : true
console.log(array2.includes("Kiwi"));         // Output : false


//7. join() method : It joins all the elements of an array into a single string separated by a comma or by given input as -
let arr = ["John","Doe"];
console.log(arr.join());                               // Output : John,Doe
console.log(arr.join("-"));                            // Output : John-Doe


//8. reverse() method : It reverses the order of the elements in an array.
let numsArr=[1,2,3,4,5];
console.log(numsArr.reverse())                // Output : [5,4,3,2,1]


//9. sort() method : It sorts the elements of an array in place and returns the array. 
console.log(numsArr.sort());                     // Output : [1, 2, 3, 4, 5]


// 10. indexOf() method  : It returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(myArray.indexOf(20));


// 11. slice and splice  methods are very similar but they do different things:
// slice() does not modify the original array while splice() modifies the original array.
// slice () not include end whereas  splice() include both start and end parameters.

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

  console.log( " 1-> slice ",fruits.slice(1,  3));          // Output : ['Orange','Apple']
console.log("A", fruits);
console.log( " 1-> splice ",fruits.splice(1,  3));          // Output : ['Banana   ', 'Mango'] Here it removed Orange & Apple from the array.
  console.log("B", fruits);










  // ******************************* More  Array Methods ************************************

  // lets take two arrays and try to merge them
  let a= [1,2,3];
  let b=['a','b','c'];

  a.push(b);
  console.log('A-> ', a); // you can see in output b got inserted into array but as an element but we dont want that 

  console.log(a[3][2]);  // Output : c because 3 elemnt of array is array itself


  // now how we can merge them, we can use  concat or spread operator

  let a1= [1,2,3];
  let b1=['a','b','c'];

// concat :- it return new array
  let m= a1.concat(b1) ;    // Output : [1,2,3,'a','b','c']
  console.log(m);

// spread  operator: return   same as concat ,but it doesn't create new array
                      // it just add elements one by one in existing array
  let n= [...a1, ...b1]     // Output : [1,2,3,'a','b','c']
  console.log(n);



  // ********************* flat () method **********************************

                // It will flatten nested arrays
let  arrFlat = [[0, 1], [2, 3,[4,6,8]], ['a', 'b'], [4,5]];
console.log(arrFlat.flat(Infinity));              // Output : [0, 1, 2, 3, "a", "b", 4, 5]
               // If you want that all the subarray should be flat then you can use depth parameter also
               //depth=1 means only first level will be flattened




 // *************************** how to convert anything into array ****************************
 
 let  str="Hello World";

 // check str is array or not
 if (Array.isArray(str)) {
   console.log("It is an Array");
 }else{
   console.log("It is Not An Array")
 }


 let newArray = Array.from(str);        // Output : ["H","e","l","l","o"," ","W","r","d"]
 console.log(newArray);

 
 let one = "hii ";
let two = " it is me";
let three = " zaid ";
let newArray1 = Array.from(one + two + three); 
console.log(newArray1);

   // we can use of also  instead of from
  
   let newArray3 = Array.of(one,two,three)
   console.log(newArray3);             // Output : [100,  200, 300]
   

   /* Array.from():
The Array.from() method creates a new array from an iterable object (such as an array-like object or a string).
Common use cases for Array.from() include converting a string into an array of characters or copying an existing array.


Array.of():
The Array.of() method creates a new array with the specified elements as its elements
It ensures that the resulting array contains exactly the elements you pass, without any unexpected behavior.

In summary:

Use Array.from() when you need to create an array from an iterable and potentially apply a mapping function.
Use Array.of() when you want to create an array with specific elements directly.
*/
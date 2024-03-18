// how to declare string in JavaScript 

let myString = 'Hello World!';
console.log(myString);
// Output: Hello World!

let name =  "John  Doe";
let age  =  30;
let address  = `12345 Street, City`;

// old way to console  log multiple variables
console.log("Name : "+name+ ", Age :"+age + ", Address:"+ address  );

//  new way using template literals (ES6)
console.log(`Name : ${name},  Age :${age} , Address:${address }`);

// Another way to declare string using new keyword
let str = new String("I am a string object");
console.log(str);

console.log(name.length)
// Output: Name is 4 characters long 
 
console.log(str.length)
// Output: The length of the string object is 20


// how to display proptotype  methods for a string
console.log(name.__proto__);
console.log(str.__proto__);



//*********************************************  String  Methods ************************************ */
// 1. toUpperCase : used for  converting all letters in a string into uppercase .
console.log(name.toUpperCase());

// 2. length :  returns the number of characters in a string.
console.log(name.length);


// 3. charAt :  It returns the character at the specified index in a string.
console.log(name.charAt(2));


//4. indexOf : returns the first occurrence of a specified value, return -1 if the value is not found
console.log(name.indexOf('o')); // found
console.log(name.indexOf('z')); // not found 


// 5. lastIndexOf : it returns the last occurrence of a specified value, return -1 if the value is not found
console.log(name.lastIndexOf('a') ) ; //found
console.log(name.lastIndexOf( 'z')) ; //not found


// 6. slice : Extract part of a string and return the extracted parts in a new string. we can use -ve values also
let myName = "zaid mushtaq "
let slicedString= myName.slice(2,9);
console.log(slicedString);   // Output:hn D from  Index 2 till 7  i.e "Hn D"


// 7. subString  : A substring() method in JavaScript is used to extract parts of a string and return the extracted parts , the start is included and end is not included
const newString = name.substring(0,3)
console.log(newString); //  Output:joh from jhon


// 8. trim () : removes any leading and trailing white spaces in a string
console.log("   Hello World    ") 
console.log("   Hello World    ".trim()) //Output:Hello World


// 9. split() : splits a string into an array of substrings based on a specified separator , or regular expression.
let  newstr="This is a simple sentence.";
let  wordsArray = newstr.split(" ", 2); // split() method splits a String object into an array of substrings based on a specified separator, and limit => how many splits 
console.log(wordsArray);


// 10. replace  or replaceAll (oldValue , Newvalue): replaces some or all matches of a pattern / oldValue with a newValue
let url = 'https://www.google.com/search';
console.log(url.replace('.','-') ); 
console.log(url.replaceAll('.','-') ); // Replacing '/' with '-'


// 11. includes () : It determines whether a string contains the characters of a specified string. it is case  sensitive.
console.log(myName.includes('Zaid'))
console.log(myName.includes('zaid'))
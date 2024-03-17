// we can declare objects using constructor  function or as literals

// singleton  pattern - a single instance of an object is created and shared among all the clients.
// Object.create

// literals

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  "square use": 123456,
  age: 18,
  islogedIn: false,
  lastLogs: ["monday", "sunday"],
};

// we can acess data using dot  notation (.) or square brackets ([])
console.log(person.getFullName()); // dot  notation
console.log(person["age"]); // square  bracket notation

// now here we compulsory have to use square bracket notation
console.log(person["square use"]);

// how to use symbol as a key
const symKey = Symbol("key");
const obj = {
  [symKey]: "value",
};
console.log(obj[symKey]);
console.log(typeof symKey); // symbol

//************************ how to change value inside obj  ************************ */

const obj2 = {
  email: "zaid@gmail.com",
};
console.log(obj2);

obj2["email"] = " zaid@ptu.in";
console.log(obj2);

// freez obj so no one can change
Object.freeze(obj2);
obj2["email"] = " zaid@ptuniv.edu.in";
console.log(obj2);

//*******************  how to add new property in object ***/

person["newProperty"] = "i am new";
console.log(person);

// how to add function  in an object
person.greeting = function () {
  console.log("good morning");
};
console.log(person.greeting());

// ******************** object inside object ******************************

const regularUser = {
  email: "someone@gmail.com",
  location: {
    city: "srinager",
    other: {
      state: "kashmir",
      country: "india",
      continent: "Asia",
    },
  },
};

//access
console.log(regularUser.location.city); // srinager
console.log(regularUser.location.other.state); // kashmir

// ***************** merge  two objects *******************

const user1 = { name: "Zaid", age: 30 };
const user2 = { address: { street: "Anand nagar", pincode: 400605 } };
// using  Object.assign() method of javascript
let mergedObj = Object.assign({}, user1, user2); // {}  is used to give empty object  as a target  here we are not changing the original obej
console.log(mergedObj);
//   using spread  operator  ...
let mergeUsingSpread = { ...user1, ...user2 };
console.log(mergeUsingSpread);

// ***************** delete a key from the object *******************
delete person.email;
console.log(person);

// ***************** check if property exists or not *******************
if ("age" in person) {
  console.log("property exist");
} else {
  console.log("property doesnot exist");
}

// ***************** get keys and values of object   *******************

let objcheck = {
  name: "zaid",
  age: 28,
  country: "pakistan",
};
// return as array
let key_objcheck = Object.keys(objcheck);
let value_objcheck = Object.values(objcheck);
console.log(key_objcheck);
console.log(value_objcheck);

// ****************  convert an object into array of pairs **********
let arrOfPair = Object.entries(objcheck);
console.log(arrOfPair);

//  ****************  check property is present  or not in the object using hasOwnProperty() method **********

console.log(objcheck.hasOwnProperty("name"));




// ************** object destructuring  ****************

const user = {
  name: "Zaid",
  age: 30,
  country: "Pakistan",
};

const { name, age } = user  // this is called  destructuring
console.log(`My Name is ${name} and  I am ${age} old `);


 // lets use it in function
 function showUserDetails({ name, age,country }) {
   console.log(`My Name is ${name} ,I am ${age} old and i am from  ${country}`);
 }

showUserDetails(user);
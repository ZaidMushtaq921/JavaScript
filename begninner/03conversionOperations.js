

//=======================================================================
//let score = "33"
// let score = "33abc"
// let score = "zaid"
// let score = true
// let score = null
// let score = NaN
// let score = undefined

/*
console.log(typeof(score))
 let conversedScore = Number(score)
 console.log("The converted value is "+ conversedScore)

*/
//"33" => output was  number
// "33abc" => output was NaN
// "zaid" => output was NaN
// true => output was boolean
// null => output was 0
// NaN => output was NaN
// undefine => output was NaN


//=======================================================================


// similerly we can convert into boolean also 

//let score = "33";
// let score = "";
// let score = 1;

// let boolScore= Boolean(score);
// console.log("The converted value is "+ boolScore)

 //"33"=> output was true
 // ""=> output was false
 // 1=> output was true

 //=======================================================================

//  let score = "33";

//  let boolScore= String(score);

//  console.log("The converted value is "+ boolScore)
//  console.log("The converted value is "+ typeof (boolScore));

//   The converted value is  33
//   The converted value is  string




//*******************   OPERATIONS    ********************
 
 let value = 3
 let negValue = - value
 console.log(negValue);


  //=======================================================================
  /*
 // arthematic operations
 let x = 5 + 7 
 console.log(x)
 let y = 9 - 3
 console.log(y)
 let z = 4 * 6
 console.log(z)
 let  m = 8 / 2
 console.log(m)
 let n =  10 % 2
 console.log(n)
 let o = 2**4
 console.log(o)
 */
 //=======================================================================
 /*
 //String concatination
 let firstName ="John"
 let lastName="Doe"
 let fullName = firstName + " " +lastName
 console.log(fullName) //  output => John Doe

// ***************** different conversions *******
console.log("3" + 4) // output =>  34
console.log(3 + "5")// output =>  35

console.log(1 + 2 + "3"); //output  =>  33 because first 1 and 2 will be treated as number then sum will be treated with 3 as string and now  it's a string now

console.log( "3" +1 + 2 + 4 ); //output  =>  3124 because  of the implicit conversion of non-string values to a String during concatenation i.e: all will be treated as string becuase of first string 3

console.log(true + true + false); // output => 2

console.log(false + ""+ false); //output => falsefalse


console.log(+true) // output => 1
console.log(-true) // output => -1
console.log(!true) // output => False
console.log(!false) // output => True

*/
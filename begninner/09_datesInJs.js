// ***************************** Dates  ************************************

let myDate = new Date()
console.log(myDate)
// Output: 2024-03-17T05:20:01.478Z

/******************* Geting date parts using methods ********************/

// 1. tosring  method - returns a string representation of the date and time
let strDate = myDate.toString();
console.log("String Method : ",strDate); //output: String Method :  Sun Mar 17 2024 10:51:22 GMT+0530 (India Standard Time)



//2. toLocalString () - returns a local string representation of the date and time
let locStrDate= myDate.toLocaleString();
console.log(locStrDate);
//Output : 17/3/2024, 10:53:52 am


//3. getFullYear() - returns the year (four digits for four-digit years)
let yr = myDate.getFullYear()
console.log("The current Year is "+yr)




//4. getMonth() - returns the month (from 0 to 11) 
let mon = myDate.getMonth()+1;
console.log("The Current Month is "+mon+".");

//5. toDateString() : returns a string representing the date as a string in the current locale. the format of the string depends on the locale.
let datSt=myDate.toDateString();
console.log(datSt);

//6. toISOString() :  It will return the date in ISO format i.e., YYYY-MM-DDTHH:mm:ss.SSSZ
let ISOdate=myDate.toISOString();
console.log('The ISO format of the  date is ' + ISOdate);




// ******************************** how to create custom Date  object **********************************

let customDate =  new Date(2024,2,17); //months are zero based so march is 2 here
console.log(customDate);
console.log(customDate.getDay()); // it gives the week day starting from 0- Sunday to Saturday
                                 // Output : 0 (for Sunday)

 let customDate2 = new Date(2024,2,17,4,56);
 console.log(customDate2.toLocaleDateString());       
 
 let customDate3 = new Date("2024-01-23");
 console.log(customDate3.toLocaleString());


 // ********************************  time stamp  methods ***********************************

 let timeStamp = Date.now() // It returns the number of milliseconds since January  1, 1970. A timestamp provides an absolute measure of time rather than a relative one. 

 console.log(timeStamp); // output: it will be in miliseconds



 // how can we compae two dates , we will use timestamp menthod
 let pastTime = new Date(2024,2,17);
 console.log(pastTime.getTime());
 


let diffInMiliSec = timeStamp - pastTime ;
let diffInSeconds = Math.floor(diffInMiliSec/1000);    //it will give difference in seconds
console.log(diffInSeconds + " Seconds")



// how to convert second into time  like hour and minutes etc..
 let hrs =Math.floor(diffInSeconds/(60*60));   // 1 Hour = 60*60 Sec
 let min = Math.floor((diffInSeconds % (60*60)) / 60 );     // 1 Minute = 60 Sec    
 let sec = Math.floor(diffInSeconds % 60 )          // Remaining Seconds

 console.log(hrs+" Hours "+min+ " Minutes "+sec+" Seconds ")


// ************************ main methods  of date object ***************************************


 let currDate =new Date();
 console.log(currDate)                               // current date & Time
 console.log(currDate.getDate());                        // Current Day of the month
 console.log(currDate.getMonth()+1)                       //Current Month 
 console.log(currDate.getFullYear())                  // Full Year 
 console.log(currDate.getHours())                      // Current Hour
 console.log(currDate.getMinutes())                    // Current Minutes
 console.log(currDate.getSeconds());                     // Current Seconds
 console.log(currDate.getMilliseconds());                 // Milli Seconds 
 console.log("Time is :"+currDate.toLocaleString());   // Local Language Format 




 // ***************************** customize localString format  ******************************

 let D = new  Date();
 let  options = { weekday: 'long', year: 'numeric', month: 'long' , day:'numeric'};
 console.log(D.toLocaleDateString('en-US',options));  
 
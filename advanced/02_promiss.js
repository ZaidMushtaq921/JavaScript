// ********************** promises*************************** 


// promise take function with  resolve and reject callbacks. if our promiss get  resolved, it will call the resolve() and it will call reject().
// resolve chu connect karan then seeth , and reject chu connect karan catch seeth. 
const promiseOne = new Promise(function(resolve, reject){ 
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// async await: it  will wait until the promise gets resolved/rejected and then continue. It can only be used in an async function.




async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() 
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// which way is better async await or  thenable ???
/*
Both async/await and .then() are valid ways to handle promises in JavaScript, and the choice between them depends on the specific use case and personal preference.

Async/await is generally considered more readable and easier to write, especially for synchronous-style code. It allows for cleaner error handling using try/catch blocks and reduces the amount of nesting required for multiple asynchronous operations. However, it can lead to unhandled promise rejections if not used properly.

On the other hand, .then() is more flexible and can handle multiple asynchronous operations more easily. It also allows for chaining of promises and can be used with .catch() for error handling. However, it can lead to "callback hell" or nested promises that are difficult to read and maintain.

In the given example, async/await is a better choice because it simplifies the code and makes it more readable. The code is easier to understand and follow, and the error handling is more straightforward using try/catch blocks.

However, if the code required more complex asynchronous operations, such as chaining or multiple parallel operations, then .then() might be a better choice.

In summary, both async/await and .then() have their advantages and disadvantages, and the choice between them depends on the specific use case and personal preference. In the given example, async/await is the better choice due to its simplicity and readability.
*/
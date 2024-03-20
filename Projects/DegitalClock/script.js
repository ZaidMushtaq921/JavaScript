const clock = document.querySelector('#clock');
// setInterval : it  will execute the function after every given time in milliseconds
setInterval(()=>{
let  date=new Date();
clock.innerHTML=(date.toLocaleTimeString());
},1000)
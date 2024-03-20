const myBody = document.querySelector("body");
const myButtons = document.querySelectorAll(".button");

myButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetid = e.target.id;
    myBody.style.backgroundColor = targetid;
  });
});
 
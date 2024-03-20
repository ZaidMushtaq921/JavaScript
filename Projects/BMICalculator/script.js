const form = document.querySelector("form");
console.log(form);

// if we select height or weight here when form get loadded , we will get empty value in height, so not good way
// const height = document.querySelector( "#height").value;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh on submit
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  // console.log(height , weight);
  const result = document.querySelector("#results");
  // console.log(result);
  if (isNaN(height) || isNaN(weight) || weight < 0 || height < 0 ||weight === "" || height === "" ) {
    alert("Please enter a valid number for Height and Weight!");
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}</br>`;
    if (bmi <= 18.49) {
      result.style.color = "red";
      result.innerText += " You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
      result.style.color = "green";
      result.innerText += " Your weight is normal.";
    } else if (bmi >= 25.0 && bmi <= 29.99) {
      result.style.color = "orange";
      result.innerText += " You have overweight.";
    } else {
      result.style.color = "blueviolet";
      result.innerText += " You are obese.";
    }
  }
});

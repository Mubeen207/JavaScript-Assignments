let userName = document.getElementById("userName");
let course = document.getElementById("course");
let percentage = document.getElementById("percentage");
let result = document.getElementById("result");
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (percentage.value > 70 && percentage.value <= 100) {
    result.innerHTML = `
                        Hello ${userName.value}<br>
                        Your Course Is ${course.value}<br>
                        Your Percentage is ${percentage.value}<br>
                        Keep Up
            `;
  } else if (percentage.value < 70 && percentage.value > 1) {
    result.innerHTML = `
                          Hello ${userName.value}<br>
                          Your Course Is ${course.value}<br>
                          Your Percentage is ${percentage.value}<br> 
                          Need To Work Hard
              `;
  } else {
    result.innerHTML = `
                          Enter Value Under 100
                `;
  }
});

let result = document.getElementById("result");
let form = document.querySelector("form");
let grade = "";
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let marks = Number(document.getElementById("marks").value);
  if (marks < 40) {
    result.innerHTML = `
              Status: Fail<br>
              Grade: F
      `;
    grade = "";
    marks = "";
  } else if (marks > 40 && marks <= 100) {
    switch (true) {
      case marks >= 90:
        grade = "A+1";
        break;
      case marks >= 80:
        grade = "A-One";
        break;
      case marks >= 70:
        grade = "A";
        break;
      case marks >= 60:
        grade = "B";
        break;
      case marks >= 50:
        grade = "C";
        break;
      default:
        grade = "D";
    }
    result.innerHTML = `
    Status: Pass<br>
    Grade: ${grade}
    `;
    grade = "";
    marks = "";
  } else {
    result.innerHTML = "Enter Marks Under 100";
  }
});

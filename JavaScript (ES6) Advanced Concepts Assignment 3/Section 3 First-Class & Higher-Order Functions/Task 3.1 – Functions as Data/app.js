let myName = "CD";
console.log("My Initial Name Is Cd");

function changingFunction(agument) {
  changedFunction(agument);
}

function changedFunction(FromFirstFunction) {
  myName = FromFirstFunction;
}
changingFunction("Mubeen-Ul-Islam");

console.log("This is After Name Changed" , myName);

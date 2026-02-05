function setRunTaem(functionn, time) {
  console.log(`Running function ${time} times`);
  for (let index = 0; index < time; index++) {
    functionn();
  }
}

function sayCd() {
  console.log("Hello CD");
}
function rendomNumber() {
  let rendom = Math.ceil(Math.random() * 100);
  console.log(rendom);
}

setRunTaem(sayCd, 3);
setRunTaem(rendomNumber, 5);

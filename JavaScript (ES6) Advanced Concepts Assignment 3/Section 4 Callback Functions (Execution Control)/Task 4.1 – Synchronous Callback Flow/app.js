function callBack1() {
  console.log("CallBack Function 1 Started");
  console.log("CallBack Function 1 Ended");
  callBack2();
}
function callBack2() {
  console.log("CallBack Function 2 Started");
  console.log("CallBack Function 2 Ended");
  callBack3();
}
function callBack3() {
  console.log("CallBack Function 3 Started");
  console.log("CallBack Function 3 Ended");
}
callBack1();

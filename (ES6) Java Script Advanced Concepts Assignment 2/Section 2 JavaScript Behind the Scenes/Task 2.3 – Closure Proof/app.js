function outer() {
  let count = 10;

  return function inner() {
    console.log("Inner see count:", count);
  };
}

let closeFun = outer();

closeFun();

function outer2() {
  let count = 50;
  return function inner() {
    console.log("Inner see count:", count);
  };
}

let closeFun2 = outer2();
closeFun2();

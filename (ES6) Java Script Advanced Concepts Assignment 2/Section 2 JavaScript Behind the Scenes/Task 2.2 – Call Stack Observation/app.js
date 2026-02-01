function first() {
  console.log("Entering first");

  second();

  console.log("Exiting first");
}

function second() {
  console.log("Entering second");

  third();

  console.log("Exiting second");
}

function third() {
  console.log("Entering third");

  setTimeout(() => {
    console.log("in third (setTimeout)");
  }, 0);

  console.log("Exiting third");
}

first();
    
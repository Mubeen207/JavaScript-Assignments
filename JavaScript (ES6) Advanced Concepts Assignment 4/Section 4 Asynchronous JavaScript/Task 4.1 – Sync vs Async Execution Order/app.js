console.log("Start From There");

function normalFunction() {
  console.log("normal function");
}

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

normalFunction();
console.log("End From There");

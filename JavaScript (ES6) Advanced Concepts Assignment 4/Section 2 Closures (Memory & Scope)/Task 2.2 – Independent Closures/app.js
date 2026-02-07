function createCounter() {
  let count = 0;
  return function (message) {
    count++;
    console.log(count, message);
  };
}

let countA = createCounter();
let countB = createCounter();
countA("This is countA");
countA("This is countA");
countB("This is countB");
countA("This is countA");
countB("This is countB");

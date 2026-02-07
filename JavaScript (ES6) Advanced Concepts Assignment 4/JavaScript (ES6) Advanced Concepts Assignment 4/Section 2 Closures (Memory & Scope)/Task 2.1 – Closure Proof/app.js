function createCounter() {
  let count = 0;
  return function (message) {
    count++;
    console.log(count, message);
  };
}

let myCounter = createCounter();
myCounter("First call");
myCounter("Second call");
myCounter("Third call");

let anotherCounter = createCounter();
anotherCounter("First call to another counter");
anotherCounter("Second call to another counter");

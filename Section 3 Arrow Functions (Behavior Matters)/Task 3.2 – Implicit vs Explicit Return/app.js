const numbers = [1, 2, 3, 4];

const doubledImplicit = numbers.map((num) => num * 2);

const doubledExplicit = numbers.map((num) => {
  return num * 2;
});

console.log("Implicit return:", doubledImplicit);
console.log("Explicit return:", doubledExplicit);

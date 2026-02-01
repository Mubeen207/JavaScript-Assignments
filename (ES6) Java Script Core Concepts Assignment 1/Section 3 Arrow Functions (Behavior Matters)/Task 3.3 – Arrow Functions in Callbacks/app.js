const numbers = [1, 2, 3, 4];

const squaresNormal = numbers.map(function (num) {
  return num * num;
});
console.log("Normal function callback:", squaresNormal);

const squaresArrow = numbers.map((num) => num * num);
console.log("Arrow function callback:", squaresArrow);

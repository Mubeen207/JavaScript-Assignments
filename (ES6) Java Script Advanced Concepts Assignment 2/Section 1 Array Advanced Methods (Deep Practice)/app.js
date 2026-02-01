let numbers = [1, 2, 3, 4];

let mapMethode = numbers.map((num) => {
  console.log("map numbers: ", num);
  let result = num * 2;
  console.log("Multiplaying Map Numbers: ", result);
  return result;
});
console.log("Map Final: ", mapMethode);

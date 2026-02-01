let allSum = (...nums) => {
  console.log(nums);

  let result = 0;
  nums.map((num) => {
    result += num;
  });
  console.log(result);
};
let randomNums = Array.from(
  { length: 15 },
  () => Math.floor(Math.random() * 100) + 1,
);
allSum(...randomNums);

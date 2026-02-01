{
  let marks = [45, 72, 88, 30, 90];

  let filter = marks.filter((m) => {
    console.log("filter Mark: ", m);
    return m >= 50;
  });
  filter.map((num) => {
    console.log("Greater Then 50 Marks: ", num);
  });
  let total = filter.reduce((sum, mark) => {
    console.log("reduce sum: ", sum);
    console.log("reduce mark: ", mark);
    return sum + mark;
  }, 0);
  console.log("total Result: ", total);
}
//-------------------------------------------------------------
{
  let numbers = [1, 2, 3, 4, 5];

  function localMap(numArr, callBackFunction) {
    let result = [];
    for (let i = 0; i <= numArr.length - 1; i++) {
      console.log("Local Map Values In For Loop: ", numArr[i]);
      let mapedValue = callBackFunction(numArr[i], i, numArr);
      result.push(mapedValue);
    }
    return result;
  }

  let localMapResult = localMap(numbers, (num) => {
    return num * 2;
  });
  console.log(localMapResult);
}
//-------------------------------------------------------------

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
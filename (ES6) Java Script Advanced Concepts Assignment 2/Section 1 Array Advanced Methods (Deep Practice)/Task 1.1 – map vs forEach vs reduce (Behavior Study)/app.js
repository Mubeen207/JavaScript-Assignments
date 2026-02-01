let numbers = [1, 2, 3, 4];
{
  let mapMethode = numbers.map((num) => {
    console.log("map numbers: ", num);
    let result = num * 2;
    console.log("Multiplaying Map Numbers: ", result);
    return result;
  });
  console.log("Map Final: ", mapMethode);
}
//---------------------------------------------------------------

{
  let forEatchResult = [];

  numbers.forEach((num) => {
    console.log("forEach numbers: ", num);
    let result = num * 2;
    console.log("Multiplaying forEach Numbers: ", result);
    return forEatchResult.push(result);
  });
  console.log("forEEach Final: ", forEatchResult);
}
//---------------------------------------------------------------

{
  let reduceResult = numbers.reduce((acc, num) => {
    console.log("Reduce Pre Total: ", acc);
    console.log("Reduce num: ", num);
    let result = num * 2;
    acc.push(result);
    console.log("reduce outPut: ", acc);
    return acc;
  }, []);
  console.log("reuce Final: ", reduceResult);
}

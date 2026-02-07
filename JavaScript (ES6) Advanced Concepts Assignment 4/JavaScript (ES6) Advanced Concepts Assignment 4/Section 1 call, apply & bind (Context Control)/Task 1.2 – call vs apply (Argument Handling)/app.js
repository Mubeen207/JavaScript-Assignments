function rendomFunction(a, b, c) {
  console.log(`a ${a}, b ${b}, c ${c}`);
}
rendomFunction.call(null, 1, 2, 3);
rendomFunction.apply(null, [4, 5, 6]);
rendomFunction.call(null, 7, 8);
rendomFunction.apply(null, [9, 10]);

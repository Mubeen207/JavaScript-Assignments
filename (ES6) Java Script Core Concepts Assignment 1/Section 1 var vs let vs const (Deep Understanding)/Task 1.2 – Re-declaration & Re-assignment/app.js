try {
  var value = 10;
  var value = 20;
  console.log("var re-declare: success ->", value);
} catch (e) {
  console.log("var re-declare: failed");
}

try {
  let value2 = 5;
  console.log("let first declaration ->", value2);
  {
    let value2 = 15;
    console.log("let re-declare in block scope ->", value2);
  }
  console.log("let outside block ->", value2);
} catch (e) {
  console.log("let re-declare: failed ->", e.message);
}

try {
  const coreZ = { num: 1 };
  coreZ.num = 99;
  console.log("const indirect modify: success ->", coreZ.num);
} catch (e) {
  console.log("const indirect modify: failed");
}

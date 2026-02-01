let orignal = {
  name: "Mubeen",
  age: 18,
  class: "SMIT - Modren Web Devlopment Course",
};

console.log("This is Orignal Before Copy Making: ", orignal);

let copy = orignal;

console.log("This is Copy Before Copy Changing: ", copy);

copy.name = "CD";

console.log("This is Orignal After Copy Changing: ", orignal);
console.log("This is Copy After Copy Changing: ", copy);

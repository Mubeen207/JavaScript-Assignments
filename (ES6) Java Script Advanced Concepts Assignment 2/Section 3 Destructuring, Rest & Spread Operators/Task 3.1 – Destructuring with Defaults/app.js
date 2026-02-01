let myDetail = {
  myName: "CD",
  age: "18",
};

let { myName, age, city = "Karachi" } = myDetail;

console.log("Name: ", myName);
console.log("Age: ", age);
console.log("City: ", city);
console.log("Object: ", myDetail);

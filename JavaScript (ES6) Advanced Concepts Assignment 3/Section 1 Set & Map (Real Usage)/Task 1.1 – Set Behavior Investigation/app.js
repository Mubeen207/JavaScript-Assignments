const mySet = new Set();

mySet.add(10);
console.log("After adding number 10", mySet, "Size", mySet.size);

mySet.add("Hello");
console.log("After adding string Hello", mySet, "Size", mySet.size);

mySet.add(true);
console.log("After adding boolean true", mySet, "Size", mySet.size);

const myObject = { name: "Ali", age: 20 };
mySet.add(myObject);
console.log("After adding object", mySet, "Size", mySet.size);

const myArray = [1, 2, 3];
mySet.add(myArray);
console.log("After adding array", mySet, "Size", mySet.size);

mySet.add(10);
mySet.add("Hello");
mySet.add(myArray);
console.log("After adding duplicate values", mySet, "Size", mySet.size);

myObject.age = 25;
console.log("After modifying object", mySet);

console.log("Final Set contents", mySet);
console.log("Final Set size", mySet.size);

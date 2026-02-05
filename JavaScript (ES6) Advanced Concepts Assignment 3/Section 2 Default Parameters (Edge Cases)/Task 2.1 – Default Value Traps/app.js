function greet(name = "CD", age = 18) {
  console.log("Input value", { name, age });
  return `Hello ${name}, Age ${age}`;
}

console.log(greet("Ali", 25));

console.log(greet(undefined, 30));

console.log(greet(null, null));

console.log(greet());

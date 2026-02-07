class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `My name Is ${this.name} and I am ${this.age} years old.`;
  }
}

let user1 = new User("Mubeen", 19);
let user2 = new User("Zaheer", 20);
let user3 = new User("Owais", 23);

console.log(user1.greet());
console.log(user2.greet());
console.log(user3.greet());

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);

console.log(user1.greet === user2.greet && user2.greet === user3.greet);

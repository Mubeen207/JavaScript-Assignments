class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

User.prototype.greet = function () {
  return `My name Is ${this.name} and I am ${this.age} years old.`;
};

const user1 = new User("Mubeen", 19);
const user2 = new User("Zaheer", 20);
const user3 = new User("Owais", 23);

console.log(user1.greet());
console.log(user2.greet());
console.log(user3.greet());

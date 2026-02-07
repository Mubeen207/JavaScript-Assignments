const person = {
  name: "Mubeen",
  greet: function () {
    console.log("My Name is ", this.name);
  },
};

person.greet();

const greetFunction = person.greet;

greetFunction();

greetFunction.call(person);

const cars = [
  "Audi",
  "Mercedes",
  "Bentley",
  "Porsche",
  "Aston Martin",
  "BMW",
  "Saab",
  "Volvo",
  "Tesla",
  "Ferrari",
  "Lamborghini",
  "Toyota",
  "Honda",
  "Ford",
  "Nissan",
];

for (let i = 0; i < cars.length; i++) {
  console.log(`This is A for Loop ${cars[i]} Index No Is ${i}`);
}
for (let car of cars) {
  console.log(`This is A for..of Loop ${car}`);
}
for (let car in cars) {
  console.log(`This is A for..in Loop ${cars[car]} Index No Is ${car}`);
}

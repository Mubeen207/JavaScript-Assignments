function myData(faun = () => "CD", obj = { value: 804 }) {
  console.log("Beafor Changing Faunction", faun(), obj);

  obj.value = 8040804;

  console.log("Aftor Changing Faunction", faun(), obj);
}
myData();

myData(() => "Imran");
let khObj = { value: 8040 };
myData(undefined, khObj);
myData(() => "Imran Khan ", { value: 804 });

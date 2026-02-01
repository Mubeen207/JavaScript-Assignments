try {
  console.log("varVar:", varVar);
} catch (e) {
  console.log("varVar failed:", e.message);
}

try {
  console.log("letVar:", letVar);
} catch (e) {
  console.log("letVar failed:", e.message);
}

try {
  console.log("constVar:", constVar);
} catch (e) {
  console.log("constVar failed:", e.message);
}

try {
  console.log("add(2,3):", add(2, 3));
} catch (e) {
  console.log("add failed:", e.message);
}

var varVar = 10;
let letVar = 20;
const constVar = 30;

function add(a, b) {
  return a + b;
}

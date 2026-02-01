for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`var loop i: ${i}`);
  }, i * 300);
}

for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log(`let loop j: ${j}`);
  }, j * 200);
}

for (let k = 1; k <= 3; k++) {
  const val = k;
  setTimeout(() => {
    console.log(`const loop val: ${val}`);
  }, k * 250);
}

setTimeout(() => {
  console.log("All loops completed.");
}, 1000);

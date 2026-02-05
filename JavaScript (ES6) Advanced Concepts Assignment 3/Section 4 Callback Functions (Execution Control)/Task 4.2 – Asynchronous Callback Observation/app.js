function pehla(callback) {
  console.log("pehla start", new Date().toLocaleTimeString());
  setTimeout(() => {
    console.log("pehla end", new Date().toLocaleTimeString());
    callback();
  }, 2000);
}

function dosra(callback) {
  console.log("dosra start", new Date().toLocaleTimeString());
  setTimeout(() => {
    console.log("dosra end", new Date().toLocaleTimeString());
    callback();
  }, 1000);
}

function teisra() {
  console.log("teisra start", new Date().toLocaleTimeString());
  setTimeout(() => {
    console.log("teisra end", new Date().toLocaleTimeString());
  }, 500);
}

console.log("yahan say order statrt hoa");
pehla(() => {
  dosra(() => {
    teisra();
  });
});
console.log("yahan pr order khatam hua");

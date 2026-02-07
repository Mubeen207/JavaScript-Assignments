function delayedGreeting(flag) {
  if (flag) {
    console.log(`Hello, ${this.name} Using Bind`);
  } else {
    console.log(`Hello ${this.name} this is not bind using`);
  }
}
delayedGreeting(false);
setTimeout(delayedGreeting.bind({ name: "Mubeen ul islam" }, true), 2000);

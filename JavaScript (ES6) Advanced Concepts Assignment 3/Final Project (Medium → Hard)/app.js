const tasks = new Map();

function addTask(name, fn = () => console.log("Create All AssignMents")) {
  tasks.set(name, fn);
}

function runTask(name, repeat = 1) {
  const task = tasks.get(name);
  if (task) {
    for (let i = 0; i < repeat; i++) {
      task();
    }
  } else {
    console.log("Task not found");
  }
}

function runAll(repeat = 1) {
  for (const task of tasks.values()) {
    for (let i = 0; i < repeat; i++) {
      task();
    }
  }
}

addTask("sayHello", () => console.log("Hello!"));
addTask("showTime", () =>
  console.log("Time", new Date().toLocaleTimeString()),
);
addTask("Create All AssignMents");

runTask("sayHello", 2);
runAll(1);

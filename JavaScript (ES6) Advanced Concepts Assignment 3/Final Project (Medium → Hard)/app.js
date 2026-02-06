const tasks = new Map();
let addTaskFunction = (
  name,
  func = () => console.log("This is a default Value"),
) => {
  tasks.set(name, func);
  console.log(tasks);
};

let taskExicuter = (name, callBack) => {
  let taskName = tasks.get(name);
  if (taskName) {
    try {
      taskName();
      callBack(true);
    } catch {
      callBack(false);
    }
  } else {
    callBack(false);
  }
};

let callBack = (flag) => {
  if (flag) {
    console.log("Task Run SuccessFully");
  } else {
    console.log("Task NOt Run SuccessFully");
  }
};
addTaskFunction("Mubeen", () => console.log("This is My Name Mubeen Ul ISlam"));
addTaskFunction("CD", () => console.log("This is My Nick Name CD"));
taskExicuter("Mubeen", callBack);
taskExicuter("CD", callBack);
taskExicuter("Zaheer", callBack);

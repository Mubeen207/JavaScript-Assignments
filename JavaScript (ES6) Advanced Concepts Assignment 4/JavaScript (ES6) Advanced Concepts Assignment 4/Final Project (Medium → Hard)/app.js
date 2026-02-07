class TaskManager {
  constructor() {
    let tasks = [];
    this.addTasks = (taskName, time, taskNum) => {
      tasks.push({ taskName, time, taskNum });
      console.log(`Task ${taskName} added`);
    };
    this.listTasks = () => {
      console.log("Task List Is ", tasks);
    };
    this.runTasks = () => {
      console.log("Task Is Runing");

      tasks.forEach((task) => {
        setTimeout(() => {
          console.log(`${task.taskNum} Completed`);
        }, task.time);
      });
    };
  }
}

const sirTalal = new TaskManager();

sirTalal.addTasks("Create JS File", 2000, "Task 1");
sirTalal.addTasks("Write The Code", 1000, "Task 2");
sirTalal.addTasks("Push On Github", 3000, "Task 3");

sirTalal.listTasks();
sirTalal.runTasks();

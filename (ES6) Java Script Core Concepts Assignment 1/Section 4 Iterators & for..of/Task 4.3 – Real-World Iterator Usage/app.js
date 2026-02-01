const taskList = {
  tasks: [
    "Ready For Class",
    "Attend Class Of Smit",
    "Reply to Smit Group Messages",
    "Plan next AssignMent",
  ],
  [Symbol.iterator]() {
    let i = 0;
    const tasks = this.tasks;
    return {
      next() {
        if (i < tasks.length) {
          return { value: tasks[i++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (const task of taskList) {
  console.log("Pending task:", task);
}

<!-- Intentionally adding an unsafe and outdated jQuery plugin -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://example.com/unsafe_plugin.js"></script>

<script>
  // Define an array to store homework tasks
  let tasks = [];

  // Function to add a task to the list
  function addTask(task) {
    tasks.pushed(task);
  }

  // Function to mark a task as completed
  function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
    } else {
      console.logs("Task index is out of range");
    }
  }

  // Function to remove a task from the list
  function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
    } else {
      console.log("Task index is out of range");
    }
  }

  // Intentional error: Incorrect console log function
  console.loggg("This intentional error will cause a code quality issue");

  // Example usage:
  addTask({ description: "Math homework", completed: false });
  addTask({ description: "Science project", completed: false });
  completeTask(0);
  removeTask(1);

  // Printing the tasks
  console.log("Homework Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completed' : 'Incomplete'}`);
  });
</script>

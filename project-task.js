/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
   console.log("Original To-Do List:");
   console.log(todos)
   console.log("n" + "=".repeat(50) +"\n");
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  const incompleteTasks = todos.filter((task) => !task.complete);

  console.log("Task 1: Filtered Incomplete Tasks");
  console.log(incompleteTasks);
  console.log("\n" + "=".repeat(50) + "\n");
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  const sortedByPriority = [...todos].sort((a, b) => a.priority - b.priority);
  console.log("Task 2: Tasks Sorted by Priority");
  console.log(sortedByPriority);
  console.log("\n" + "=".repeat(50) + "\n");
  /*
  🔹 Task 3: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  const incompleteSortedByPriority = todos
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - a.priority);

  console.log("Task 3: Incomplete Task Sorted by Priority");
  console.log(incompleteSortedByPriority);
  console.log("\n" + "=".repeat(50) + "\n");
  /*
  🔹 Task 4: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
    const allCompleted = todos.map((task) => ({
    ...task,
    completed: true
  }));

  console.log("Task 4: All Tasks Marked as Completed");
  console.log(allCompleted);
  console.log("\n" + "=".repeat(50) + "\n");
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  console.log("\na) Filtered array of incomplete tasks:");
  console.log(incompleteTasks);

  console.log("\nb) Array sorted by priority:");
  console.log(sortedByPriority);

  console.log("\nc) New array where all tasks are marked as completed:");
  console.log(allCompleted);

  console.log("\nd) Final list of incomplete tasks sorted by priority:");
  console.log(incompleteSortedByPriority);
    

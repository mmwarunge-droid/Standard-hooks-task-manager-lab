import { useState, useId, useContext } from "react";
import { TaskContext } from "./context/TaskContext.jsx";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useContext(TaskContext);
  const inputId = useId(); // for accessibility

  function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty submissions
    if (!taskName.trim()) return;

    addTask(taskName);

    setTaskName(""); // Clear input
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>New Task:</label>
      <input
        id={inputId}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

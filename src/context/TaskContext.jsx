 import { createContext, useState, useEffect } from "react";

 //creates the context
 export const TaskContext = createContext();

 // provider component
 export function TaskProvider({ children }) {
 
 const [tasks, setTasks] = useState([]);
  // Fetch tasks from backend on mount
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
 .then((res) => res.json())
 .then((data) => setTasks(data))
 .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  // Add a new task
  function addTask(title) {
  const newTask = {
    title,
    completed: false
  };
    fetch("http://localhost:6001/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
    })
       .then((res) => res.json())
      .then(data => {
        setTasks(prev => [...prev, data])
    })
      .catch((err) => console.error("Add error:", err));
  }

  // Toggle task completion
  function toggleComplete(id) {
       const task = tasks.find(t => t.id === id);
    if (!task) return;

    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed })
    })

     .then(res => res.json())
     .then(updatedTask => {
        // Update local state
      setTasks(prev =>
         prev.map((t) => t.id === id ? updatedTask : t
    )
      );
    })
    .catch((err) => console.error("Toggle error:", err));
  }
   // Provide tasks and functions to all children
  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
 }
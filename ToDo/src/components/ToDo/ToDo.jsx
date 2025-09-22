import { useState } from "react";
import styles from "./ToDo.module.css";

export default function ToDo() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const handleEdit = (index) => {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const newTasks = tasks.map((t, i) => (i === index ? newTask : t));
      setTasks(newTasks);
    }
  };

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((t, i) => (
          <li key={i} className={styles.taskItem}>
            {t}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

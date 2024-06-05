import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;

    dispatch(
      addTask({
        id: uuidv4(),
        text: task,
        priority: priority,
      })
    );

    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

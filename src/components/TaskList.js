import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <ul>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;

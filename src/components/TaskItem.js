import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <span>
        {task.text} - {task.priority}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;

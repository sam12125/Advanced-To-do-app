export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_PRIORITY = "SET_PRIORITY";
export const SET_TASKS = "SET_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setPriority = (taskId, priority) => ({
  type: SET_PRIORITY,
  payload: { id: taskId, priority },
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

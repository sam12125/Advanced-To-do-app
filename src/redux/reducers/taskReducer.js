import {
  ADD_TASK,
  DELETE_TASK,
  SET_PRIORITY,
  SET_TASKS,
} from "../actions/taskActions";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Could not load state", e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const initialState = {
  tasks: loadState(),
};

const taskReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TASK:
      newState = { ...state, tasks: [...state.tasks, action.payload] };
      break;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      break;
    case SET_PRIORITY:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        ),
      };
      break;
    case SET_TASKS:
      newState = { ...state, tasks: action.payload };
      break;
    default:
      newState = state;
  }

  saveState(newState.tasks);
  return newState;
};

export default taskReducer;

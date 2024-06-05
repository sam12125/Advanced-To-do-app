import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  weather: weatherReducer,
});

export default rootReducer;

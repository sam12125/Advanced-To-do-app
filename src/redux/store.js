import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Correct way to import thunk
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

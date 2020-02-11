import { combineReducers } from "redux";
import projectListReducer from "./projectListReducer";
// import userReducer from "./userInfo";
// import loggedReducer from "./isLogged";

export default combineReducers({
  projectList: projectListReducer
  //   isLogged: loggedReducer,
  //   user: userReducer
});

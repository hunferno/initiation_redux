import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  //1 reducer par entité
  postReducer,
  userReducer,
});

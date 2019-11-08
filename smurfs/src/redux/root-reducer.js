import { combineReducers } from "redux";
import smurfReducer from './get-smurf/smurf.reducer'
import postReducer from "./post-smurf/post.reducer";

export default combineReducers({
	smurf: smurfReducer,
	post: postReducer
});

import { combineReducers } from "redux";
import smurfReducer from './get-smurf/smurf.reducer'

export default combineReducers({
	smurf: smurfReducer
});

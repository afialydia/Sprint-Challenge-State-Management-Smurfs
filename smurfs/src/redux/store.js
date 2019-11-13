import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import getAPI from "./get-smurf/smurf.actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

store.dispatch(getAPI())

export default store;

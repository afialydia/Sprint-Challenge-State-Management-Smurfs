import { SmurfActions } from "./smurf.types";

const initialState = {
	villagers: [],
	isFetching: false,
	fetched: false,
	error: ""
};

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case SmurfActions.GET_START:
			return {
				...state,
				isFetching: true
			};

		case SmurfActions.GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				fetched:true,
				villagers: action.payload,
				error: ""
			};
		case SmurfActions.GET_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default smurfReducer;

import { PostActions } from "./post.types";

const initialState = {
	addingSmurf: false,
	addedSmurf: false,
	villagers: [],
	error: ""
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case PostActions.POST_START:
			return {
				...state,
				addingVillager: true,
				addedVillager: false,
				error: ""
			};
		case PostActions.POST_SUCCESS:
			return {
				...state,
				addingVillager: false,
				addedVillager: true,
				villagers: action.payload.user,
				error: ""
			};
		case PostActions.POST_FAIL:
			return {
				...state,
				addedVillager: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default postReducer;

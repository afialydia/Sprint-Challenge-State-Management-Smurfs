
import { PostActions } from "./post.types";
import axios from "axios";

const postToAPI = smurf => dispatch => {
	dispatch({ type: PostActions.POST_START });
	axios
		.post("http://localhost:3333/smurfs", smurf)
		.then(response =>
			dispatch({ type: PostActions.POST_SUCCESS, payload: response.data })
		)
		.catch(err =>
			dispatch({ type: PostActions.POST_FAIL, payload: err.response })
		);
};

export default postToAPI;

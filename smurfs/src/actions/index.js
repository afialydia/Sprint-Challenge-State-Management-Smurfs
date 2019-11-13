import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";


export const getSmurfs = () => dispatch => {
	dispatch({ type: GET_SMURF_START });
	axios
		.get("http://localhost:3333/smurfs")
		.then(response =>
			dispatch({ type: GET_SMURF_SUCCESS, payload: response.data })
		)
		.catch(err => dispatch({ type: GET_SMURF_FAILURE, payload: err.response }));
};

export const postSmurfs = () => dispatch => {
	dispatch({ type: POST_SMURF_START});
	axios
	.post("http://localhost:3333/smurfs")
	.then(response =>
		dispatch({ type: POST_SMURF_SUCCESS, payload: response.data })
	)
	.catch(err => dispatch({ type: POST_SMURF_FAILURE, payload: err.response }));
};

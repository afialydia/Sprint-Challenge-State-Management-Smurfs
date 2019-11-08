export const postSmurfs = () => dispatch => {
	dispatch({ type: POST_SMURF_START});
	axios
	.post("http://localhost:3333/smurfs")
	.then(response =>
		dispatch({ type: POST_SMURF_SUCCESS, payload: response.data })
	)
	.catch(err => dispatch({ type: POST_SMURF_FAILURE, payload: err.response }));
};
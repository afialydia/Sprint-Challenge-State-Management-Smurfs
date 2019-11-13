import { SmurfActions } from "./smurf.types";
import axios from 'axios'

 const getAPI = () => dispatch => {
	dispatch({ type: SmurfActions.GET_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then(response =>
			dispatch({ type: SmurfActions.GET_SUCCESS, payload: response.data })
		,[])
		.catch(err =>
			dispatch({ type: SmurfActions.GET_FAIL, payload: err.response })
		);
};

export default getAPI
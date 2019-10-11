import axios from 'axios'

export const GET_SMURF_START = 'GET_SMURF_START' 
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS' 
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE' 

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURF_START});
    axios
    .get('http://localhost:3333/smurfs')
    // .then( response => (console.log('hi from data', response.data[0])))
    .then( response => dispatch({ type: GET_SMURF_SUCCESS, payload: response.data}))
    .catch( err => dispatch({type:GET_SMURF_FAILURE, payload: err.response}))
  
}

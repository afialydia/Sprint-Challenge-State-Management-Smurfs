import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAILURE } from '../actions'

const initialState = {
    smurfState: [],
    isFetching: false,
    error: ''
};

export const characterReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_SMURF_START:
            return{
                ...state,
                isFetching: true
            }
        case GET_SMURF_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfState: action.payload
            }
        case GET_SMURF_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload

            }
        default:
            return state;
    }

}
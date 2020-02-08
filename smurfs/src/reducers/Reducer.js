import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE} from '../actions/Action';

const initialState = {
    smurf: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state, 
            };
        case FETCH_SMURF_SUCCESS: 
            return {
                smurfs: action.payload
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
            };
        default:
            return state;              
    }
};

export default reducer;
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const getSmurf = () => {
    dispatch({ type: FETCH_SMURF_START });
    fetch('http://localhost:3333/smurfs', {
        method: "GET",
    })
    .then(res => {
        return res.json();
    })
    .then(res => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res});
    })
    .catch(err => {
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err});
    });
};
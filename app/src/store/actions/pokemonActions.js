import axios from "axios";

export const FETCH_POKE_DATA_START = "FETCH_POKE_DATA_START";
export const FETCH_POKE_DATA_SUCCESS = "FETCH_POKE_DATA_SUCCESS";
export const FETCH_POKE_DATA_FAILURE = "FETCH_POKE_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_POKE_DATA_START });
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(res => {
        // res.data.data
        return res.data.results;
      })
      .then(results => {
        return results.map(item => axios.get(item.url));
      })
      .then(promises => {
        return Promise.all(promises).then(res => {
          dispatch({
            type: FETCH_POKE_DATA_SUCCESS,
            payload: res
          });
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_POKE_DATA_FAILURE, payload: err.response });
      });
  };
};

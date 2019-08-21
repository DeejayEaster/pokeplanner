import {
  FETCH_POKE_DATA_START,
  FETCH_POKE_DATA_SUCCESS,
  FETCH_POKE_DATA_FAILURE
} from "../actions";

const initialState = {
  pokemon: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKE_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_POKE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload.map(mon => {
          return mon.data;
        }),
        error: ""
      };
    default:
      return state;
  }
};


import * as TYPES from 'actions/types';

const movieReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIE:
      return { ...state, ...action.payload };
    case TYPES.FETCH_CREDITS:
      return { ...state, cast: action.payload };
    case TYPES.SET_MOVIE_LOADING:
      return { ...state, loading: true };
    case TYPES.UNSET_MOVIE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default movieReducer;

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MOVIE_LIST':
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

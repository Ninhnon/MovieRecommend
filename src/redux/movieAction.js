// movieActions.js

export const updateMovieList = movies => {
  return {
    type: 'UPDATE_MOVIE_LIST',
    payload: movies,
  };
};

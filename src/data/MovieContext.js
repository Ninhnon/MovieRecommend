// MovieContext.js

import React, {useState} from 'react';

const MovieContext = React.createContext();

const MovieProvider = ({children}) => {
  const [recommendMovies, setRecommendMovies] = useState([]);

  // Function to update the movie list
  const updateMovieList = newMovieList => {
    setRecommendMovies(newMovieList);
  };

  return (
    <MovieContext.Provider value={{recommendMovies, updateMovieList}}>
      {children}
    </MovieContext.Provider>
  );
};

export {MovieProvider};
export default MovieContext;

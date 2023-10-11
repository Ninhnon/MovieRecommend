import React from 'react';
import MainNavigator from './src/navigation/navigation';

import {MovieProvider} from './src/data/MovieContext';
const App = () => {
  return (
    <MovieProvider>
      <MainNavigator />
    </MovieProvider>
  );
};
export default App;

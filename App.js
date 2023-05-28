import React from 'react';
import MainNavigator from './src/navigation/navigation';
import Description from './src/screens/Description';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {MovieProvider} from './src/data/MovieContext';
const App = props => {
  const {navigation} = props;
  return (
    <MovieProvider>
      <MainNavigator />
    </MovieProvider>
  );
};
export default App;

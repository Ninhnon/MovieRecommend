import React from 'react';
import MainNavigator from './src/navigation/navigation';
import Description from './src/screens/Description';
import Home from './src/screens/Home';
const App = props => {
  const {navigation} = props;
  return <MainNavigator />;
};
export default App;

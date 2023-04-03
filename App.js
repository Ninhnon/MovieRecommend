import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Signup/SignupScreen';
import Home from './src/screens/Home';
import MyTab from './src/navigation/tab';
import MainNavigator from './src/navigation/navigation';
import MovieHome from './src/components/Cards/MovieHome';
import {IMG_AVATAR, IMV_captain} from './src/assets/images';
import MovieHomeList from './src/components/Cards/MovieHomeList';
const App = props => {
  const {navigation} = props;
  return <MainNavigator />;
};
export default App;
const styles = StyleSheet.create({});

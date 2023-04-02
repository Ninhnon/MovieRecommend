import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Signup/SignupScreen';
import Home from './src/screens/Home';
import MyTab from './src/navigation/tab';
import MainNavigator from './src/navigation/navigation';
const App = () => {
  return <MainNavigator />;
};
export default App;
const styles = StyleSheet.create({});

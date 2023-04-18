import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUp from '../screens/Signup/SignupScreen.js';
import Description from '../screens/Description';
import MyTab from './tab.js';
import Home from '../screens/Home';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyTab" component={MyTab} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;

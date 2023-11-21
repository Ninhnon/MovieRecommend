import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUp from '../screens/Signup/SignupScreen.js';
import Description from '../screens/Description';
import MyTab from './tab.js';
import Search from '../screens/Search';
import Next from '../screens/Login/NextLogin';
import Old from '../screens/Login/OldUser';
import New from '../screens/Login/NewUser';
import HomeAdmin from '../screens/Admin/HomeAdmin';
import AddEditMovieScreen from '../screens/Admin/CreateAndEdit';
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
      <Stack.Screen name="Next" component={Next} />
      <Stack.Screen name="Old" component={Old} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
      <Stack.Screen name="AddEditMovieScreen" component={AddEditMovieScreen} />
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

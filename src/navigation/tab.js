import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import CUSTOM_COLOR from '../constants/colors.js';
import Profile from '../screens/Profile';
import History from '../screens/History';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Catalogue from '../screens/Catalogue';
import Description from '../screens/Description';
import LoginScreen from '../screens/Login/LoginScreen.js';
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="History" component={History} />
    </ProfileStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Description" component={Description} />
      <HomeStack.Screen name="Catalogue" component={Catalogue} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here
    navigation.navigate('Login');
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor={CUSTOM_COLOR.BrightRed}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LoginScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Login');
          },
        })}
        options={{
          tabBarLabel: 'Log out',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTab;

const styles = StyleSheet.create({
  barStyle: {
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.Black,
    height: 90,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Ink,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    zIndex: 2,
    top: '90%',
    overflow: 'hidden',
  },
});

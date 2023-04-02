import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native';
const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{width: 100}}
        onPress={() => navigation.navigate('History')}>
        <Text>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 100}}
        onPress={() => navigation.navigate('Login')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Profile;

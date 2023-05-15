import React from 'react';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './style';
const OldUser = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TextInput />
      <TouchableOpacity onPress={() => navigation.navigate('MyTab')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OldUser;

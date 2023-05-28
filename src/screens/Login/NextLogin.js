import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
const NextLogin = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Old')}>
        <Text>Old User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Text>New User</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NextLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

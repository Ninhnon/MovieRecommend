import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
import styles from './style';
const Favorite = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} title="FAVORITE" />
    </SafeAreaView>
  );
};
export default Favorite;

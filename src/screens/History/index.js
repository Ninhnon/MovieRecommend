import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
const History = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} title="HISTORY" />
    </SafeAreaView>
  );
};
export default History;

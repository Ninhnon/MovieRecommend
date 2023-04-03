import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import HeaderWithBack from '../../components/Headers/HeaderWithBack';
const Catalogue = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack onPress={() => navigation.goBack()} title="CATALOGUE" />
    </SafeAreaView>
  );
};
export default Catalogue;

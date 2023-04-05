import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
const HeaderWithoutBack = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginVertical: '3%',
    marginBottom: '2%',
    width: '100%',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY.Black,
    color: CUSTOM_COLOR.BrightRed,
  },
});
export default HeaderWithoutBack;

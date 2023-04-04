import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
const Tag = props => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{props.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tag: {
    height: '80%',
    width: '12%',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 12,
    color: CUSTOM_COLOR.White,
  },
});
export default Tag;

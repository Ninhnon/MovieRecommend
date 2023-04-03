import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import Tag from './Tag.js';
import SegmentControl from '../Buttons/SegmentControl.js';
const ChooseCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genres:</Text>
      <SegmentControl
        values={[
          'Drama',
          'Action',
          'Romance',
          'Funny',
          'Happy',
          'Superhero',
        ]}></SegmentControl>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '94%',
    height: '6%',
    marginLeft: '3%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    left: -10,
    color: CUSTOM_COLOR.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ChooseCategories;

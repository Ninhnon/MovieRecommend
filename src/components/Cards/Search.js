import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import {IMG_Icon} from '../.././assets/images/index.js';
const Search = props => {
  return (
    <TouchableOpacity style={styles.header} onPress={props.onPress}>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <Image source={IMG_Icon} style={styles.image} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '80%',
    height: 50,
    margin: '2%',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    left: 10,
  },
  search: {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    borderWidth: 0.5,
    justifyContent: 'center',
    backgroundColor: CUSTOM_COLOR.InkGray,
  },
  image: {
    position: 'absolute',
    height: 20,
    width: 20,
    zIndex: 3,
    left: '90%',
  },
});
export default Search;

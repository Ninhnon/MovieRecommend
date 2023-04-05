import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const SecondaryButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onclick}>
      <Text style={styles.textButton}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    fontSize: 14,
    lineHeight: 22,
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Bold,
    marginTop: 2,
  },
  buttonContainer: {
    width: 129,
    height: 30,
    backgroundColor: CUSTOM_COLOR.PrimaryColor,
    borderRadius: 22,
    paddingHorizontal: 23,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SecondaryButton;

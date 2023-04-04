import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onclick}>
      <Text style={styles.textButton}>{props.label}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../.././constants/colors.js';
import {IMG_ICON_PREVIOUS} from '../.././assets/images/index.js';
import FONT_FAMILY from '../.././constants/fonts.js';
import {IC_Back} from '../../assets/icons/index.js';
const HeaderWithBack = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>

      <TouchableOpacity style={styles.buttonPreVious} onPress={props.onPress}>
        <Image source={IMG_ICON_PREVIOUS} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '94%',
    height: '6%',
    margin: '3%',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY.Black,
    color: CUSTOM_COLOR.BrightRed,
  },
  buttonPreVious: {
    position: 'absolute',
    height: 38,
    width: 38,
    borderRadius: 38,
    borderWidth: 0,
    borderColor: CUSTOM_COLOR.InkGray,
    marginLeft: '3%',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
});
export default HeaderWithBack;

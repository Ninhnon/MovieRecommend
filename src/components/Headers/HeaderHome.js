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
import {
  IMG_AVATAR,
  IMG_ICON_PREVIOUS,
  IMG_NOTIFICATION,
} from '../.././assets/images/index.js';
import FONT_FAMILY from '../.././constants/fonts.js';
const HeaderHome = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        <Text style={{color: CUSTOM_COLOR.LightBlue}}>MOVIE </Text>
        <Text style={{color: CUSTOM_COLOR.BrightRed}}>RECOMMEND</Text>
      </Text>

      <Image source={IMG_AVATAR} style={styles.buttonPreVious} />
      <Image source={IMG_NOTIFICATION} style={styles.noti} />
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
  noti: {
    position: 'absolute',
    height: 38,
    width: 38,
    borderRadius: 38,
    borderWidth: 1.5,
    borderColor: CUSTOM_COLOR.White,
    marginLeft: '3%',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
});
export default HeaderHome;

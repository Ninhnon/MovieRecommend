import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IC_Profile} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const ProfileCard = props => {
  return (
    <View style={styles.profileBar}>
      <View style={styles.iconContainer}>
        <Image source={props.icon} style={styles.icon} />
      </View>
      <Text style={styles.content}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  profileBar: {
    marginTop: 16,
    flexDirection: 'row',
    width: 317,
    height: 50,
    borderRadius: 15,
    backgroundColor: CUSTOM_COLOR.MovieBackground,
    alignItems: 'center',
  },
  content: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: CUSTOM_COLOR.White,
    marginLeft: 20,
    marginTop: 5,
  },
  iconContainer: {
    width: 34,
    aspectRatio: 1,
    backgroundColor: CUSTOM_COLOR.IconBackground,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
    marginTop: -2,
  },
});
export default ProfileCard;

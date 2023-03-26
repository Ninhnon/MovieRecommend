import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    top: 0,
    alignItems: 'center',
  },
  nameScreen: {
    position: 'absolute',
    fontSize: 40,
    color: '#FFF',
    alignContent: 'center',
    top: '40%',
  },
  imgContainer: {
    width: SCALE.reSizeWidth(343),
  },
  image: {
    width: '100%',
  },
  title: {
    color: CUSTOM_COLOR.BlackOlive,
    fontFamily: FONT_FAMILY.Bold1,
    fontSize: 24,
    lineHeight: 32,
    width: SCALE.reSizeWidth(341),
    textAlign: 'center',
    marginTop: SCALE.reSizeHeight(16),
  },
  infoText: {
    color: CUSTOM_COLOR.Nickel,
    fontSize: 14,
    LineHeight: 21,
    width: SCALE.reSizeWidth(341),
    textAlign: 'center',
    marginTop: SCALE.reSizeHeight(8),
    fontFamily: FONT_FAMILY.Regular1,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: SCALE.reSizeHeight(16),
    marginBottom: SCALE.reSizeHeight(20),
    width: SCALE.reSizeWidth(148),
  },
  facebookContainer: {
    left: 0,
  },
  instaContainer: {
    left: SCALE.reSizeWidth(12),
  },
  GoogleContainer: {
    left: SCALE.reSizeWidth(24),
  },
  textPassword: {
    color: CUSTOM_COLOR.Nickel,
    fontFamily: FONT_FAMILY.Bold1,
    fontSize: 14,
    lineHeight: 16,
    marginBottom: SCALE.reSizeHeight(16),
  },
  textForgotPassContainer: {
    width: SCALE.reSizeWidth(160),
    height: SCALE.reSizeHeight(20),
    marginTop: SCALE.reSizeHeight(16),
  },
  textForgotPass: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 16,
    color: CUSTOM_COLOR.Nickel,
    fontFamily: FONT_FAMILY.Medium1,
  },
  textSignup: {
    color: CUSTOM_COLOR.Nickel,
    fontFamily: FONT_FAMILY.Medium1,
    fontSize: 14,
    lineHeight: 16,
    marginTop: SCALE.reSizeHeight(16),
  },
});

export default styles;

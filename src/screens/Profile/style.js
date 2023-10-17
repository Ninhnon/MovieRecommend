import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  profile: {
    marginTop: 21,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    aspectRatio: 1,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nameProfile: {
    marginTop: 15,
    maxWidth: 266,
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 20,
    lineHeight: 30,
    color: CUSTOM_COLOR.White,
  },
  accountProfile: {
    marginTop: 5,
    maxWidth: 200,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: CUSTOM_COLOR.White,
  },
  listProfileBar: {
    flex: 1,
    marginTop: 35,
    alignItems: 'center',
  },
});

export default styles;

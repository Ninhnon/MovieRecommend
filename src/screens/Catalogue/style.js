import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  listMovies: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: CUSTOM_COLOR.BrightGray,
  },
  movie: {
    flexDirection: 'row',
    width: 336,
    height: 136,
    marginHorizontal: 27,
    marginTop: 21,
    backgroundColor: CUSTOM_COLOR.Orange,
    borderRadius: 25,
  },
  imageContainer: {
    width: '40%',
    margin: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  description: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 22,
  },
  titleMovie: {
    maxWidth: 155,
    maxHeight: 44,
    marginTop: 14,
    fontSize: 15,
    lineHeight: 25,
    fontFamily: FONT_FAMILY.Semibold,
    color: CUSTOM_COLOR.White,
  },
  genreMovie: {
    maxWidth: 122,
    marginTop: 4,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.Regular,
    color: CUSTOM_COLOR.SecondaryColorText,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 11,
  },
  iconContainer: {
    position: 'absolute',
    right: -9,
    top: 19,
  },
});

export default styles;

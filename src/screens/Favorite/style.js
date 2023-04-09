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
  },
});

export default styles;

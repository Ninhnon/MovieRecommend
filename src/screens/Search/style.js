import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  header: {
    width: '100%',
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
  list: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;

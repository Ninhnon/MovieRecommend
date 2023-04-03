import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  imgBackground: {
    position: 'absolute',
    height: '80%',
    width: '100%',
    alignItems: 'center',
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
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
  name: {
    fontSize: 20,
    color: CUSTOM_COLOR.White,
  },
  label: {
    fontSize: 15,
    color: CUSTOM_COLOR.White,
  },
  detail: {
    position: 'absolute',
    top: '66%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.8,
    alignItems: 'center',
  },
  star: {
    left: '-2%',
    top: '2%',
    marginHorizontal: 50,
  },
  relate: {
    backgroundColor: '#FFF',
    top: 500,
    left: 100,
  },
});

export default styles;

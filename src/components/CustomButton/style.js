import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import SCALE from '../../constants/reponsive';

const styles = StyleSheet.create({
  textButton: {
    fontSize: 16,
    lineHeight: 18,
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Bold,
  },
  buttonContainer: {
    width: SCALE.reSizeWidth(311),
    height: SCALE.reSizeHeight(56),
    backgroundColor: CUSTOM_COLOR.Orange,
    borderRadius: 16,
    marginTop: SCALE.reSizeHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

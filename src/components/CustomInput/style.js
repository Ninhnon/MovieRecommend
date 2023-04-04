import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import SCALE from '../../constants/reponsive';

const styles = StyleSheet.create({
  container: {
    width: SCALE.reSizeWidth(343),
    height: SCALE.reSizeHeight(53),
    borderRadius: 12,
    borderColor: CUSTOM_COLOR.LightGray,
    borderWidth: 1,
    paddingHorizontal: 30,
    marginTop: SCALE.reSizeHeight(20),
  },
  IconPassword: {
    width: SCALE.reSizeWidth(24),
    height: SCALE.reSizeHeight(24),
    left: SCALE.reSizeWidth(280),
    top: SCALE.reSizeHeight(12),
    position: 'absolute',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import SCALE from '../../constants/reponsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  movieRecommend: {
    height: '32%',
    margin: '4%',
    marginLeft: '4%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  heading: {
    width: '100%',
    height: '12%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    left: 10,
    color: CUSTOM_COLOR.White,
    fontSize: 18,
  },
  viewAll: {
    right: 20,
    color: '#E82251',
    fontSize: 12,
    top: 4,
  },
  genres: {
    left: 4,
    color: CUSTOM_COLOR.White,
    fontSize: 16,
    fontWeight: 'bold',
  },
  genresContainer: {
    width: '100%',
    height: 42,
    marginTop: '1.5%',
    flexDirection: 'row',
    marginBottom: '3%',
    color: '#FFF',
  },
  tag: {
    height: 24,
    width: 60,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: CUSTOM_COLOR.White,
    margin: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 12,
    alignSelf: 'center',
    color: CUSTOM_COLOR.InkGray,
  },
  selected: {
    color: CUSTOM_COLOR.White,
  },
  selectedView: {
    backgroundColor: '#E82251',
  },
});

export default styles;

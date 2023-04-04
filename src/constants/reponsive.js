import {Dimensions} from 'react-native';

const designWidth = 414;
const designHeight = 896;
const size = {
  devicesWidth: Dimensions.get('window').width,
  devicesHeight: Dimensions.get('window').height,

  reSizeWidth: function (number) {
    return (number * size.devicesWidth) / designWidth;
  },
  reSizeHeight: function (number) {
    return (number * size.devicesHeight) / designHeight;
  },
};
export default size;

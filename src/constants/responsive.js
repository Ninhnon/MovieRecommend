import {Dimensions} from 'react-native';

const designHeight = 812;
const designWidth = 375;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function scale(number, string = 'width') {
  let scaleNumber;

  if (string == 'height') {
    scaleNumber = number * (deviceHeight / designHeight);
  } else {
    scaleNumber = number * (deviceWidth / designWidth);
  }

  return scaleNumber;
}

export default scale;

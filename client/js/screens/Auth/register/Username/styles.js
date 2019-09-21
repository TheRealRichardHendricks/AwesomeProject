import {StyleSheet} from 'react-native';
import {
  smallDevice,
  horizontalMargin,
  deviceWidth,
} from '../../../../components/device';
import {WHITE} from '../../../../components/colors';

export default StyleSheet.create({
  textInput: {
    width: deviceWidth - 2 * horizontalMargin,
    marginTop: smallDevice() ? 0 : 12,
    backgroundColor: WHITE,
  },

  headline: {
    marginTop: smallDevice() ? 23 : 30,
    width: '100%',
  },
});

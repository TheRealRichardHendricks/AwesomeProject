import {StyleSheet} from 'react-native';
import {
  deviceWidth,
  horizontalMargin,
  smallDevice,
} from '../../../../components/device';
import {WHITE} from '../../../../components/colors';

export default StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    marginBottom: 10,
    color: 'rgba(55,53,47,0.8)',
    flexDirection: 'row',
    lineHeight: 24,
    letterSpacing: 0.14,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: deviceWidth - 2 * horizontalMargin,
    marginTop: smallDevice() ? 0 : 12,
    backgroundColor: WHITE,
  },
});

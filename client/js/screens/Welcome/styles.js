import {StyleSheet} from 'react-native';
import {WHITE} from '../../components/colors';
import {
  isIphoneX,
  deviceWidth,
  horizontalMargin,
} from '../../components/device';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: isIphoneX ? 40 : 0,
  },

  logo: {
    height: 24,
    width: 24,
  },

  iphone: {
    paddingVertical: isIphoneX ? 40 : 0,
  },

  logoContainer: {
    marginVertical: horizontalMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    width: deviceWidth - 2 * horizontalMargin,
    marginBottom: horizontalMargin,
    justifyContent: 'space-between',
  },
});

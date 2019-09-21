import {StyleSheet} from 'react-native';
import {horizontalMargin} from '../../../../components/device';

export default StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: horizontalMargin,
  },

  profileContainer: {
    position: 'relative',
    marginTop: 90,
    width: 106,
    height: 106,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  },

  logoSmall: {
    height: 36,
    width: 36,
    position: 'absolute',
    top: -15,
    left: '70%',
    zIndex: 999,
  },

  done: {
    alignItems: 'center',
  },
});

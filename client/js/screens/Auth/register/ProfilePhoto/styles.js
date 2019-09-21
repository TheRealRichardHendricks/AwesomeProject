import {StyleSheet} from 'react-native';
import {horizontalMargin} from '../../../../components/device';

export default StyleSheet.create({
  row: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: horizontalMargin,
  },

  profilePhoto: {
    width: '100%',
    flex: 1,
  },

  photoBtn: {
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
    left: 40,
  },
});

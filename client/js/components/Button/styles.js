import { StyleSheet } from 'react-native';
import { deviceWidth, horizontalMargin } from '../device';

export default StyleSheet.create({
	button: {
		width: deviceWidth - 2 * horizontalMargin,
		height: 46,
		borderRadius: 2,
		marginBottom: 14,
		flexDirection: 'row'
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},

	mRight: {
		marginRight: 10
	}
});

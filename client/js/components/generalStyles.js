import { StyleSheet } from 'react-native';
import { WHITE, BLUE } from './colors';
import { deviceWidth, horizontalMargin } from './device';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: WHITE
	},

	row: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginHorizontal: horizontalMargin
	},

	rowStart: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginHorizontal: horizontalMargin
	},

	progressBar: {
		position: 'absolute',
		width: deviceWidth,
		height: 6,
		backgroundColor: 'rgba(55,53,47,0.1)'
	},

	progressFill: {
		position: 'absolute',
		left: 0,
		zIndex: 999,
		height: 6,
		backgroundColor: BLUE
	}
});

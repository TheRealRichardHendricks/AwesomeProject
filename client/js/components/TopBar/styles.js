import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from '../colors';
import { horizontalMargin } from '../device';

export default StyleSheet.create({
	container: {
		backgroundColor: WHITE,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative'
	},

	row: {
		flexDirection: 'row',
		height: '100%'
	},

	rowEnd: {
		flexDirection: 'row',
		height: '100%',
		justifyContent: 'flex-end'
	},

	center: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},

	logo: {
		width: 24,
		height: 24
	},

	leftCenterCont: {
		width: '100%',
		height: '100%'
	},

	leftCenter: {
		position: 'absolute',
		left: 50,
		top: 20
	},

	text: {
		color: BLACK,
		fontSize: 14,
		lineHeight: 16
	},

	btn: {
		backgroundColor: WHITE,
		height: '100%',
		justifyContent: 'center',
		paddingHorizontal: horizontalMargin,
		flexBasis: '33%'
	}
});

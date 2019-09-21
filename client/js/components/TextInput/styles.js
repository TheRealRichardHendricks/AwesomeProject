import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		position: 'relative'
	},

	viewForShowPassword: {
		width: 42,
		height: '100%',
		position: 'absolute',
		top: 5,
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center'
	},

	buttonShowPassword: {
		marginTop: 0
	}
});

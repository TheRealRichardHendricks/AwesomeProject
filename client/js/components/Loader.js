import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const Loader = () => {
	return (
		<View style={[styles.container]}>
			<ActivityIndicator size='large' color='#0000ff' />
		</View>
	);
};

export default Loader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff',
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
});

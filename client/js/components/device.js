import { Dimensions, Platform } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const horizontalMargin = 30;

export const isIphoneX =
	Platform.OS == 'ios' && (deviceHeight == 812 || deviceHeight == 896);

export const isIphone6 = () => {
	return Platform.OS == 'ios' && deviceHeight == 667;
};

export const smallDevice = () => {
	return deviceHeight < 680;
};

export const isIOS = Platform.OS === 'ios';

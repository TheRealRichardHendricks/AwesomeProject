import { StyleSheet, Dimensions } from 'react-native';
import { isIphoneX, smallDevice, deviceHeight } from '../device';
import { DARK_GRAY } from '../colors';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
	'window'
);

function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}

const slideWidth = wp(85);
const itemHorizontalMargin = wp(2);

export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const sliderWidth = viewportWidth;

const slideHeight = viewportHeight * 0.5;
const entryBorderRadius = 8;

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: smallDevice() ? 0 : 50
	},

	title: {
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},

	subtitle: {
		marginTop: 5,
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: 13,
		fontStyle: 'italic',
		textAlign: 'center'
	},

	slider: {
		maxHeight: isIphoneX ? itemWidth * 1.1 : itemWidth
	},

	paginationContainer: {
		paddingVertical: 8,
		paddingBottom: 30
	},

	paginationDot: {
		width: 10,
		height: 10,
		borderRadius: 10 / 2,
		marginHorizontal: -8
	},

	// SliderEntry

	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin
	},
	imageContainer: {
		width: deviceHeight / 3,
		height: deviceHeight / 3.6,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'cover',
		width: deviceHeight / 3,
		height: deviceHeight / 3.6
	},

	textContainer: {
		justifyContent: 'center',
		paddingTop: 20 - entryBorderRadius,
		paddingBottom: 0
	},
	title: {
		margin: 15,
		fontSize: 32,
		textAlign: 'center',
		color: DARK_GRAY,
		lineHeight: 38,
		letterSpacing: 0.3
	},
	subtitle: {
		fontSize: 16,
		color: DARK_GRAY,
		lineHeight: 24,
		letterSpacing: 0.14,
		textAlign: 'center'
	}
});

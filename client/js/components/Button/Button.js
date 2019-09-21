import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	View,
	ActivityIndicator
} from 'react-native';
import { BLACK, BLUE, BLUE_50, GRAY, WHITE } from '../colors';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = props => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[
				styles.button,
				{
					alignItems: props.align ? props.align : 'center',
					justifyContent: props.justify ? props.justify : 'center'
				},
				(() => {
					if (props.primary && !props.disabled && !props.forceDisabled) {
						return { backgroundColor: BLUE };
					} else if (props.disabled || props.forceDisabled) {
						return { backgroundColor: BLUE_50 };
					} else if (!props.primary && !props.clean && !props.bg) {
						return { backgroundColor: GRAY };
					} else if (props.bg) {
						return { backgroundColor: props.bg };
					} else {
						return { backgroundColor: 'transparent' };
					}
				})(),
				props.style
			]}
			disabled={props.disabled || props.forceDisabled == true ? true : false}
			activeOpacity={0.8}
			underlayColor={WHITE}>
			{props.imageLeft && (
				<Image style={styles.mRight} source={props.imageLeft} />
			)}
			{props.loader != true && props.disabled != true ? (
				<Text
					style={[
						{
							fontSize: props && props.fontSize ? props.fontSize : 16,
							lineHeight: 19,
							letterSpacing: -0.24,
							fontWeight: props.fontWeight ? props.fontWeight : 'normal'
						},
						(() => {
							if (props.primary) {
								return { color: WHITE };
							} else if (props.color) {
								return { color: props.color };
							} else {
								return { color: BLACK };
							}
						})(),
						props.textStyle
					]}>
					{props.text}
				</Text>
			) : (
				<ActivityIndicator size='large' color='white' />
			)}
			<View style={styles.row}>
				{props.secondText && (
					<Text style={[props.secondTextStyle, styles.mRight]}>
						{props.secondText}
					</Text>
				)}
				{props.imageRight && (
					<Image source={props.imageRight} style={props.imgStyle} />
				)}
			</View>
		</TouchableOpacity>
	);
};

Button.propTypes = {
	onPress: PropTypes.func.isRequired,
	alignItems: PropTypes.string,
	justifyContent: PropTypes.string,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	text: PropTypes.string.isRequired,
	secondText: PropTypes.string,
	primary: PropTypes.bool,
	disabled: PropTypes.bool,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Button;

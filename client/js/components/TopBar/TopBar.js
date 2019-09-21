import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import { WHITE } from '../colors';
import images from '../images';
import { horizontalMargin, isIphoneX, isIOS } from '../device';
import styles from './styles';
import PropTypes from 'prop-types';

const TopBar = props => {
	return (
		<SafeAreaView
			style={[
				(() => {
					if (props.rightButton && !props.leftButton && !props.leftText) {
						return { justifyContent: 'flex-end' };
					}
				})(),
				(() => {
					if (isIOS && isIphoneX) {
						return { height: 100 };
					} else if (isIOS) {
						return { height: 75 };
					} else {
						return { height: 60 };
					}
				})(),
				styles.container,
				props.style
			]}>
			<View style={styles.row}>
				{props.leftButton && (
					<TouchableOpacity
						onPress={props.onLeftBtnPress}
						style={[
							styles.btn,
							(() => {
								if (
									props.rightButton &&
									props.leftButton &&
									props.leftText &&
									props.rightText
								) {
									return {
										paddingHorizontal: 10,
										paddingLeft: horizontalMargin
									};
								}
							})()
						]}
						activeOpacity={0.8}
						underlayColor={WHITE}>
						<Image
							source={
								props.leftBtnSource ? props.leftBtnSource : images.leftArrow
							}
							style={styles.back}
						/>
					</TouchableOpacity>
				)}
				{props.leftText && (
					<TouchableOpacity
						onPress={props.onLeftBtnPress}
						disabled={props.leftTextDisabled}
						style={[
							styles.btn,
							(() => {
								if (
									props.rightButton &&
									props.leftButton &&
									props.leftText &&
									props.rightText
								) {
									return { paddingHorizontal: 10 };
								}
							})()
						]}
						activeOpacity={0.8}
						underlayColor={WHITE}>
						<Text style={[styles.text, props.leftTextStyle]}>
							{props.leftText}
						</Text>
					</TouchableOpacity>
				)}
			</View>

			<View style={{ flex: 1 }}>
				{props.centerButton && (
					<View style={styles.center}>
						<Image
							source={props.centerSource ? props.centerSource : images.logo}
							style={[styles.logo]}
						/>
					</View>
				)}
				{props.centerText && (
					<View style={styles.center}>
						<Text style={[styles.text, props.centerTextStyle]}>
							{props.centerText}
						</Text>
					</View>
				)}
			</View>
			<View
				style={[
					styles.rowEnd,
					{
						flex:
							props.centerText && !props.leftText && !props.rightText ? 0 : 1
					}
				]}>
				{(() => {
					if (props.rightButton == true && props.rightBtnSource !== null) {
						return (
							<TouchableOpacity
								onPress={props.onRightBtnPress}
								style={[
									styles.btn,
									{ alignItems: 'flex-end' },
									(() => {
										if (
											props.rightButton &&
											props.leftButton &&
											props.leftText &&
											props.rightText
										) {
											return { paddingHorizontal: 10 };
										}
									})()
								]}
								activeOpacity={0.8}
								underlayColor={WHITE}>
								<Image
									source={
										props.rightBtnSource
											? props.rightBtnSource
											: images.closeIcon
									}
									style={styles.close}
								/>
							</TouchableOpacity>
						);
					}
				})()}
				{props.rightText && (
					<TouchableOpacity
						onPress={
							props.onRightTextPress
								? props.onRightTextPress
								: props.onRightBtnPress
						}
						style={[
							styles.btn,
							(() => {
								if (
									props.rightButton &&
									props.leftButton &&
									props.leftText &&
									props.rightText
								) {
									return {
										paddingHorizontal: 10,
										paddingRight: horizontalMargin
									};
								}
							})()
						]}
						activeOpacity={0.8}
						underlayColor={WHITE}>
						<Text style={[styles.text, props.rightTextStyle]}>
							{props.rightText}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
};

TopBar.propTypes = {
	onRightBtnPress: PropTypes.func,
	onLeftBtnPress: PropTypes.func,
	leftText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	centerText: PropTypes.string,
	rightText: PropTypes.string,
	style: PropTypes.object
};

export default TopBar;

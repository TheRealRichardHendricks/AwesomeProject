import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import images from '../images';
import PropTypes from 'prop-types';
import { RED, BLACK, BLACK_50 } from '../colors';
import { TextField } from 'react-native-material-textfield';
import styles from './styles';

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowingPassword: this.props.secureTextEntry
				? this.props.secureTextEntry
				: false
		};
	}

	focus = () => {
		this.textInput.focus();
	};

	render() {
		return (
			<View style={[this.props.style, styles.container]}>
				<TextField
					label={this.props.placeholder ? this.props.placeholder : ''}
					labelHeight={20}
					inputContainerPadding={8}
					textColor={this.props.textColor ? this.props.textColor : BLACK}
					fontSize={this.props.fontSize ? this.props.fontSize : 15}
					labelFontSize={
						this.props.labelFontSize ? this.props.labelFontSize : 10
					}
					maxLength={this.props.maxLength}
					autoFocus={this.props.autoFocus}
					activeLineWidth={1}
					baseColor={this.props.baseColor ? this.props.baseColor : BLACK_50}
					tintColor={'rgba(0,0,0,1)'}
					keyboardType={this.props.keyboardType}
					returnKeyType={this.props.returnKeyType}
					autoCapitalize={this.props.autoCapitalize}
					autoCorrect={false}
					value={this.props.text ? this.props.text : ''}
					onChangeText={text => {
						if (this.props.onChangeText) {
							this.props.onChangeText(text);
						}
					}}
					error={
						this.props.errorText &&
						this.props.errorText !== 'Incorrect email or password'
							? this.props.errorText
							: null
					}
					ref={ref => (this.textInput = ref)}
					blurOnSubmit={false}
					onFocus={() => {
						if (this.props.onFocus) {
							this.props.onFocus(this.textInput);
						}
					}}
					onSubmitEditing={() => {
						if (this.props.onSubmitEditing) {
							this.props.onSubmitEditing();
						}
					}}
					secureTextEntry={
						this.props.secureTextEntry ? this.state.isShowingPassword : false
					}
				/>
				{this.props.secureTextEntry && (
					<TouchableOpacity
						style={styles.viewForShowPassword}
						onPress={() => {
							this.setState({
								isShowingPassword: !this.state.isShowingPassword
							});
						}}>
						<Image
							style={
								this.props.errorText == 'Password field is empty' ||
								this.props.errorText == 'Incorrect email or password'
									? { marginBottom: 10 }
									: styles.buttonShowPassword
							}
							source={
								this.state.isShowingPassword == false
									? images.iconEye
									: images.iconEyeHidden
							}
						/>
					</TouchableOpacity>
				)}

				{this.props.errorText &&
				this.props.errorText == 'Incorrect email or password' &&
				this.props.placeholder !== 'Enter your email address' ? (
					<Text style={{ color: RED }}>Incorrect email or password</Text>
				) : null}
			</View>
		);
	}
}

TextInput.propTypes = {
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	placeholder: PropTypes.string.isRequired,
	errorText: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	onChangeText: PropTypes.func,
	text: PropTypes.string,
	blurOnSubmit: PropTypes.bool,
	returnKeyType: PropTypes.string,
	onSubmitEditing: PropTypes.func
};

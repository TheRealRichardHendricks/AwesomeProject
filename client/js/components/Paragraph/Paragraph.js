import React from 'react';
import { Text, View } from 'react-native';
import { DARK_GRAY_60 } from '../colors';
import PropTypes from 'prop-types';
import styles from './styles';

const Paragraph = props => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text
				style={[
					styles.text,
					{
						fontSize: props.fontSize ? props.fontSize : 15,
						textAlign: props.align ? props.align : 'left',
						flexBasis: props.flexBasis ? props.flexBasis : '100%',
						color: props.color ? props.color : DARK_GRAY_60
					},
					props.style
				]}>
				{props.text}
				{props.textBold && <Text style={styles.bold}>{props.textBold}</Text>}
				{props.textAfter && <Text>{props.textAfter}</Text>}
			</Text>
		</View>
	);
};

Paragraph.propTypes = {
	fontSize: PropTypes.number,
	textAlign: PropTypes.string,
	flexBasis: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.bool.isRequired
	]),
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Paragraph;

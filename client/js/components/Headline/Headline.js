import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Headline = props => {
	return (
		<Text
			style={[
				styles.headline,
				{
					fontSize: props.fontSize ? props.fontSize : 32,
					textAlign: props.align ? props.align : 'left',
					marginVertical: props.margin ? props.margin : 15
				},
				props.style
			]}>
			{props.text}
		</Text>
	);
};

Headline.propTypes = {
	fontSize: PropTypes.number,
	marginVertical: PropTypes.number,
	textAlign: PropTypes.string,
	text: PropTypes.string.isRequired,
	style: PropTypes.object
};

export default Headline;

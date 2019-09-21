import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class SliderEntry extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		even: PropTypes.bool
	};

	get image() {
		const {
			data: { illustration }
		} = this.props;

		return <Image source={illustration} style={styles.image} />;
	}

	render() {
		const {
			data: { title, subtitle }
		} = this.props;

		return (
			<TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
				<View style={styles.imageContainer}>
					{this.image}
					<View style={styles.radiusMask} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title} numberOfLines={2}>
						{title}
					</Text>
					<Text style={styles.subtitle} numberOfLines={2}>
						{subtitle}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

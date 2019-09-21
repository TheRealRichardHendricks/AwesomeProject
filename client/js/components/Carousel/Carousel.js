import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { BLUE, DARK_GRAY } from '../colors';
import { isIphone6 } from '../device';
import SliderEntry from './SliderEntry';
import { SliderText } from './SliderText';
import styles, { sliderWidth, itemWidth } from './styles';

const SLIDER_FIRST_ITEM = 0;

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_FIRST_ITEM
		};
	}

	_renderItem({ item, index }) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
	}
	render() {
		const { slider1ActiveSlide } = this.state;
		return (
			<View
				style={[
					styles.container,
					(() => {
						if (isIphone6() == true) {
							return { marginTop: 50 };
						}
					})()
				]}>
				<Carousel
					ref={c => (this._slider1Ref = c)}
					data={SliderText}
					renderItem={this._renderItem}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					firstItem={SLIDER_FIRST_ITEM}
					inactiveSlideScale={0}
					inactiveSlideOpacity={0}
					// loop={true}
					// loopClonesPerSide={2}
					autoplay={false}
					// autoplayDelay={3000}
					// autoplayInterval={3000}
					onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
					containerCustomStyle={styles.slider}
				/>
				<Pagination
					dotsLength={SliderText.length}
					activeDotIndex={slider1ActiveSlide}
					containerStyle={styles.paginationContainer}
					dotColor={BLUE}
					dotStyle={styles.paginationDot}
					inactiveDotColor={DARK_GRAY}
					inactiveDotOpacity={0.2}
					inactiveDotScale={1}
					carouselRef={this._slider1Ref}
					tappableDots={!!this._slider1Ref}
				/>
			</View>
		);
	}
}

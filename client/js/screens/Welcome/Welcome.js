import React from 'react';
import {View, Image} from 'react-native';
import {Link} from 'react-router-native';

// Ui elements
import images from '../../components/images';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button';
import styles from './styles';

// just for blockchain button test
import axios from 'axios';

const Welcome = () => {
  return (
    <View style={[styles.container, styles.iphone]}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <Carousel />
      <View style={styles.buttonsContainer}>
        <Link
          component={Button}
          to={{pathname: 'register-email', state: {demo: true}}}
          text={'Sign up'}
          primary
        />
        <Button text={'Log in'} onPress={() => alert('Nothing here...')} />
      </View>
    </View>
  );
};

export default Welcome;

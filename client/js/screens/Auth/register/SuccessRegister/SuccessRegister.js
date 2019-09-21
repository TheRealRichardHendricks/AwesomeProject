import React from 'react';
import {View, Text, Image} from 'react-native';

// Ui elements
import generalStyles from '../../../../components/generalStyles';
import TopBar from '../../../../components/TopBar';
import Button from '../../../../components/Button';
import ProgressBar from '../ProgressBar';
import styles from './styles';
import images from '../../../../components/images';
import Headline from '../../../../components/Headline';
import Paragraph from '../../../../components/Paragraph';

export default SuccessRegister = props => {
  const loading = props.hooks;
  const _createUser = props.actions;
  const register = props.states;

  return (
    <View style={generalStyles.container}>
      <TopBar centerText={'Success!'} />
      <ProgressBar width={'100%'} />
      <View style={styles.row}>
        <View style={styles.done}>
          <View style={styles.profileContainer}>
            <Image source={images.logo} style={styles.logoSmall} />
            <Image
              source={register.avatar}
              style={{width: 106, height: 106, marginBottom: 30}}
            />
          </View>
          <Headline
            text={`Well done\n` + register.username + `!`}
            align={'center'}
          />
          <Paragraph
            text={
              'You are all set.\nYour profile is ready and you can start creating deals and what not!'
            }
            align={'center'}
          />
        </View>
        <Button
          onPress={() => _createUser()}
          text={'Awesome'}
          primary
          disabled={loading == false ? false : true}
          loader={loading == false ? false : true}
        />
      </View>
    </View>
  );
};

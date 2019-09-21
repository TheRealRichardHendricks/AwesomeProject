import React from 'react';
import {View, Text, Keyboard} from 'react-native';

// Ui elements
import generalStyles from '../../../../components/generalStyles';
import TextInput from '../../../../components/TextInput';
import TopBar from '../../../../components/TopBar';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph/index';
import ProgressBar from '../ProgressBar';
import styles from './styles';
import Headline from '../../../../components/Headline/index';

export default Username = props => {
  const {history, _goToProfilePhoto} = props.routes;
  const {username} = props.data;
  const {errorText, setUsername, loading} = props.hooks;

  return (
    <View style={generalStyles.container}>
      <TopBar
        leftButton
        centerButton
        onLeftBtnPress={() => history.push({pathname: 'register-password'})}
      />
      <ProgressBar width={'60%'} />
      <View style={generalStyles.row}>
        <View>
          <Headline style={styles.headline} text={'Username'} />
          <Paragraph
            text={'Create your unique username so people can easily find you'}
          />
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={value => setUsername(value)}
          text={username}
          ref={input => {
            this.firstTextInput = input;
          }}
          onSubmitEditing={() => {
            Keyboard.dismiss();
            _goToProfilePhoto();
          }}
          placeholder={'Enter your username'}
          autoCapitalize="none"
          returnKeyType={'next'}
          errorText={errorText}
          autoFocus={true}
        />
        <Button
          primary
          disabled={loading == false ? false : true}
          loader={loading == false ? false : true}
          onPress={() => {
            Keyboard.dismiss();
            _goToProfilePhoto();
          }}
          text={'Next'}></Button>
      </View>
    </View>
  );
};

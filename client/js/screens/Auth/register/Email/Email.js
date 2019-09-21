import React from 'react';
import {View} from 'react-native';

// Ui elements
import generalStyles from '../../../../components/generalStyles';
import TopBar from '../../../../components/TopBar';
import Button from '../../../../components/Button';
import Headline from '../../../../components/Headline';
import Paragraph from '../../../../components/Paragraph';
import TextInput from '../../../../components/TextInput';
import ProgressBar from '../ProgressBar';
import styles from './styles';

export default Email = props => {
  const {history, cancel} = props.routes;
  const {email} = props.data;
  const {errorEmail, setEmail, loading} = props.hooks;
  const validateInput = props.validation;

  return (
    <React.Fragment>
      <View style={generalStyles.container}>
        <TopBar
          leftText={'Log in'}
          onLeftBtnPress={() => {
            cancel();
            //history.push('/login');
            alert('Nothing here...');
          }}
          rightButton
          onRightBtnPress={() => {
            cancel();
            history.push('/welcome');
          }}
          centerButton
        />
        <ProgressBar width={'20%'} />
        <View style={generalStyles.row}>
          <View>
            <Headline style={styles.headline} text={'Sign up'} />
            <Paragraph
              style={styles.text}
              text={'Start by entering your email address'}
            />
          </View>
          <TextInput
            style={styles.textInput}
            text={email}
            autoCapitalize="none"
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            maxLength={40}
            errorText={errorEmail}
            placeholder={'Enter your email address'}
            returnKeyType={'send'}
            onSubmitEditing={() => validateInput()}
          />
          <Button
            primary
            onPress={() => validateInput()}
            text={'Next'}
            disabled={loading == false ? false : true}
            loader={loading == false ? false : true}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

import React from 'react';
import {View, Image, Text} from 'react-native';

// Ui elements
import generalStyles from '../../../../components/generalStyles';
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
import Loader from '../../../../components/Loader';
import images from '../../../../components/images';
import styles from './styles';

export default VerifyEmail = props => {
  const {email, code} = props.data;
  const {setCode, isValidCode, loading} = props.hooks;
  const {_verify, _handleCodeInput, _resendCode} = props.helpers;

  return (
    <View style={generalStyles.container}>
      <View style={[generalStyles.boxContainer, styles.textContainer]}>
        <Image source={images.logo} style={{height: 48, width: 48}} />
        <Text style={styles.text}>
          We have sent the verify account instructions to{' '}
          <Text style={{fontWeight: 'bold'}}>{email}</Text>{' '}
        </Text>
        <Text
          text={'Please check your email to verify your account'}
          color={'rgba(55,53,47,0.8)'}
          align={'center'}
        />
        <TextInput
          style={styles.textInput}
          text={code}
          ref={input => {
            this.firstTextInput = input;
          }}
          autoFocus={true}
          autoCapitalize="none"
          onChangeText={text => {
            setCode(text);
            _handleCodeInput(text);
          }}
          maxLength={6}
          placeholder={'Enter code'}
          returnKeyType={'send'}
          onSubmitEditing={() => (isValidCode === true ? _verify() : null)}
        />
        <Text onPress={() => _resendCode()}>Resend code</Text>
        <Button
          onPress={() => _verify()}
          text={'Verify'}
          primary
          forceDisabled={isValidCode === false ? true : false}
        />
      </View>
      {loading ? <Loader /> : null}
    </View>
  );
};

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
import {smallDevice} from '../../../../components/device';

export default Password = props => {
  const {history, _goToUsername} = props.routes;
  const {password} = props.data;
  const {errorPassword, setPassword, loading} = props.hooks;

  return (
    <React.Fragment>
      <View style={generalStyles.container}>
        <TopBar
          leftButton
          onLeftBtnPress={() => {
            history.push({pathname: 'register-email'});
          }}
          centerButton
        />
        <ProgressBar width={'40%'} />
        <View style={generalStyles.row}>
          <View>
            <Headline
              style={{marginTop: smallDevice() ? 23 : 30}}
              text={'Password'}
            />
            <Paragraph
              style={{marginBottom: smallDevice() ? 0 : 10}}
              text={'Create your password'}
            />
          </View>
          <TextInput
            style={styles.textInput}
            ref={input => {
              this.firstTextInput = input;
            }}
            onSubmitEditing={() => _goToUsername()}
            text={password}
            onChangeText={text => setPassword(text)}
            autoFocus={true}
            errorText={errorPassword}
            placeholder={'Enter your password'}
            secureTextEntry={true}
            returnKeyType={'send'}
          />
          <Button
            primary
            onPress={() => _goToUsername()}
            text={'Next'}
            disabled={loading == false ? false : true}
            loader={loading == false ? false : true}></Button>
        </View>
      </View>
    </React.Fragment>
  );
};

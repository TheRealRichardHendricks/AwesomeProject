import React, {useContext} from 'react';
import {View} from 'react-native';
import {Route, __RouterContext} from 'react-router-native';
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
} from './backHandler';

// Screens
import Auth from '../screens/Auth/Auth';
import Welcome from '../screens/Welcome';
import Email from '../screens/Auth/register/Email';
import Password from '../screens/Auth/register/Password';
import Username from '../screens/Auth/register/Username';
import ProfilePhoto from '../screens/Auth/register/ProfilePhoto';
import SuccessRegister from '../screens/Auth/register/SuccessRegister';
import VerifyEmail from '../screens/Auth/register/VerifyEmail';

const Routes = () => {
  // Pass location and history data to handle back button for Android
  const {location, history} = useContext(__RouterContext);
  removeAndroidBackButtonHandler();
  handleAndroidBackButton(location.pathname, history);

  return (
    <View style={{flex: 1}}>
      <Route exact path="/" component={Auth} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/register-email" component={Email} />
      <Route exact path="/register-password" component={Password} />
      <Route exact path="/register-username" component={Username} />
      <Route exact path="/register-photo" component={ProfilePhoto} />
      <Route
        exact
        path="/register-success-register"
        component={SuccessRegister}
      />
      <Route exact path="/verify-email" component={VerifyEmail} />
    </View>
  );
};

export default Routes;

//history.goBack() - vraca jedan page unazad
//history.goBack(-2) - vraca n page-a unazad
//history.push('/login') - go to route

/*
history.index = 0; -  reset stack to custom index
history.goBack();
*/

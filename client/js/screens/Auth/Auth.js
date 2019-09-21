import React, {useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import Loader from '../../components/Loader';

const Auth = ({loginByAuthToken, auth, history}) => {
  useEffect(() => {
    _getToken();
  }, []);

  _getToken = async () => {
    // login with token
    history.push('/welcome');
  };

  return <Loader />;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  //loginByAuthToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

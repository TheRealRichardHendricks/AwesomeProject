import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  createUser,
  generateConfirmUserCode,
} from '../../../../redux/actions/registerActions';
import SuccessRegister from './SuccessRegister';

const index = ({register, createUser, history, generateConfirmUserCode}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(register.email);

  _createUser = () => {
    setLoading(true);
    createUser().then(() => _redirect(email));
  };

  _redirect = _email => {
    history.push({
      pathname: 'verify-email',
      state: {email: _email},
    });
  };

  return (
    <SuccessRegister hooks={loading} actions={_createUser} states={register} />
  );
};

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = {
  createUser,
  generateConfirmUserCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

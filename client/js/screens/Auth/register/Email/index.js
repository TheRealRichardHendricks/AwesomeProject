import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import EmailValidator from 'email-validator';
import Email from './Email';
import {
  isExisitingEmail,
  cancelRegistration,
} from '../../../../redux/actions/registerActions';

const index = ({history, isExisitingEmail, register, cancelRegistration}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (register.email !== undefined) setEmail(register.email);
  }, []);

  validateInput = () => {
    setLoading(true);
    if (email === null || email === '') {
      setErrorEmail('Email field is empty');
      setLoading(false);
      return false;
    }
    if (!EmailValidator.validate(email)) {
      setErrorEmail('Please enter a valid email');
      setLoading(false);
      return false;
    }

    isExisitingEmail(email).then(() => redirect());
  };

  redirect = () => {
    if (register.isUserExists === true) {
      setErrorEmail('User already exists');
      setLoading(false);
      return false;
    } else {
      history.push({pathname: 'register-password'});
    }
  };

  cancel = () => {
    cancelRegistration();
  };

  return (
    <Email
      data={{email}}
      routes={{history, cancel}}
      validation={validateInput}
      hooks={{errorEmail, setErrorEmail, setEmail, loading}}
    />
  );
};

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = {
  isExisitingEmail,
  cancelRegistration,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

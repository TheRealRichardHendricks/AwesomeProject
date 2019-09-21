import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import {connect} from 'react-redux';
import {pickImage} from '../../../../redux/actions/registerActions';
import ImagePicker from 'react-native-image-crop-picker';

const index = ({history, pickImage}) => {
  _redirect = _pathname => {
    history.push({pathname: _pathname});
  };

  _pickCamera = () => {
    pickImage('img');
    _redirect('register-success-register');
  };

  _pickImage = () => {
    pickImage('img');
    _redirect('register-success-register');
  };

  _setRandomAnimalAvatar = () => {
    pickImage('img');
    _redirect('register-success-register');
  };

  return (
    <ProfilePhoto
      actions={{_pickCamera, _pickImage, _setRandomAnimalAvatar, _redirect}}
    />
  );
};

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = {
  pickImage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

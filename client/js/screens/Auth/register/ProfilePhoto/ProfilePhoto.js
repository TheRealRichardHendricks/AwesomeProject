import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

// Ui elements
import generalStyles from '../../../../components/generalStyles';
import styles from './styles';
import images from '../../../../components/images';
import TopBar from '../../../../components/TopBar';
import Button from '../../../../components/Button';
import ProgressBar from '../ProgressBar';
import Headline from '../../../../components/Headline';
import Paragraph from '../../../../components/Paragraph';

export default ProfilePhoto = props => {
  const {
    _pickCamera,
    _pickImage,
    _setRandomAnimalAvatar,
    _redirect,
  } = props.actions;

  return (
    <React.Fragment>
      <View style={generalStyles.container}>
        <TopBar
          leftButton
          centerButton
          onLeftBtnPress={() => _redirect('register-username')}
        />
        <ProgressBar width={'80%'} />
        <View style={styles.row}>
          <Headline style={styles.headline} text={'Profile photo'} />
          <Paragraph text={'Upload a photo or default one will be chosen'} />
        </View>
        <View style={generalStyles.row}>
          <View style={styles.profilePhoto}>
            <Image
              source={images.profilePhoto}
              style={{width: 106, height: 106}}
            />
            <Button
              style={styles.photoBtn}
              onPress={() => this.ActionSheet.show()}
              text={'Add photo'}
              clean
              imageLeft={images.addIcon}
            />
          </View>
          <Button
            clean
            text={`I'll do this later`}
            onPress={() => _setRandomAnimalAvatar()}></Button>
          <Button primary forceDisabled onPress={() => {}} text="Next" />
        </View>
      </View>
      {/* Action sheet */}
      <ActionSheet
        ref={o => (this.ActionSheet = o)}
        options={['Take Photo ...', 'Choose from Library ...', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 0:
              return _pickCamera();
            case 1:
              return _pickImage();
            default:
              break;
          }
        }}
      />
    </React.Fragment>
  );
};

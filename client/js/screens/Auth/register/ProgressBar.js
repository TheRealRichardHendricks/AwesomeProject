import React from 'react';
import {View} from 'react-native';
import generalStyles from '../../../components/generalStyles';
import {isIOS, isIphoneX} from '../../../components/device';

const ProgressBar = props => {
  return (
    <React.Fragment>
      <View
        style={[
          generalStyles.progressBar,
          (() => {
            if (isIOS && isIphoneX) {
              return {top: 100};
            } else if (isIOS) {
              return {top: 75};
            } else {
              return {top: 60};
            }
          })(),
        ]}
      />
      <View
        style={[
          generalStyles.progressFill,
          (() => {
            if (isIOS && isIphoneX) {
              return {top: 100};
            } else if (isIOS) {
              return {top: 75};
            } else {
              return {top: 60};
            }
          })(),
          {width: props.width},
        ]}
      />
    </React.Fragment>
  );
};

export default ProgressBar;

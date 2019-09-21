import React, {Component} from 'react';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './js/redux/store/store';
import {NativeRouter} from 'react-router-native';
import Routes from './js/utils/Routes';

/**
 * Ignore not solvable warnings
 */
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillUpdate is deprecate',
]);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes />
        </NativeRouter>
      </Provider>
    );
  }
}

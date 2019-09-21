import {BackHandler} from 'react-native';
/**
 * Attaches an event listener that handles the android-only hardware
 * back button
 * @param  {Function} history The function to call on click
 */
const handleAndroidBackButton = (location, history) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    switch (location) {
      case '/welcome':
        exitApp();
        break;

      default:
        history.goBack();
        break;
    }
    return true;
  });
};
/**
 * Removes the event listener in order not to add a new one
 * every time the view component re-mounts
 */
const removeAndroidBackButtonHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => {});
};

const exitApp = () => {
  BackHandler.exitApp();
};

export {handleAndroidBackButton, removeAndroidBackButtonHandler};

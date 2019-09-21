import {
  USER_EXISTS,
  VALIDATION_OK,
  CANCEL_REGISTRATION,
  SERVICE_ERROR,
  CODE_SENT,
  USER_CREATED,
} from '../actions/types';

const initialState = {
  isUserExists: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_EXISTS:
      return {...state, isUserExists: true};
    case VALIDATION_OK:
      return {...state, isUserExists: false, ...action.payload};
    case USER_CREATED:
      return {...state, isUserExists: false};
    case CODE_SENT:
      return {initialState, ...action.payload};
    case SERVICE_ERROR:
      return {...state, error: action.payload};
    case CANCEL_REGISTRATION:
      return initialState;
    default:
      return {...state};
  }
}

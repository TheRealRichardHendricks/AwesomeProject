// import { client } from '../../config/apollo/ApolloClient';
// import {
// 	IS_EXISTING_EMAIL__QUERY,
// 	IS_EXISTING_USERNAME__QUERY,
// 	GET_CONFIRM_USER_CODE__QUERY
// } from '../../utilities/apollo/Queries';
// import {
// 	CREATE_USER__MUTATION,
// 	GENERATE_CONFIRM_USER_CODE__MUTATION,
// 	VERIFY_USER__MUTATION
// } from '../../utilities/apollo/Mutations';
import {
  USER_EXISTS,
  VALIDATION_OK,
  CANCEL_REGISTRATION,
  CODE_SENT,
  USER_CREATED,
} from './types';

export const isExisitingEmail = email => async dispatch => {
  // const res = await client
  // 	.query({ query: IS_EXISTING_EMAIL__QUERY, variables: { email: email } })
  // 	.catch(err => {
  // 		err.graphQLErrors.map(error => {
  // 			serverError = error.message;
  // 		});
  // 		return { error: serverError };
  // 	});

  // if (res.error) {
  // 	dispatch({ type: SERVICE_ERROR, payload: response.error });
  // }

  // if (res.data.isExistingEmail === true) {
  // 	dispatch({ type: USER_EXISTS });
  // } else {
  dispatch({type: VALIDATION_OK, payload: {email: email}});
  //	}
};

export const isValidPassword = password => async dispatch => {
  dispatch({type: VALIDATION_OK, payload: {password: password}});
};

export const isExistingUsername = username => async dispatch => {
  dispatch({type: VALIDATION_OK, payload: {username: username}});
};

export const pickImage = filePath => dispatch => {
  dispatch({type: VALIDATION_OK, payload: {avatar: filePath}});
};

export const createUser = () => async dispatch => {
  dispatch({type: USER_CREATED});
};

export const cancelRegistration = () => dispatch => {
  dispatch({type: CANCEL_REGISTRATION});
};

export const generateConfirmUserCode = _email => async dispatch => {
  dispatch({type: CODE_SENT});
};

export const getConfirmUserCode = _email => async dispatch => {
  dispatch({
    type: VALIDATION_OK,
    payload: {
      validationCode: '123456', //response.data.getConfirmUserCode,
    },
  });
};

export const verifyUser = (_confirmUserCode, _email) => async dispatch => {
  // verification...
};

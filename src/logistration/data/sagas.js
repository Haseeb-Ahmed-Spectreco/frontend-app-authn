import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import {
  REGISTER_NEW_USER,
  registerNewUserBegin,
  registerNewUserFailure,
  registerNewUserSuccess,
  LOGIN_REQUEST,
  loginRequestBegin,
  loginRequestFailure,
  loginRequestSuccess,
} from './actions';


// Services
import { postNewUser, login } from './service';

export function* handleNewUserRegistration(action) {
  try {
    yield put(registerNewUserBegin());

    const { redirectUrl, success } = yield call(postNewUser, action.payload.registrationInfo);

    yield put(registerNewUserSuccess(
      redirectUrl,
      success,
    ));
  } catch (e) {
    yield put(registerNewUserFailure());
    throw e;
  }
}

export function* handleLoginRequest(action) {
  try {
    yield put(loginRequestBegin());

    const { redirectUrl, success } = yield call(login, action.payload.creds);

    yield put(loginRequestSuccess(
      redirectUrl,
      success,
    ));
  } catch (e) {
    yield put(loginRequestFailure());
    throw e;
  }
}

export default function* saga() {
  yield takeEvery(REGISTER_NEW_USER.BASE, handleNewUserRegistration);
  yield takeEvery(LOGIN_REQUEST.BASE, handleLoginRequest);
}
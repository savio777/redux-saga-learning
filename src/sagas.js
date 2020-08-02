import {takeEvery, put, delay, all, call, select} from 'redux-saga/effects';
import axios from 'axios';

function* login(action) {
  if (action.user != '') {
    try {
      const response = yield call(
        axios.get,
        `https://api.github.com/users/${action.user}`,
      );

      yield put({
        type: 'CONFIRM_LOGIN',
        payload: {name: response.data.name, user: action.user},
      });
    } catch (error) {
      yield put({
        type: 'ERROR_LOGIN',
        payload: {user: action.user, error: 'Não encontrado'},
      });
    }
  } else {
    yield put({
      type: 'ERROR_LOGIN',
      payload: {user: '', error: 'Digite um nome de usuário'},
    });
  }
}

function* logout(action) {
  yield put({type: 'LOGOUT', payload: {}});
}

export default function* root() {
  yield all([
    takeEvery('ASYNC_REQUEST_LOGIN', login),
    takeEvery('LOGOUT_ACTION', logout),
  ]);
}

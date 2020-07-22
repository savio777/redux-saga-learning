import {takeEvery, put, delay, all, call} from 'redux-saga/effects';
import axios from 'axios';

function* asyncAddTodo(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.user}`,
    );

    yield put({type: 'CONFIRM_LOGIN', payload: {name: response.data.name}});
  } catch (error) {
    yield put({type: 'ERROR_LOGIN', payload: {error: 'Não encontrado'}});
  }
}

export default function* root() {
  yield all([takeEvery('ASYNC_REQUEST_LOGIN', asyncAddTodo)]);
}

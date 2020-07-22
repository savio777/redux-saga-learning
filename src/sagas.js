import {takeEvery, put, delay, all, call} from 'redux-saga/effects';
import axios from 'axios';

function* asyncAddTodo(action) {
  console.log('teste async ', action);
  const response = yield call(
    axios.get,
    `https://api.github.com/users/${action.text}`,
  );

  console.log('teste async', response.data);

  if (response.status == 200) {
    yield put({type: 'ADD_TODO', payload: {text: response.data.name}});
  }
}

export default function* root() {
  yield all([takeEvery('ASYNC_ADD_TODO', asyncAddTodo)]);
}

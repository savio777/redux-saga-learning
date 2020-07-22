import {takeEvery, put, delay, all} from 'redux-saga/effects';

function* asyncAddTodo(action) {
  //setTimeout(() => {}, 2000);
  yield delay(2000);
  console.log('teste async ', action);
  yield put({type: 'ADD_TODO', payload: {text: action.text}});
}

export default function* root() {
  yield all([takeEvery('ASYNC_ADD_TODO', asyncAddTodo)]);
}

import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import fetchData from './api';
import { setTodos } from './actions';

function* getTodos(action) {
  try {
    const data = yield call(fetchData);
    yield put(setTodos(data));
  } catch (error) {
    console.log('SOmething went wrong: ', error);
  }
};

export default function* watcherSaga() {
  yield takeLatest('GET_TODOS', getTodos)
};
import { call, put, take, takeEvery, fork } from 'redux-saga/effects'
import axios from 'axios'
import { fetchTodosSuccess } from './actions'


export function* fetchTodos() {
  const fetchedData = yield call(axios.get('http://localhost:3002/todos')
    .then((response) => {
      console.log('axios', response.data)
      return response.data
    }))
  yield put(fetchedTodosSuccess(fetchedData))

}


export function* fetchTodosRequest() {
  while (true) {
    const {} = yield take('TODOS_UPDATE_REQUEST')
    yield call(fetchTodos)
  }
}

export default function* () {
  yield fork(fetchTodosRequest)
}

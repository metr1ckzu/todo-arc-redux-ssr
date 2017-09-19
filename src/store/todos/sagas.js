import { call, put, take, takeEvery, fork } from 'redux-saga/effects'
// import api from 'services/api'
import axios from 'axios'
import { fetchTodosSuccess } from './actions'

// api.get('/todos').
//
// function* fetchTodos(action) {
//   try {
//     const todos = yield call(api.get('/todos'),action.payload.data)
//     yield put({type: 'TODOS_FETCH_SUCCEEDED', todos: todos})
//     yield put(fetchedData(todos))
//     yield console.log('saga working')
//   } catch (e) {
//     yield put({type: 'TODOS_FETCH_FAILED', message: e.message})
//   }
// }
//
// function* mySaga() {
//   yield takeEvery('TODOS_FETCH_REQUESTED', fetchTodos)
// }



export function* fetchTodos() {
  const fetchedData = yield call(axios.get('http://localhost:3002/todos')
    .then((response) => {
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

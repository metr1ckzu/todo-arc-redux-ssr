import { call, put, take, takeLatest, fork } from 'redux-saga/effects'
import axios from 'axios'
import { fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess } from './actions'


export function* fetchTodos() {
  const apiResponse = yield call(
    axios.get,
    "http://localhost:3002/todos"
  );

  yield put(
    fetchTodosSuccess(
      apiResponse.data
    )
  );
}

export function* addTodo(text) {
  const apiResponse = yield call(
    axios,
    {
      method: 'POST',
      url: 'http://localhost:3002/todos/',
      data: {
        text: text
      }
    }
  )

  yield put(
    addTodoSuccess(text, apiResponse.data.id)
  )
}

export function* deleteTodo(id) {
  const url = 'http://localhost:3002/todos/' + id
  const apiResponse = yield call(
    axios.delete,
    url
    )

  yield put(
    deleteTodoSuccess(id)
  )
}


export function* fetchTodosRequest() {
  while (true) {
    const {} = yield take('TODOS_UPDATE_REQUEST')
    yield call(fetchTodos)
  }
}

export function* addTodoRequest() {
  while (true) {
    const { text } = yield take('ADD_TODO_REQUEST')
    yield call(addTodo, text)
  }
}

export function* deleteTodoRequest() {
  while (true) {
    const { id } = yield take('DELETE_TODO_REQUEST')
    yield call(deleteTodo, id)
  }
}

export default function* () {
  yield fork(fetchTodosRequest)
  yield fork(addTodoRequest)
  yield fork(deleteTodoRequest)
}

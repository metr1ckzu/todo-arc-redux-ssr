import { call, put, take, fork } from 'redux-saga/effects'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { fetchTodos, addTodo, deleteTodo, fetchTodosRequest, addTodoRequest, deleteTodoRequest, defaultTodoSaga } from './sagas'
import saga from './sagas'
import moxios from 'moxios'
import axios from 'axios'
import { fetchTodosSuccess, addTodoSuccess, deleteTodoSuccess } from './actions'

describe('todos sagas tests', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })



  it('addTodo test', () => {
    const text = 'kek'
    const apiArgs = {method: 'POST', url: 'http://localhost:3002/todos/', data: {text: text}}
    const apiResponse = {
      data: {id: 1}
    }

    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 201,
         response: {data: {id: 1}}
       })
    })

    return expectSaga(addTodo, text)
      .dispatch(axios, apiArgs)
      .put(addTodoSuccess(text, apiResponse.id))
      .run()
  })

  it('deleteTodo test', () => {
    const id = 1
    const url = 'http://localhost:3002/todos/' + id
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 200,
         response: {data: {id: 1}}
       })
    })

    return expectSaga(deleteTodo, id)
      .dispatch(axios, url)
      .put(deleteTodoSuccess(id))
      .run()
  })

  it('fetchTodos test', () => {
    moxios.wait(function () {
       let request = moxios.requests.mostRecent()
       request.respondWith({
         status: 200,
         response: [{ text: 'kek', id: 1}]
       })
    })
    const apiResponse = [{text: 'kek', id: 1}]

    return expectSaga(fetchTodos)
      .dispatch(axios.get, "http://localhost:3002/todos")
      .put(fetchTodosSuccess(apiResponse))
      .run()
  })

  it('addTodoRequest test', () => {
    const generator = addTodoRequest()
    const text = 'kek'
    expect(generator.next().value).toEqual(take('ADD_TODO_REQUEST'))
    expect(generator.next({text}).value).toEqual(call(addTodo, 'kek'))
  })

  it('deleteTodoRequest test', () => {
    const generator = deleteTodoRequest()
    const id = 1
    expect(generator.next().value).toEqual(take('DELETE_TODO_REQUEST'))
    expect(generator.next({id}).value).toEqual(call(deleteTodo, id))
  })

  it('fetchTodosRequest test', () => {
    const generator = fetchTodosRequest()
    expect(generator.next().value).toEqual(take('TODOS_UPDATE_REQUEST'))
    expect(generator.next({}).value).toEqual(call(fetchTodos))
  })

  it('defaultTodoSaga', () => {
    const generator = saga()
    expect(generator.next().value).toEqual(fork(fetchTodosRequest))
    expect(generator.next().value).toEqual(fork(addTodoRequest))
    expect(generator.next().value).toEqual(fork(deleteTodoRequest))
  })

})

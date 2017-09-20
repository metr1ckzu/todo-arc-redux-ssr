import {fetchTodosRequest,
  fetchTodosSuccess,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess
  } from './actions'

describe('actions test', () => {
  it('fetchTodosRequest test', () => {
    expect(fetchTodosRequest()).toEqual({
      type: 'TODOS_UPDATE_REQUEST'
    })
  })

  it('fetchTodosSuccess test', () => {
    expect(fetchTodosSuccess({text: 'kek', id: 1})).toEqual({
      type: 'FETCH_TODOS_SUCCESS',
      'payload': {"fetchedData": {"id": 1, "text": "kek"}}
    })
  })

  it('addTodoRequest test', () => {
    expect(addTodoRequest('kek')).toEqual({
      type: 'ADD_TODO_REQUEST',
      text: 'kek'
    })
  })

  it('addTodoSuccess test', () => {
    expect(addTodoSuccess('kek', 1)).toEqual({
      type: 'ADD_TODO_SUCCESS',
      payload: {text: 'kek', id: 1}
    })
  })

  it('deleteTodoRequest test', () => {
    expect(deleteTodoRequest(1)).toEqual({
      type: 'DELETE_TODO_REQUEST',
      id: 1
    })
  })

  it('deleteTodoSuccess test', () => {
    expect(deleteTodoSuccess(1)).toEqual({
      type: 'DELETE_TODO_SUCCESS',
      payload: {id: 1}
    })
  })
})

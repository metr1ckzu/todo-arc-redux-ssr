export function fetchTodosRequest() {
  return {
    type: 'TODOS_UPDATE_REQUEST'
  }
}

export function fetchTodosSuccess(fetchedData) {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    payload: {fetchedData}
  }
}

export function addTodoRequest(text) {
  return {
    type: 'ADD_TODO_REQUEST',
    text
  }
}

export function addTodoSuccess(text, id) {
  return {type: 'ADD_TODO_SUCCESS', payload: {text, id}}
}

export function deleteTodoRequest(id) {
  return {
    type: 'DELETE_TODO_REQUEST',
    id
  }
}

export function deleteTodoSuccess(id) {
  return {
    type: 'DELETE_TODO_SUCCESS',
    payload: {id}
  }
}

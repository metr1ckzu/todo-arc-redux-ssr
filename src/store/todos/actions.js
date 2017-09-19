// import axios from 'axios'
//
// export function fetchTodos() {
//   return function(dispatch) {
//     axios.get('http://localhost:3002/todos')
//       .then((response) => {
//         const fetchedData = response.data
//         dispatch({type: 'FETCHED_TODOS', fetchedData})
//       })
//   }
// }
//
// export function deleteTodo(id) {
//   return function(dispatch) {
//     axios.delete('http://localhost:3002/todos/'+id)
//       .then(dispatch({type: 'DELETE_TODO', id}))
//   }
// }
//
// export function addTodo(text) {
//   return function(dispatch) {
//     const id = Date.now();
//     axios({
//       method: 'POST',
//       url: 'http://localhost:3002/todos/',
//       data: {
//         id: id,
//         text: text
//       }
//     }).then(dispatch({type: 'ADD_TODO', id: id, text}))
//   }
// }
//

const id = Date.now();
export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  payload: {text, id}
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {id}
})

export const fetchTodosSuccess = (fetchedData) => ({
  type: 'FETCH_TODOS_SUCCESS',
  payload: {fetchedData}
})

export const fetchTodosRequest = () => ({
  type: 'TODOS_UPDATE_REQUEST'
})

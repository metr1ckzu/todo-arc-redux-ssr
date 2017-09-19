const todos = (state = [], action, payload) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text
        }
      ]
    case 'DELETE_TODO_SUCCESS':
      return state.filter(todo => todo.id !== action.payload.id)

    case 'FETCH_TODOS_SUCCESS':
      return state.concat(action.payload.fetchedData)

    default:
      return state
  }
}

export default todos

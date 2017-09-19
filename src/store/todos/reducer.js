const todos = (state = [], action, payload) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    case 'FETCH_TODOS_SUCCESS':
      return state.concat(action.payload.fetchedData)

    default:
      return state
  }
}

export default todos

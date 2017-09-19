const todos = (state = [], action, payload) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    case 'FETCH_TODOS_SUCCESS':
      return state.concat(payload.fetchedData)

    default:
      return state
  }
}

export default todos

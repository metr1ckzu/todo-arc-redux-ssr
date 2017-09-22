// import { connect } from 'react-redux'
// import { deleteTodoRequest, fetchTodosRequest } from '../store/actions'
// import TodoList from '../components/TodoList'
// import { fetchState } from 'react-router-server'
// import React from 'react'
// import { isBrowser, isServer } from 'config'
//
// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }
//
// const mapDispatchToProps = {
//   onTodoClick: deleteTodoRequest
// }
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
// export default VisibleTodoList

import React from 'react'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fetchTodosRequest, deleteTodoRequest } from 'store/actions'
import { isBrowser, isServer } from 'config'
import TodoList from '../components/TodoList'

class VisibleTodoList extends React.Component {

  componentWillMount() {
    const { fetchTodos, hasServerState, setServerState, cleanServerState } = this.props

    if (!hasServerState) {
      if (isServer) {
        fetchTodos().then(setServerState, setServerState)
      } else {
        fetchTodos()
      }
    } else if (isBrowser) {
      cleanServerState()
    }
  }

  render() {
    const {todos, onTodoClick} = this.props
    return <TodoList {...{todos, onTodoClick}} />
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(deleteTodoRequest(id)),
  fetchTodos: () => dispatch(fetchTodosRequest())
})

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.todos,
  }),
  actions => ({
    setServerState: todos => actions.done({ todos }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList))

import React from 'react'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fetchTodosRequest, deleteTodoRequest } from 'store/actions'
import { isBrowser, isServer } from 'config'
import { TodoList } from 'components'

export class VisibleTodoList extends React.Component {

  componentWillMount() {
    const { fetchTodos, hasServerState, setServerState, cleanServerState } = this.props

    if (!hasServerState) {
      if (isServer) {
        fetchTodos()
        setServerState()
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

export const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export const mapDispatchToProps = {
  onTodoClick: deleteTodoRequest,
  fetchTodos: fetchTodosRequest
}

export const withServerState = fetchState(
  state => ({
    hasServerState: !!state.todos,
  }),
  actions => ({
    setServerState: todos => actions.done({ todos }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList))

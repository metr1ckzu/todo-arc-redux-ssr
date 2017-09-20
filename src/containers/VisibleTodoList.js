import { connect } from 'react-redux'
import { deleteTodoRequest, fetchTodosRequest } from '../store/actions'
import TodoList from '../components/TodoList'
import { fetchState } from 'react-router-server'
import React from 'react'
import { isBrowser, isServer } from 'config'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  onTodoClick: deleteTodoRequest
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
//
// class VisibleTodoList extends React.Component {
//   componentWillMount() {
//     this.props.readAPI()
//   }
//
//   render() {
//     return <TodoList />
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }
//
// const mapDispatchToProps = (dispatch, { done }) => ({
//   readAPI: () => dispatch(fetchTodosRequest()).then(done, done)
// })
//
// export default withDone(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList))

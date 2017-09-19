import { connect } from 'react-redux'
import { deleteTodo } from '../store/actions'
import TodoList from '../components/TodoList'
import { withDone } from 'react-router-server'
import React from 'react'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  onTodoClick: deleteTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList

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
// const mapDispatchToProps = (dispatch, { done }) => ({
//   readAPI: () => dispatch(fetchSaga()).then(done, done)
// })
//
// export default withDone(connect(null, mapDispatchToProps)(VisibleTodoList))

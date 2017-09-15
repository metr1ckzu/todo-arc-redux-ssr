import { connect } from 'react-redux'
import { deleteTodo } from '../store/actions'
import TodoList from '../components/TodoList'
import { withDone } from 'react-router-server'

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

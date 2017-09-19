import { connect } from 'react-redux'
import { addTodo } from '../store/actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = {
  addTodo: addTodo
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer

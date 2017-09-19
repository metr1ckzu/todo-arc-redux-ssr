import { connect } from 'react-redux'
import { addTodoRequest } from '../store/actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = {
  addTodo: addTodoRequest
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer

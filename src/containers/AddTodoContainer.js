import { connect } from 'react-redux'
import { addTodo } from '../store/actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = {
  addTodo: addTodo
}

let AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer

import {connect} from 'react-redux';
import { addTodoRequest } from 'store/actions';
import { AddTodo } from 'components'

export const mapDispatchToProps = {
  addTodo: addTodoRequest
}

export default connect(null, mapDispatchToProps)(AddTodo)

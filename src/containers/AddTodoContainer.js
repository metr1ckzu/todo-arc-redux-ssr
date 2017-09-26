import {connect} from 'react-redux';
import { addTodoRequest } from 'store/actions';
import { AddTodo } from 'components'

// export const mapDispatchToProps = {
//   addTodoRequest: addTodoRequest
// }

export const mapDispatchToProps = (dispatch) => ({
  addTodoRequest: (text) => dispatch(addTodoRequest(text))
})
export default connect(null, mapDispatchToProps)(AddTodo)

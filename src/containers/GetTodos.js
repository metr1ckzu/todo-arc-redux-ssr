import { connect } from 'react-redux'
import { fetchTodos } from '../store/actions'
import GetTodosButton from '../components/GetTodosButton'
import { fetchTodosRequest } from '../store/actions'

// const mapDispatchToProps = {
//   onClick: fetchTodoRequest
// }

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(fetchTodosRequest())
})

const GetTodos = connect(null, mapDispatchToProps)(GetTodosButton)

export default GetTodos

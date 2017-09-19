import { connect } from 'react-redux'
import { fetchTodos } from '../store/actions'
import GetTodosButton from '../components/GetTodosButton'
import { fetchTodoRequest } from '../store/actions'

const mapDispatchToProps = {
  onClick: fetchTodoRequest
}

const GetTodos = connect(null, mapDispatchToProps)(GetTodosButton)

export default GetTodos

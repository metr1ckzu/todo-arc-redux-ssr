import { connect } from 'react-redux'
import { fetchTodos } from '../store/actions'
import GetTodosButton from '../components/GetTodosButton'

const mapDispatchToProps = {
  onClick: fetchTodos
}

const GetTodos = connect(null, mapDispatchToProps)(GetTodosButton)

export default GetTodos

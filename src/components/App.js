import React from 'react'
// import AddTodoContainer from 'containers/AddTodoContainer'
// import VisibleTodoList from 'containers/VisibleTodoList'
import { AddTodoContainer, VisibleTodoList } from 'containers'
import { Title } from 'components'

const App = () => (
  <div>
    <Title />
    <VisibleTodoList />
    <AddTodoContainer />
  </div>
)

export default App

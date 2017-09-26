import React from 'react'
import { mount } from 'enzyme'
import { mapDispatchToProps, withServerState, mapStateToProps, VisibleTodoList } from './VisibleTodoList'
import * as actions     from '../store/todos/actions'


describe('AddTodoContainer tests', () => {

  it('mapDispatchToProps test', () => {
    expect(mapDispatchToProps).toEqual({
      onTodoClick: actions.deleteTodoRequest,
      fetchTodos: actions.fetchTodosRequest
    })
  })

  it('mapDispatchToProps test', () => {
    const state = {
      todos:{
        test: "test",
        id: 123,
        completed: false
      }
    }
    expect(mapStateToProps(state)).toEqual({ todos: { test: 'test', id: 123, completed: false } })
  })

  it('componentWillMount test', () => {
    const props = {
      fetchTodosRequest: jest.fn(),
      todos:[{
        text: "test",
        id: 123,
      },],
      hasServerState: false,
      setServerState: jest.fn(),
      fetchTodos: jest.fn(),
      cleanServerState: jest.fn(),
    }
    const wrapper = mount(<VisibleTodoList {...props} />)
  })

  it('componentWillMount test', () => {
    const props = {
      fetchTodosRequest: jest.fn(),
      todos:[{
        text: "test",
        id: 123,
      },],
      hasServerState: true,
      setServerState: jest.fn(),
      fetchTodos: jest.fn(),
      cleanServerState: jest.fn(),
    }
    const wrapper = mount(<VisibleTodoList {...props} />)
  })

  it('withServerState test', () => {
    console.log(withServerState())
  })
})

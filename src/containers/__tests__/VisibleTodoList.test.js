import React from 'react'
import { mount } from 'enzyme'
import { mapDispatchToProps, withServerState, mapStateToProps, VisibleTodoList } from '../VisibleTodoList'


describe('VisibleTodoList tests', () => {

  it('mapDispatchToProps test', () => {
    const dispatchSpy = jest.fn()
    mapDispatchToProps(dispatchSpy).fetchTodos()
    mapDispatchToProps(dispatchSpy).onTodoClick(1)
    expect(dispatchSpy.mock.calls).toEqual([
        [ { type: 'DEFAULT_FETCH_TODOS_REQUEST' } ],
        [ { type: 'DEFAULT_DELETE_TODO_REQUEST' } ] ])
    })

  it('mapStateToProps test', () => {
    const state = {
      todos:{
        test: "test",
        id: 123
      }
    }
    expect(mapStateToProps(state)).toEqual({ todos: { test: 'test', id: 123} })
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

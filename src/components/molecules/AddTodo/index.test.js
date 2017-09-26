import AddTodo from '.'
import { mount } from 'enzyme'
import React from 'react'

describe('AddTodo', () => {
  function setup() {
    const props = {
      addTodoRequest : jest.fn(),
    }
    const wrapper = mount(<AddTodo {...props}/>)
    return {
      props,
      wrapper

    }
  }
  it('should render addtodo', () => {
    const { props, wrapper } = setup()
    wrapper.find('form').simulate('submit')
    expect(props.addTodoRequest.mock.calls.length).toBe(0)
  })
  it('Should add todo', () => {
    const { props, wrapper } = setup()
    wrapper.find('input').node.value = 'abc'
    wrapper.find('form').simulate('submit')
    expect(props.addTodoRequest.mock.calls.length).toBe(1)
  })
})

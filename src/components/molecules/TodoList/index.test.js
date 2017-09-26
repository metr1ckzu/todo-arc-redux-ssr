import TodoList from '.'
import { mount } from 'enzyme'
import React from 'react'

describe('TodoList test', () => {
  function setup() {
    const props = {
      onTodoClick : jest.fn(),
      todos: [{id: 1, text: 'kek'}]
    }
    const wrapper = mount(<TodoList {...props}/>)

    return {
      props,
      wrapper
    }
  }

  it('Must render todos and handle actions', () => {
    const { props, wrapper } = setup()
    wrapper.find('button').simulate('click')
    expect(props.onTodoClick.mock.calls.length).toBe(1)
  })
})

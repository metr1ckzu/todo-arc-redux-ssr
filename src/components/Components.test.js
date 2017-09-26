import React from 'react'
import { shallow, mount } from 'enzyme'

import Title from './Title'
import Todo from './Todo'
import TodoList from './TodoList'
import AddTodo from './AddTodo'


describe('Components test', () => {
  describe('Title test', () => {
    it('Title must render h1', () => {
      const wrapper = shallow(<Title />)
      expect(wrapper.contains([
          <h1>Redux Todo</h1>
      ])).toEqual(true)
    })
  })

  describe('Todo test', () => {
    it('Must render li elements', () => {
      const wrapper = shallow(<Todo text='kek'/>)
      expect(wrapper.contains([
        <li>kek</li>
      ]))
    })
  })

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

  describe('AddTodo', () => {
    function setup() {
      const props = {
        addTodo : jest.fn(),
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
      expect(props.addTodo.mock.calls.length).toBe(0)
    })
    it('Should add todo', () => {
      const { props, wrapper } = setup()
      wrapper.find('input').node.value = 'abc'
      wrapper.find('form').simulate('submit')
      expect(props.addTodo.mock.calls.length).toBe(1)
    })
  })
})

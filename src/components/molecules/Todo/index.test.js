import Todo from '.'
import { shallow } from 'enzyme'
import React from 'react'

describe('Todo test', () => {
  it('Must render li elements', () => {
    const wrapper = shallow(<Todo text='kek'/>)
    expect(wrapper.contains([
      <li>kek</li>
    ]))
  })
})

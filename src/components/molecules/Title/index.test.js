import Title from '.'
import { shallow } from 'enzyme'
import React from 'react'

describe('Title test', () => {
  it('Title must render h1', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper.contains([
        <h1>Redux Todo</h1>
    ])).toEqual(true)
  })
})

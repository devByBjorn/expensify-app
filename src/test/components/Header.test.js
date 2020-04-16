import React from 'react'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import Header from '../../components/Header'

test('Should render Header corectly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  // expect(toJson(wrapper)).toMatchSnapshot()
})

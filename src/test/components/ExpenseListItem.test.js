import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import { expenses, prevState } from '../fixtures/expenses'

test('should render ExpenseLIstItem', () => {
  const wrapper = shallow(<ExpenseListItem {...prevState[0]} />)
  expect(wrapper).toMatchSnapshot()
})
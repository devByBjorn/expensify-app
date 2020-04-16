import React from 'react'
import { shallow } from 'enzyme'
import ExpenseSummary from '../../components/ExpenseSummary'


test('should render ExpenseSummary with multiple expenses correctly', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={299456456464654} />).dive()
  expect(wrapper).toMatchSnaphot()
})

test('should render ExpenseSummary with 1 expenses correctly', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={299} />).dive()
  expect(wrapper).toMatchSnaphot()
})

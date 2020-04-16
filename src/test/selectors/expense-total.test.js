import getExpenseAmountTotal from '../../selectors/expense-total'
import moment from 'moment'
import { expenses } from '../fixtures/expenses'

test('should return total amount of expenses', () => {
  const result = getExpenseAmountTotal(expenses)
  expect(result).toBe(4114695)
})

test('should return amount of single expense', () => {
  const oneExpense = [
    {
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: 0
    }
  ]

  const result = getExpenseAmountTotal(oneExpense)
  expect(result).toBe(195)
})

test('should return amount 0 if no expenses', () => {
  const noExpenses = []
  const result = getExpenseAmountTotal(noExpenses)
  expect(result).toBe(0)
})
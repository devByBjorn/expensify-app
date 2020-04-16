import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import uuid from 'uuid'

test('should setup remove expense object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense', () => {
  const action = editExpense('abc123', { note: 'hello' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'hello'
    }
  })
})

test('should set up add expense with provided values', () => {
  const data = {
    description: 'rent',
    note: 'january 2020',
    amount: 5000,
    createdAt: 123,
  }

  const action = addExpense(data)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  })
})

test('should set up add expense default', () => {
  const defaultData = addExpense()

  expect(defaultData).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
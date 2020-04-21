import expensesReducer from '../../reducers/expenses'
import { prevState, expenses } from '../fixtures/expenses'

// DEFAULT STATE
test('should set default state', () => {
  const initState = expensesReducer(undefined, { type: '@@init' })
  expect(initState).toEqual([])
})


// ADD_EXPENSE
// Returns an array with prev state plus a new item(expense) added
test('should return prev state of expenses + one added expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: "c04cc97f-525f-460a-a311-2f380c3fb7d5",
      description: "Rent",
      note: "",
      amount: 109500,
      createdAt: 100,
    }
  }

  const result = expensesReducer(prevState, action)
  expect(result).toEqual([
    ...prevState,
    action.expense
  ])
})


/// REMOVE_EXPENSE
// Returns an array of expenses that do not have the mathing id
test('should remove expense with matching id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: prevState[1].id // Test id
  }
  const result = expensesReducer(prevState, action)
  expect(result).toEqual([prevState[0]])
})

// ID not found -shoulnd leave array untouched
test('should not remove any expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const result = expensesReducer(prevState, action)
  expect(result).toEqual(prevState)
})


/// EDIT_EXPENSE
// should return an array of prevState plus update props on identified expense
test('should return list of expenses with updated props on chosen expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: prevState[1].id,
    updates: {
      description: "Dinner bill", // Edit test
      note: "Dinner with friends" // Edit test
    }
  }

  const result = expensesReducer(prevState, action)

  expect(result).toEqual([
    prevState[0],
    {
      ...prevState[1],
      description: "Dinner bill", // Edit test
      note: "Dinner with friends", // Edit test
    }
  ])
})

// If no match of id, no edit should be made
test('should return list of expenses with no updated props', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: "Dinner bill", // Edit test
      note: "Dinner with friends" // Edit test
    }
  }

  const result = expensesReducer(prevState, action)
  expect(result).toEqual(prevState)
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: {
      ...expenses
    }
  }

  const result = expensesReducer(prevState, action)
  expect(result).toEqual(action.expenses)
})

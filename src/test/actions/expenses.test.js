import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses'
import database from '../../firebase/firebase'
import { expenses } from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })

  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done())
})

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
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    note: 'better mouse',
    amount: 3000,
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database
      .ref(`expenses/${actions[0].expense.id}`)
      .once('value')
  })
    .then((snapshot) => {
      expect(snapshot.val())
        .toEqual(expenseData)
      done()
    })
})



test('should test add expense defaults to database and store', (done) => {
  const store = createMockStore({})
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  }

  store.dispatch(startAddExpense(defaultData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData,
      }
    })
    return database
      .ref(`expenses/${actions[0].expense.id}`)
      .once('value')
  })
    .then((snapshot) => {
      expect(snapshot.val())
        .toEqual(defaultData)
      done()
    })
})

test('should setup set expenses action obejct with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})
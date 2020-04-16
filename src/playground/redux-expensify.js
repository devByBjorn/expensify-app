import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
import Moment from 'react-moment';
import moment from 'moment'

const demoState = {
  expenses: [{
    id: 'kjgkjs',
    description: 'January Rent',
    note: 'This was the final payment for that adress',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}


// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER 
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// STORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})

// Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => expense.id === action.id ? { ...expense, ...action.updates } : expense)
    default:
      return state;
  }
}

const filterExpenseReducerDefault = {
  text: '',
  sortBy: 'date', // last edited, closed
  startDate: undefined,
  endDate: undefined,
}

const filterExpenseReducer = (state = filterExpenseReducerDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {

    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'amount':
        return a.amount < b.amount ? 1 : -1
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1
    }
  })
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterExpenseReducer
  })
)


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 20, createdAt: -31000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1200 }))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})


//store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(setTextFilter('e'))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(setStartDate(2))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(300))
// store.dispatch(setEndDate(1250))
// store.dispatch(sortByDate())
store.dispatch(sortByAmount())






// const tradeBaseState = {
//   trade: [{
//     id: 'jkdgjkjdsg',
//     direction: 'lång',
//     equity: 'sandvik',
//     entry: 0,
//     stop: 0,
//     target: 0,
//     rewardToRisk: 0,
//   }],
//   filters: {
//     sortBy: 'rewardToRisk', // date, direction, time in trade
//     startDate: undefined,
//     endDate: undefined
//   }
// }

// const tradeReducer = (state = [...tradeBaseState.trade], action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// const filterTradesReducer = (state = { ...tradeBaseState.filters }, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// const storeTrade = createStore(
//   combineReducers({
//     trade: tradeReducer,
//     filters: filterTradesReducer
//   })
// )

// console.log(storeTrade.getState())

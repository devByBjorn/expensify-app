import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 200 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1200 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 100 }))

const state = store.getState()
console.log(state)
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
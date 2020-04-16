import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'

export const ExpenseList = ({ expenses }) => (
  <div>
    {
      expenses.length === 0
        ? (<p>No Expenses</p>)
        : (expenses.map((expense) =>
          <ExpenseListItem
            {...expense}
            key={expense.id}
          />
        ))
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)



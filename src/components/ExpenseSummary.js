import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpenseAmountTotal from '../selectors/expense-total'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  const formatedAmount = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <h2>
      <span className="block-span">Expenses: {expensesCount}</span>
      <span className="block-span">Total costs: {formatedAmount}</span>
    </h2>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getExpenseAmountTotal(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
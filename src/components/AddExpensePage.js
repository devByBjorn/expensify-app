import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
































// import React from 'react';
// import { connect } from 'react-redux'
// import { addExpense } from '../actions/expenses'
// import ExpenseForm from './ExpenseForm'

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.dispatch(addExpense(expense))
//         props.history.push('/')
//       }}
//     />
//   </div>
// )

// export default connect()(AddExpensePage)
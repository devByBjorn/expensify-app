import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export const AddExpensePage = ({ startAddExpense, history }) => {
  const onSubmit = (expense) => {
    startAddExpense(expense)
    history.push('/')
  }
  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={onSubmit}
      />
    </div>
  )
}

// export class AddExpensePage extends React.Component {
//   onSubmit = (expense) => {
//     this.props.startAddExpense(expense)
//     this.props.history.push('/')
//   }
//   render() {
//     return (
//       <div>
//         <h1>Add expense</h1>
//         <ExpenseForm
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     )
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
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
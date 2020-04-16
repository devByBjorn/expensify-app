// Export a stateless functional component
// description, amount, createdAt
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ amount, createdAt, description, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$,00.00')}
    -
    {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
)

export default ExpenseListItem
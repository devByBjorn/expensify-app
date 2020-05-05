import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(null, mapDispatchToProps)(Header)
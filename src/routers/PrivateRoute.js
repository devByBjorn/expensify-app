import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
  isAuth,
  component: Component,
  ...rest
}) => (<Route {...rest} component={(props) => (
  isAuth ? (
    <Fragment>
      <Header />
      <Component {...props} />
    </Fragment>
  ) : (
      <Redirect to="/" />
    )
)} />
  )


const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
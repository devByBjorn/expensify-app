// Higher Order Components

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is pivate info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthanticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  )
}


// requireAuthentication

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthanticated={true} info="Loged in details" />, document.getElementById('app'))
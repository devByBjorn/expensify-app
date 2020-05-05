import authReducer from '../../reducers/auth'
//import { prevState, expenses } from '../fixtures/expenses'


//LOGIN
test('should set uid with login', () => {
  const action = {
    type: 'LOGIN',
    uid: "78LSq76Dh3gLWmOIR2Duz9bStnf1"
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

//LOGOUT
test('should clear uid with logout', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({ uid: "78LSq76Dh3gLWmOIR2Duz9bStnf1" }, action)
  expect(state).toEqual({})
})
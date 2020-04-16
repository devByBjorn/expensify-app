import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filterReducer(currentState, action)

  expect(state).toEqual({
    ...currentState,
    sortBy: 'date'
  })
})

test('should change/set startDate', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month')
  }
  const state = filterReducer(undefined, action)
  expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should change/set endDate to chosed value', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month')
  }
  const state = filterReducer(undefined, action)
  expect(state.endDate).toEqual(moment().endOf('month'))
})

test('should change text property value', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'rr'
  }
  const state = filterReducer(undefined, action)
  expect(state.text).toBe('rr')
})
import moment from 'moment'

export const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4005000,
  createdAt: moment(0).add(5, 'days').valueOf()
}]

export const prevState = [
  {
    id: "3633aceb-d0d9-44d8-a8f6-59c0f5489c3e",
    description: "Water bill",
    note: "",
    amount: 4500,
    createdAt: 200
  }, {
    id: "00ea18dd-8d53-4a2e-a95a-399d9c4adcb6",
    description: "Gas bill",
    note: "",
    amount: 1000,
    createdAt: 1200
  }
]
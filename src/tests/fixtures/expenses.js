import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: 'This is a note of nothing',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit Card',
    note: 'This is a note for credit card',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];

export default expenses;

import expensesReducer from '../../reducers/expenseReducer';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should set the initial state of expense', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense by id if it does not exist', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: 'abc',
  });
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should add an expense to the list of expenses', () => {
  const expense = {
    id: '4',
    description: 'Lamborghini',
    note: 'I bought my first lambo',
    amount: 200000,
    createdAt: 0,
  };

  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense,
  });

  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense if id exists', () => {
  const amount = 2000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('Should not edit an expense if id does not exist', () => {
  const amount = 2000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'abachada',
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

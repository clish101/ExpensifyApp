import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('removes an expense from the list of expenses', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  });
});

test('edits an expense from the list of expenses', () => {
  const action = editExpense('123a', { One: 'Ones' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123a',
    updates: { One: 'Ones' },
  });
});

test('Should setup expense action with setup values', () => {
  const expenseData = {
    description: 'Some good expense',
    note: 'This is the note of some expense',
    amount: 15666,
    createdAt: 1000,
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test('Should setup expense action with default values', () => {
  const expenseData = {
    description: '',
    note: 0,
    amount: 0,
    createdAt: 0,
  };

  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});

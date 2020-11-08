import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, removeExpense, editExpense, wrapper;
beforeEach(() => {
  history = { push: jest.fn() };
  removeExpense = jest.fn();
  editExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      history={history}
      removeExpense={removeExpense}
      editExpense={editExpense}
      expense={expenses[2]}
    />
  );
});

test('should render the edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import React from 'react';
import getFilteredExpenses from '../../selectors/expenses_selector';
import { shallow } from 'enzyme';

test('Should set the data for expenses filtered by text', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={getFilteredExpenses(expenses, filters).length}
      expensesTotal={getFilteredExpenses(expenses, filters)
        .map((x) => x.amount / 100)
        .reduce((a, b) => a + b, 0)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should set the data for "expense"  one expense that is', () => {
  const filters = {
    text: 'gu',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={getFilteredExpenses(expenses, filters).length}
      expensesTotal={getFilteredExpenses(expenses, filters)
        .map((x) => x.amount / 100)
        .reduce((a, b) => a + b, 0)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

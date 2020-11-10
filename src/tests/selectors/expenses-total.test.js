import getFilteredExpenses from '../../selectors/expenses_selector';
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return if no expenses', () => {
  const res = getExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add a single expense', () => {
  const res = getExpensesTotal([expenses[1]]);
  expect(res).toBe(109500);
});

test('Should correctly add multiple expenses', () => {
  const res = getExpensesTotal(expenses);
  expect(res).toBe(114195);
});

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenses from '../tests/fixtures/expenses';
import getFilteredExpenses from '../selectors/expenses_selector';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
  return (
    <div>
      {props.expenseCount > 0 ? (
        <h1>
          Viewing {props.expenseCount}{' '}
          {props.expenseCount === 1 ? 'expense' : 'expenses'} totalling KES
          {numeral(props.expensesTotal).format('0,00.00')}
        </h1>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
};

const MapStateToProps = (state) => ({
  expenses: getFilteredExpenses(state.expenses, state.filters),
  expenseCount: getFilteredExpenses(state.expenses, state.filters).length,
  expensesTotal: getFilteredExpenses(state.expenses, state.filters)
    .map((x) => x.amount / 100)
    .reduce((a, b) => a + b, 0),
});

export default connect(MapStateToProps)(ExpensesSummary);

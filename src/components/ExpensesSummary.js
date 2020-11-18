import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expenses from '../tests/fixtures/expenses';
import getFilteredExpenses from '../selectors/expenses_selector';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span>{' '}
          {expenseCount === 1 ? 'expense' : 'expenses'} totalling{' '}
          <span>
            KES
            {numeral(expensesTotal).format('0,00.00')}
          </span>
        </h1>

        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
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

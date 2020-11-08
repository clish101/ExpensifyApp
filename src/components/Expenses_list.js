import React from 'react';
import { connect } from 'react-redux';
import getFilteredExpenses from '../selectors/expenses_selector';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses to render</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const MapStateToProps = (state) => {
  return {
    expenses: getFilteredExpenses(state.expenses, state.filters),
  };
};

export default connect(MapStateToProps)(ExpenseList);

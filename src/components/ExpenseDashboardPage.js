import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import Expenses_list from './Expenses_list';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <Expenses_list />
  </div>
);

export default ExpenseDashboardPage;

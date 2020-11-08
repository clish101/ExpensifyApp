import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import Expenses_list from './Expenses_list';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
    <ExpenseListFilters />
    <Expenses_list />
  </div>
);

export default ExpenseDashboardPage;

import Modal from 'react-modal';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses_selector';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'Water bill', amount: 50, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 200, createdAt: 0 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

// console.log(store.getState());
// const state = store.getState();
// console.log(state.expenses);
// console.log(state.filters);

const state = store.getState();

const getVisibleExpenses = getFilteredExpenses(state.expenses, state.filters);

console.log(getVisibleExpenses);

const appRoot = document.getElementById('app');
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);

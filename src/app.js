import Modal from 'react-modal';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses_selector';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promise/promise';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

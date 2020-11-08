import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return [...state.filter(({ id }) => id !== action.id)];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...state,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const addExpense = ({
  id = uuid(),
  description = '',
  note = 0,
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id,
    description,
    note,
    amount,
    createdAt,
  },
});
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const sortByAmount = () => ({
  type: 'SORTBY_AMOUNT',
  sortByAmount: 'amount',
});

const sortByDate = () => ({
  type: 'SORTBY_DATE',
  sortByDate: 'date',
});

const setTextFilter = (text) => ({
  type: 'FILTER_TEXT',
  text,
});

const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    startDate,
  };
};

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

const filtersState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducers = (state = filtersState, action) => {
  switch (action.type) {
    case 'FILTER_TEXT':
      return { ...state, text: action.text };
    case 'SORTBY_AMOUNT':
      return { ...state, sortBy: action.sortByAmount };
    case 'SORTBY_DATE':
      return { ...state, sortBy: action.sortByDate };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers,
  })
);

//Get filtered expenses

const getFilteredExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getFilteredExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

const expenseOne = store.dispatch(
  addExpense({ description: 'January Rent', amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: 'Ps4', amount: 500, createdAt: -2000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Jan'));

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-1000));

const demoState = {
  expenses: [
    {
      id: 'ieowannlih',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

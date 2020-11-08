import filtersReducers from '../../reducers/filtersReducer';
import moment from 'moment';

test('Should setup the initial setup values', () => {
  const state = filtersReducers(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should test sort by amount', () => {
  const state = filtersReducers(undefined, { type: 'SORTBY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should test sort by date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = {
    type: 'SORTBY_DATE',
  };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should test text filter', () => {
  const text = 'To be continued';
  const state = filtersReducers(undefined, { type: 'FILTER_TEXT', text });
  expect(state.text).toBe(text);
});

test('Should set start date filter', () => {
  const startedAt = moment(0).add(5, 'days');
  const state = filtersReducers(undefined, {
    type: 'SET_START_DATE',
    startDate: startedAt,
  });
  expect(state.startDate).toBe(startedAt);
});

test('Should test set end date', () => {
  const endedAt = moment(7).subtract(5, 'days');
  const state = filtersReducers(undefined, {
    type: 'SET_END_DATE',
    endDate: endedAt,
  });
  expect(state.endDate).toBe(endedAt);
});

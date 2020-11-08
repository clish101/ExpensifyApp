import {
  setStartDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

test('Sets the start date of the expense range', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('Sets the end date of the expense range', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('Filters the expense by text input', () => {
  const action = setTextFilter('something');
  expect(action).toEqual({
    type: 'FILTER_TEXT',
    text: 'something',
  });
});

test('Filters the expense by text input', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'FILTER_TEXT',
    text: '',
  });
});

test('Sorts expenses by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORTBY_DATE',
  });
});

test('Sorts the expenses by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORTBY_AMOUNT',
  });
});

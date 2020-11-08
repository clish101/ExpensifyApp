import moment from 'moment';
const filtersState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export const filtersReducers = (state = filtersState, action) => {
  switch (action.type) {
    case 'FILTER_TEXT':
      return { ...state, text: action.text };
    case 'SORTBY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORTBY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filtersReducers;

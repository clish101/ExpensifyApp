export const sortByAmount = () => ({
  type: 'SORTBY_AMOUNT',
});

export const sortByDate = () => ({
  type: 'SORTBY_DATE',
});

export const setTextFilter = (text = '') => ({
  type: 'FILTER_TEXT',
  text,
});

export const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    startDate,
  };
};

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

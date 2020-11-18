import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({ calendarFocused: focusedInput }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else {
      this.props.sortByDate();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              placeholder="Search expenses"
            />
          </div>
          <div className="input-group__item">
            <select onChange={this.onSortChange} className="select">
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={'startDateId'}
              endDate={this.props.filters.endDate}
              endDateId={'endDateId'}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
});

const MapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ExpenseListFilters);

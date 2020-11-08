import { Switch } from 'react-router-dom';
import { createStore } from 'redux';

const IncrementCount = ({ IncreamentBy = 1 } = {}) => ({
  type: 'INCREMENT',
  IncreamentBy,
});

const DecreamentCount = ({ DecrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  DecrementBy,
});

const SetCount = ({ count } = {}) => ({
  type: 'SET',
  count,
});

const ResetCount = ({ count = 0 } = {}) => ({
  type: 'RESET',
  count,
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.IncreamentBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.DecrementBy,
      };

    case 'RESET':
      return {
        count: action.count,
      };
    case 'SET':
      return {
        count: action.count,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(IncrementCount({ IncreamentBy: 5 }));

store.dispatch(IncrementCount());

store.dispatch(ResetCount());

store.dispatch(DecreamentCount());
store.dispatch(DecreamentCount({ DecrementBy: 10 }));
store.dispatch(SetCount({ count: 101 }));

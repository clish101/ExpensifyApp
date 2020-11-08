import { v4 as uuid } from 'uuid';

export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

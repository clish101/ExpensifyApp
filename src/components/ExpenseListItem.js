import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
  <div>
    <p>These are what was spend on</p>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      KES {numeral(amount / 100).format('0,00.00')}-
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;

import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className="list-item__data">
      KES {numeral(amount / 100).format('0,00.00')}
    </h3>
  </Link>
);

export default ExpenseListItem;

import React from 'react';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
  <div>
    <p>These are what was spend on</p>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    amount - createdAt
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;

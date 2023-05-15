import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <ul className="transactions">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

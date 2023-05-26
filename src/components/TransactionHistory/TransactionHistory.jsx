import PropTypes from 'prop-types';
import {
  TransactionHistoryColumn,
  TransactionHistoryData,
  TransactionHistoryHead,
  TransactionHistoryList,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryList>
      <thead>
        <tr>
          <TransactionHistoryHead>Type</TransactionHistoryHead>
          <TransactionHistoryHead>Amount</TransactionHistoryHead>
          <TransactionHistoryHead>Currency</TransactionHistoryHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, id, amount, currency }) => {
          return (
            <TransactionHistoryColumn key={id}>
              <TransactionHistoryData>{type}</TransactionHistoryData>
              <TransactionHistoryData>{amount}</TransactionHistoryData>
              <TransactionHistoryData>{currency}</TransactionHistoryData>
            </TransactionHistoryColumn>
          );
        })}
      </tbody>
    </TransactionHistoryList>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

import transactions from '../../data/transactions.json';
import styles from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TaskFour = () => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.headEl}>Type</th>
            <th className={styles.headEl}>Amount</th>
            <th className={styles.headEl}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr
              className={clsx(
                styles.body,
                transaction.type === 'invoice' && styles.color,
                transaction.type === 'withdrawal' && styles.color2,
                transaction.type === 'payment' && styles.color3
              )}
              key={transaction.id}
            >
              <td className={styles.bodyEl}>{transaction.type}</td>
              <td className={styles.bodyEl}>{transaction.amount}</td>
              <td className={styles.bodyEl}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import styles from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ transactions }) => {
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
          {transactions.map(function (transaction, index) {
            return (
              <tr
                className={clsx(
                  styles.body,
                  index % 2 === 1 && styles.color,
                  index % 2 === 0 && styles.color2
                )}
                key={transaction.id}
              >
                <td className={styles.bodyEl}>{transaction.type}</td>
                <td className={styles.bodyEl}>{transaction.amount}</td>
                <td className={styles.bodyEl}>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

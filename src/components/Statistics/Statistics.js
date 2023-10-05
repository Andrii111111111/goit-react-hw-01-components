import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.titleContainer}>
        {title === title && <h2 className={styles.title}>{title}</h2>}
      </div>
      <ul className={styles.statList}>
        {stats.map(dat => {
          return (
            <li className={styles.item} key={dat.id}>
              <span className={styles.label}>{dat.label}</span>
              <span className={styles.percentage}>{dat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

//  <h2 className={styles.title}>{title}</h2>

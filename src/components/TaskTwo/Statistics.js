import data from '../../data/data.json';
import styles from './Statistics.module.css';

export const TaskTwo = () => {
  let col;
  return (
    <section className={styles.statistics}>
      <div className={styles.titleContainer}>
        {data.title !== undefined && (
          <h2 className={styles.title}>Upload stats</h2>
        )}
      </div>
      <ul className={styles.statList}>
        {data.map(dat => {
          col = getRandomHexColor();
          return (
            <li className={styles.item} key={dat.id} backgroundColor={col}>
              <span className={styles.label}>{dat.label}</span>
              <span className={styles.percentage}>{dat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

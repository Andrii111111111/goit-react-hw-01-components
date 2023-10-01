import data from './data.json';
import styles from './Statistics.module.css';

export const TaskTwo = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {data.map(dat => (
          <li className={styles.item} key={dat.id}>
            <span className={styles.label}>{dat.label}</span>
            <span className={styles.percentage}>{dat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(styles.item);
// styles.item.style.backgroundColor = getRandomHexColor();

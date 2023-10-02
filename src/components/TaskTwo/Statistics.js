import data from './data.json';
import styles from './Statistics.module.css';

export const TaskTwo = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {data.map(dat => (
          <li className={styles.item} key={dat.id} id="qwe">
            <span className={styles.label}>{dat.label}</span>
            <span className={styles.percentage}>{dat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// li.style.backgroundColor = getRandomHexColor();

// document.addEventListener('DOMContentLoaded', ready);
// function ready(e) {
//   const li = document.querySelectorAll('#qwe');

//   li.style.backgroundColor = getRandomHexColor();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

import data from '../../data/data.json';
import styles from './Statistics.module.css';
import clsx from 'clsx';

let li = document.querySelectorAll('#qwe');
export const TaskTwo = () => {
  return (
    <section className={styles.statistics}>
      <div className={styles.titleContainer}>
        {data.title !== undefined && (
          <h2 className={styles.title}>Upload stats</h2>
        )}
      </div>
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

// {id === 'qwe' && li.style.backgroundColor = getRandomHexColor()}
/* <h2 className={styles.title}>Upload stats</h2> */

// li.style.backgroundColor = getRandomHexColor();

// document.addEventListener('DOMContentLoaded', ready);
// function ready(e) {
//   const li = document.querySelectorAll('#qwe');

//   li.style.backgroundColor = getRandomHexColor();
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

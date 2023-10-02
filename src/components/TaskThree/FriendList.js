import styles from './FriendList.module.css';
import friends from '../../data/friends.json';
import clsx from 'clsx';

export const TaskThree = () => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(frend => (
          <li className={styles.item} key={frend.id}>
            <span
              className={clsx(
                styles.status,
                frend.isOnline === 'true' && styles.green,
                frend.isOnline === 'false' && styles.red
              )}
            ></span>
            <img
              className={styles.avatar}
              src={frend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{frend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

import styles from '../FriendList/FriendList.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <>
      <li className={styles.item} key={id}>
        <span
          className={clsx(
            styles.status,
            isOnline === true && styles.green,
            isOnline === false && styles.red
          )}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    </>
  );
};

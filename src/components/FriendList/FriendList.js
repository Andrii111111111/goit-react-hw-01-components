import styles from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.friendList}>
        {friends.map(frend => (
          <FriendListItem
            id={frend.id}
            isOnline={frend.isOnline}
            avatar={frend.avatar}
            name={frend.name}
          />
        ))}
      </ul>
    </div>
  );
};

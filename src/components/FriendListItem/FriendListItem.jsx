import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;
  return (
    <li key={id} className={css["friends-item"]}>
      <div>
        <img src={avatar} alt="avatar" width="48" />
        <p className={css["profile-trascription"]}>{name}</p>
        <p className={css["friend-paragraph"]}>
          {isOnline ? (
            <span className={css["online"]}>Online</span>
          ) : (
            <span className={css["offline"]}>Offline</span>
          )}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;

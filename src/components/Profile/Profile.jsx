import css from "./Profile.module.css";

const Profile = ({ username, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css["profile-box"]}>
        <img src={avatar} alt="User avatar" className={css["profile-img"]} />
        <p className={css["profile-name"]}>{username}</p>
        <div className={css["profile-direction"]}>
          <p className={css["profile-text"]}>@{tag}</p>
          <p className={css["profile-text"]}>{location}</p>
        </div>
      </div>
      <ul className={css["profile-list"]}>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Views</span>
          <span>{views}</span>
        </li>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

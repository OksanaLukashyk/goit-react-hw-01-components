import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div className={css.userProfile}>
        <div className={css.userDescription}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.userAvatar}
            />
            <p className={css.userName}>{username}</p>
            <p className={css.userTag}>@{tag}</p>
            <p className={css.userLocation}>{location}</p>
        </div>

        <ul className={css.userStatsList}>
            <li className={css.userStatsItem}>
                <span className={css.userStatsLabel}>Followers</span>
                <span className={css.userStatsQuantity}>{stats.followers}</span>
            </li>
            <li className={css.userStatsItem}>
                <span className={css.userStatsLabel}>Views</span>
                <span className={css.userStatsQuantity}>{stats.views}</span>
            </li>
            <li className={css.userStatsItem}>
                <span className={css.userStatsLabel}>Likes</span>
                <span className={css.userStatsQuantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
}
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div className="css.userProfile">
        <div className="css.userDescription">
            <img
                src={avatar}
                alt="User avatar"
                className="css.userAvatar"
            />
            <p className="css.userName">{username}</p>
            <p className="css.userTag">@{tag}</p>
            <p className="css.userLocation">{location}</p>
        </div>

        <ul className="stats">
            <li className='userStats'>
                <span className="css.userLabel">Followers</span>
                <span className="css.userQuantity">{stats.followers}</span>
            </li>
            <li className='userStats'>
                <span className="css.userLabel">Views</span>
                <span className="css.userQuantity">{stats.views}</span>
            </li>
            <li className='userStats'>
                <span className="css.userLabel">Likes</span>
                <span className="css.userQuantity">{stats.likes}</span>
            </li>
        </ul>
    </div>);
}
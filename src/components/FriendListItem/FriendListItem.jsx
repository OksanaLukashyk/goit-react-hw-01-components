import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<li className={css.friendListItem} key={id}>
        <span className={`${css.statusMarker} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.friendsAvatar} src={avatar} alt={name} width="48" />
        <p className={css.friendsName}>{name}</p>
        </li>)
    }
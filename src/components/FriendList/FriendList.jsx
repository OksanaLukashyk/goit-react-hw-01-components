// В компоненті  FriendList, обов'язково повинен викликатися компонент FriendListItem який в props буде отримувати інформацію про одного друга і рендерити li з цими даними.



const FriendListItem = ({ avatar, name, isOnline,id }) => {
    return (<li className="item" key={id}>
        <span className={isOnline?"Online":"Offline"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>)
    }
// Залежно від пропа isOnline, повинен змінюватися колір фону span.status. Це можна зробити за допомогою різних CSS-класів або Styled Components.

export const FriendList = ({friends}) => { 
    return (<ul className="friend-list">
            {friends.map(friend=>FriendListItem(friend)) }
</ul>)
}
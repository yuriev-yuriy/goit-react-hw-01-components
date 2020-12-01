import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendsList.module.css';

export default function FriendsList({items}) {

    return <ul className={s.list}>
        {items.map(item => (
            <li key={item.id} className={s.item}>
                <FriendListItem
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                    id={item.id}
                />
                </li>
        ))}
</ul>
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};
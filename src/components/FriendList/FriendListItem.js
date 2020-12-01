import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export default function FriendsListItem (props) {
    const { avatar, name, isOnline } = props;
        
     
    return <>
        <span className={isOnline ? s.online : s.offline}></span>
  <img className={s.avatar} src={avatar} alt={ name} width="48" />
        <p className={s.name}>{ name}</p>
    </>
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}
import PropTypes from 'prop-types';
import s from './UserProfile.module.css';

export default function UserProfile(props) {
    
    const { name,
        tag,
        location,
        avatarUrl = "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
        stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.inner}>
      <div className={s.description}>
        <img
          src={avatarUrl}
          alt={name}
          className={s.img}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
        </ul>
        </div>
    </div>
  )
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
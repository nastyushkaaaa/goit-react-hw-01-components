import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Event.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

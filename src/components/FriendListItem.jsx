import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

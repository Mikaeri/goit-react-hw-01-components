import PropTypes from 'prop-types';
import { FriendsItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendsItem className="item" key={id}>
        <Status isOnline={isOnline}>{isOnline}</Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendsItem>
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

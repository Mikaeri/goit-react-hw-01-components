import PropTypes, { string } from 'prop-types';
import {
  AvatarImage,
  Description,
  Name,
  ProfileCard,
  StatsItem,
  StatsList,
  Tag,
} from '../Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: string,
  tag: string,
  location: string,
  avatar: string,
  stats: PropTypes.objectOf(PropTypes.number),
};

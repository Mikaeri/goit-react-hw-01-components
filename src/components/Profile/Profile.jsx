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
        <p className="location">{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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

import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Description = styled.div`
  margin: 0;
  text-align: center;
`;

export const AvatarImage = styled.img`
  max-width: 40%;
  border-radius: 50%;
`;

export const StatsList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

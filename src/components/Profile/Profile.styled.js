import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin-top: 15px;
  width: 240px;
  margin-left: 15px;
  margin-right: auto;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

export const Description = styled.div`
  margin: 0;
  text-align: center;
`;

export const AvatarImage = styled.img`
  max-width: 40%;
  border-radius: 50%;
  outline: 1px solid grey;
  margin: 20px auto;
`;

export const Name = styled.p`
  font-size: 25px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: grey;
`;

export const StatsList = styled.ul`
  padding: 0;
  padding-top: 10px;
  background-color: #f4f4fd;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 10px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

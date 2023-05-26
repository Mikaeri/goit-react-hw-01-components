import styled from '@emotion/styled';

export const FriendsItem = styled.div`
  display: flex;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 15px;
  align-items: center;
  gap: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  margin-left: 15px;
  padding: 5px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

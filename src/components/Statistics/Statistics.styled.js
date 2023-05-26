import styled from '@emotion/styled';
import { getRandomColor } from 'getRandomColor';

export const StatisticSection = styled.section`
  margin-top: 15px;
  max-width: 240px;
  margin-left: 15px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
  margin-left: 40px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: calc(100% / 5);
  background-color: ${({ randomColor }) => getRandomColor};
`;

import styled from '@emotion/styled';

export const TransactionHistoryList = styled.table`
  width: 460px;
  padding: 0;
  margin-left: 15px;
  border-spacing: 0;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const TransactionHistoryHead = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: skyblue;
  color: white;
  font-weight: 400;
`;

export const TransactionHistoryData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
  text-align: center;
`;

export const TransactionHistoryColumn = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f4f4fd;
  }
`;

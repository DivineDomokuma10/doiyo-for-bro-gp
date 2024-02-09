import { PaginationItem } from '@mui/material';
import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 30px 0px;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledPaginationItem = styled(PaginationItem)`
  && {
    gap: 10px;
    color: #333;
    width: 32px;
    height: 32px;
    display: flex;
    padding: 10px;
    font-size: 13px;
    font-weight: 600;
    background: #fff;
    font-style: normal;
    line-height: normal;
    align-items: center;
    border-radius: 32px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #f1f1f1;
  }

  &.Mui-selected {
    color: #fff;
    border: none;
    background-color: #19b536 !important;
  }
`;

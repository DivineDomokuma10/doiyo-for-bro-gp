import styled from 'styled-components';
import { TRADE_STATUS } from '../../utils/constants';

const pickColor = (status: TRADE_STATUS): string => {
  switch (status) {
    case TRADE_STATUS.PENDING:
      return '#927502';
    case TRADE_STATUS.IN_PROGRESS:
      return '#000c94';
    case TRADE_STATUS.DISPUTED:
      return '#c00707';
    case TRADE_STATUS.CANCELLED:
      return '#ff9999';
    default:
      return '#0f8549';
  }
};

const pickBackground = (status: string): string => {
  switch (status) {
    case TRADE_STATUS.PENDING:
      return '#fef9e1';
    case TRADE_STATUS.IN_PROGRESS:
      return '#ebecff';
    case TRADE_STATUS.DISPUTED:
      return '#feebeb';
    case TRADE_STATUS.CANCELLED:
      return '#ffcccc';
    default:
      return '#e3fcef';
  }
};

export const TableHeadData = styled.td`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 20px;
  height: fit-content;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableBodyCell = styled.td<{ $border?: string }>`
  font-weight: 500;
  background: white;
  padding: 16px 20px;
  height: fit-content;
  border-bottom: ${({ $border }) => $border || '1px solid #e5e7eb'};
`;

export const CellText = styled.p<{ $main?: boolean }>`
  margin: 0px;
  color: ${(props) => (props.$main ? 'black' : '#999')};
  font-size: ${(props) => (props.$main ? '14px' : '12px')};
  font-weight: ${(props) => (props.$main ? '500' : '400')};
`;

export const CellContainer = styled.span<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  column-gap: ${(props) => props.$direction === 'row' && '7px'};
  row-gap: ${(props) => props.$direction === 'column' && '2px'};
  align-items: ${(props) => props.$direction == 'row' && 'center'};
`;

export const StatusContainer = styled.span<{
  $status: TRADE_STATUS;
}>`
  padding: 1px;
  display: flex;
  font-size: 10px;
  column-gap: 5px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  color: ${(props) => pickColor(props.$status)};
  background: ${(props) => pickBackground(props.$status)};

  @media (max-width: 600px) {
    width: 100px;
  }
`;

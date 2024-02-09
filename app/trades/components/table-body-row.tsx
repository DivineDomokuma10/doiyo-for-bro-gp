import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Circle } from '@mui/icons-material';
import { TableRow } from '@mui/material';
import Image from 'next/image';

import { CellText, CellContainer, TableBodyCell, StatusContainer } from './table.styles';
import { UserInterface } from '../../utils/interfaces/user.interface';
import { PAYMENT_METHOD, TRADE_POINT, TRADE_STATUS } from '../../utils/constants';
import { AppContextStore } from '../../contexts/app-context';
import { getPaymentMethodName } from '../../helperMethods';
import { UploadImage } from '../../account-settings/account-settings.styles';
import { getTradeStatusText } from '../helperMethods';

interface Props {
  _id: string;
  status: TRADE_STATUS;
  payMethod: PAYMENT_METHOD;
  amount: number;
  createdAt: string;
  tradeAd: {
    _id: string;
    creator: string;
    exCurrency: string;
  };
  payableAmount: number;
  seller: UserInterface;
  buyer: UserInterface;
  avatar: string;
  tradePoint: TRADE_POINT;
}

const TableBodyRow = ({
  payableAmount,
  payMethod,
  createdAt,
  tradeAd,
  seller,
  amount,
  status,
  buyer,
  _id,
  avatar,
  tradePoint
}: Props): ReactNode => {
  const router = useRouter();

  const {
    state: { user }
  } = useContext(AppContextStore);

  const isUserSeller = user?._id === seller?._id;

  const tradeType = isUserSeller ? 'Sell' : 'Buy';
  const tradeCounterPart = isUserSeller ? buyer : seller;
  const tradeOpenDate = new Date(createdAt);
  const payMethodName = getPaymentMethodName(payMethod);

  const handleRouteChange = (id: string): void => router.push(`/trades/${id}`);

  const TradeStatusText = getTradeStatusText(status, tradePoint, !isUserSeller);

  return (
    <TableRow sx={{ cursor: 'pointer' }} onClick={() => handleRouteChange(_id)}>
      <TableBodyCell>
        <CellContainer $direction="row">
          <UploadImage
            src={avatar ? avatar : '/assets/avatar2.svg'}
            alt="avatar"
            $width={'38px'}
            $height={'38px'}
            $mobileHeight={'38px'}
            $mobileWidth={'38px'}
          />

          <CellContainer $direction="column">
            <CellText $main>
              {tradeCounterPart?.firstName} {tradeCounterPart?.lastName}
            </CellText>
            <CellText>@{tradeCounterPart?.username}</CellText>
          </CellContainer>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <CellContainer $direction="column">
          <CellText $main>{tradeType}</CellText>
          <CellText>ID: DO4Y23</CellText>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <CellContainer $direction="row">
          <Image src="/nigeria_flag.svg" alt="avatar" width={16} height={16} />
          <CellText $main>{tradeAd?.exCurrency}</CellText>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <CellContainer $direction="row">
          <Image src="/red-bar.svg" alt="avatar" width={2} height={8} />
          <CellText $main>{payMethodName}</CellText>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <CellContainer $direction="column">
          <CellText $main>${amount}</CellText>
          <CellText>~N{payableAmount}</CellText>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <CellContainer $direction="column">
          <CellText $main>{tradeOpenDate?.toDateString()}</CellText>
          <CellText>{tradeOpenDate?.toLocaleTimeString([], { hour12: true })}</CellText>
        </CellContainer>
      </TableBodyCell>

      <TableBodyCell>
        <StatusContainer $status={status}>
          <Circle fontSize="inherit" />
          <p>{TradeStatusText}</p>
        </StatusContainer>
      </TableBodyCell>
    </TableRow>
  );
};

export default TableBodyRow;

'use client';
import React, { Fragment, ReactNode, useState } from 'react';
import { Table, TableContainer, TableHead, TableBody } from '@mui/material';

import Dashboard from '../dashboard/browse';
import { CustomizableText, TitleText } from '../styles/text.styles';
import TableBodyRow from './components/table-body-row';
import TableHeadRow from './components/table-head-row';
import { SimpleText, TradeContainer } from '../styles/layout.styles';
import useGetUserTradesMutation from '../hooks/api-hooks/useGetUserTradesMutation';
import { NUMBERS } from '../utils/constants';
import Paginator from '../components/pagination';

const Trades = (): ReactNode => {
  const [page, setPage] = useState<number>(NUMBERS.ONE);

  const { data } = useGetUserTradesMutation({
    page: page,
    limit: NUMBERS.NINE
  });

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Dashboard>
      <TradeContainer>
        <div>
          <TitleText $margin="0">Your Trade</TitleText>
          <SimpleText>View the overall details of your transactions, trades and orders.</SimpleText>
        </div>

        <div>
          <Paginator
            currentPage={page}
            totalItems={data?.totalTrades}
            handleChangePage={handleChangePage}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableHeadRow />
                </TableHead>
                {data?.data?.length ? (
                  <TableBody>
                    {data?.data?.map((data) => (
                      <Fragment key={data?._id}>
                        <TableBodyRow {...data} />
                      </Fragment>
                    ))}
                  </TableBody>
                ) : (
                  <CustomizableText $mobileWidth="400px">
                    No Trade Available, please create one
                  </CustomizableText>
                )}
              </Table>
            </TableContainer>
          </Paginator>
        </div>
      </TradeContainer>
    </Dashboard>
  );
};

export default Trades;

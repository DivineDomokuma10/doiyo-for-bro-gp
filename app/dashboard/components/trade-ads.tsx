import React, { Fragment, ReactElement, useContext, useState } from 'react';

import { BrowseAdsContextStore } from '../../contexts/browse-ads-context';
import useGetTradeAdsMutation from '../../hooks/api-hooks/useGetTradeAdsMutation';
import { NUMBERS } from '../../utils/constants';
import { TRADE_TYPE } from '../constants';
import { TradeAd } from './trade-ad';

import {
  TradeAdContainerHeaderText,
  TradeAddContainerHeader,
  TradeAdListWrapper,
  TradAdHeaderText,
  TradeAdContainer,
  TradeAdWrapper
} from '../dashboard.styles';
import { AppContextStore } from '../../contexts/app-context';
import Paginator from '../../components/pagination';

export const TradeAds = (): ReactElement => {
  const [page, setPage] = useState<number>(NUMBERS.ONE);

  const {
    state: { tradeType, exCurrency, amount, payMethods }
  } = useContext(BrowseAdsContextStore);
  const shouldIncludePayMethods =
    payMethods && payMethods.some((method) => method?.length >= NUMBERS.ONE);
  const { data } = useGetTradeAdsMutation({
    exCurrency,
    type: tradeType === TRADE_TYPE.BUY ? TRADE_TYPE.SELL : TRADE_TYPE.BUY,
    ...(shouldIncludePayMethods && { payMethods }),
    ...(amount && { amount }),
    page: page,
    limit: NUMBERS.NINE
  });

  const {
    state: { user }
  } = useContext(AppContextStore);
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <TradeAdWrapper>
      <TradAdHeaderText>
        {tradeType === TRADE_TYPE.BUY ? 'Buy from these Sellers' : 'Sell to these Buyers'}
      </TradAdHeaderText>
      <TradeAdContainer>
        <TradeAddContainerHeader>
          <TradeAdContainerHeaderText $width={'18%'} $textTransform={false}>
            {tradeType === TRADE_TYPE.BUY ? 'Buy From' : 'Sell To'}
          </TradeAdContainerHeaderText>
          <TradeAdContainerHeaderText $width={'25.8%'} $textTransform={false}>
            Payment Method
          </TradeAdContainerHeaderText>
          <TradeAdContainerHeaderText $width={'10%'} $textTransform={false}>
            Location
          </TradeAdContainerHeaderText>
          <TradeAdContainerHeaderText $width={'23%'} $textTransform={false}>
            Trade Limit
          </TradeAdContainerHeaderText>
          <TradeAdContainerHeaderText $textTransform={false}>
            Available/Rate
          </TradeAdContainerHeaderText>
          <TradeAdContainerHeaderText
            $width="7.5%"
            $textTransform={false}></TradeAdContainerHeaderText>
        </TradeAddContainerHeader>
        <TradeAdListWrapper>
          <Paginator
            currentPage={page}
            handleChangePage={handleChangePage}
            totalItems={data?.totalTradeAds}>
            {data?.data?.length ? (
              data?.data?.map((tradeAd, index) => {
                return (
                  <Fragment key={index}>
                    <TradeAd {...tradeAd} state={user?.state} />
                  </Fragment>
                );
              })
            ) : (
              <h5>No Trade Ad Available, please create one</h5>
            )}
          </Paginator>
        </TradeAdListWrapper>
      </TradeAdContainer>
    </TradeAdWrapper>
  );
};

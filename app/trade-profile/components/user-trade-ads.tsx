import React from 'react';
import { TradeAdInterface } from '../../utils/interfaces/trade-ad.interface';
import { Wrapper } from '../../styles/layout.styles';
import { NUMBERS } from '../../utils/constants';
import { Box } from '@mui/material';
import UserTradeAd from './user-trade-ad';

interface Prop {
  tradeAds: TradeAdInterface[];
}

const UserTradeAds = ({ tradeAds }: Prop) => {
  return (
    <Wrapper $marginT="30px" $mobileWidth="700px">
      {tradeAds?.length !== NUMBERS.ZERO ? (
        tradeAds?.map((trade_ad, index) => <UserTradeAd key={index} tradeAd={trade_ad} />)
      ) : (
        <Box>No Trade Ads available</Box>
      )}
    </Wrapper>
  );
};

export default UserTradeAds;

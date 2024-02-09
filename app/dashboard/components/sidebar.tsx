import React, { ReactElement, useContext, useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import SellIcon from '@mui/icons-material/Sell';

import { Welcome } from './welcome';
import Filter from './filter';

import { BrowseAdsContextStore } from '../../contexts/browse-ads-context';
import { BROWSE_TRADE_ADS_ACTIONS } from '../../utils/actions';
import {
  SideBarHeaderTextWrapper,
  SideBarHeaderText,
  MobileTradeButton,
  SideBarWrapper,
  SideBarHeader,
  SideBarContentsWrapper
} from '../dashboard.styles';
import { TRADE_TYPE } from '../constants';

function SideBar(): ReactElement {
  const {
    state: { tradeType: activeTab },
    dispatch
  } = useContext(BrowseAdsContextStore);

  const toggleActiveTab =
    (tradeType: TRADE_TYPE): (() => void) =>
    (): void => {
      dispatch({ type: BROWSE_TRADE_ADS_ACTIONS.SWITCH_TRADE_TYPE, payload: tradeType });
    };
  const [filter, setFilter] = useState<boolean>(false);

  const toggleFilter = (): void => setFilter(!filter);

  return (
    <SideBarWrapper>
      <SideBarContentsWrapper>
        <Welcome filter={filter} toggleFilter={toggleFilter} />
        <SideBarHeader>
          <MobileTradeButton
            onClick={toggleActiveTab(TRADE_TYPE.BUY)}
            $activeBtn={activeTab === TRADE_TYPE.BUY}>
            Buy FX
          </MobileTradeButton>
          <MobileTradeButton
            onClick={toggleActiveTab(TRADE_TYPE.SELL)}
            $activeBtn={activeTab === TRADE_TYPE.SELL}>
            Sell FX
          </MobileTradeButton>
          <SideBarHeaderTextWrapper
            $active={activeTab === TRADE_TYPE.BUY}
            onClick={toggleActiveTab(TRADE_TYPE.BUY)}>
            <GridViewIcon color={activeTab === TRADE_TYPE.BUY ? 'primary' : 'disabled'} />
            <SideBarHeaderText>Buy Fx</SideBarHeaderText>
          </SideBarHeaderTextWrapper>
          <SideBarHeaderTextWrapper
            $active={activeTab === TRADE_TYPE.SELL}
            onClick={toggleActiveTab(TRADE_TYPE.SELL)}>
            <SellIcon color={activeTab === TRADE_TYPE.SELL ? 'primary' : 'disabled'} />
            <SideBarHeaderText>Sell Fx</SideBarHeaderText>
          </SideBarHeaderTextWrapper>
        </SideBarHeader>
        <Filter filter={filter} />
      </SideBarContentsWrapper>
    </SideBarWrapper>
  );
}

export default SideBar;

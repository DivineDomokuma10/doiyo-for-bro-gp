'use client';

import { ReactElement } from 'react';
import { TradeAds } from './components/trade-ads';
import SideBar from './components/sidebar';
import Dashboard from './browse';

function Main(): ReactElement {
  return (
    <Dashboard noPadding>
      <SideBar />
      <TradeAds />
    </Dashboard>
  );
}
export default Main;

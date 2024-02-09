'use client';
import React, { ReactElement, ReactNode, useState } from 'react';

import { DashboardMainWrapper } from '../dashboard.styles';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import AppContext from '../../contexts/app-context';
import BrowseAdsContext from '../../contexts/browse-ads-context';
import SideNavBar from '../../components/side-nav-bar';

interface Props {
  children: ReactNode;
  isSidebarHidden?: boolean;
  noPadding?: boolean;
}

const Dashboard = ({ children, noPadding }: Props): ReactElement => {
  const [isShowSideNavBar, setIsShowSideNavBar] = useState<boolean>(false);

  const toggleSideNavBar = (): void => setIsShowSideNavBar((prev) => !prev);

  return (
    <AppContext>
      <BrowseAdsContext>
        {isShowSideNavBar && <SideNavBar toggleSideNavBar={toggleSideNavBar} />}
        <Header toggleSideNavBar={toggleSideNavBar} />
        <DashboardMainWrapper $noPadding={noPadding}>{children}</DashboardMainWrapper>
      </BrowseAdsContext>
      <Footer />
    </AppContext>
  );
};

export default Dashboard;

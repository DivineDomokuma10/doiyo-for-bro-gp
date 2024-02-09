'use client';

import React, { ReactElement } from 'react';

import { AccountSettingsSect, AccountSettingsWrapper } from '../account-settings.styles';
import { TabWrapper } from '../../create-trade-ad/components/trade-type/tradeType.styles';
import SecurityComponent from '../components/security';
import { usePathname } from 'next/navigation';
import Tabs from '../components/tabs';
import Dashboard from '../../dashboard/browse';
import { Wrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';

const Security = (): ReactElement => {
  const pathname = usePathname();

  return (
    <Dashboard>
      <AccountSettingsWrapper>
        <AccountSettingsSect>
          <Wrapper $padding="10px 20px">
            <CustomizableText
              $color="#000759"
              $size="32px"
              $fontWeight="700"
              $lineHeight="40px"
              $margin="0px">
              Account Settings
            </CustomizableText>
            <Wrapper $marginT="20px">
              <CustomizableText
                $color="#444"
                $size="16px"
                $fontWeight="400"
                $lineHeight="24px"
                $margin="0px">
                Change your profile and account settings
              </CustomizableText>
            </Wrapper>
          </Wrapper>
          <Wrapper
            $padding="10px 20px"
            $mobileColumn="column"
            $marginT="50px"
            $mobileMarginT="20px"
            $display="flex"
            $justify="space-between"
            $gap="100px"
            $mobileGap="30px">
            <TabWrapper $width="35%" $mobileWidth="100%">
              <Tabs pathname={pathname} />
            </TabWrapper>
            <Wrapper $width="65%" $mobileWidth="100%">
              <SecurityComponent />
            </Wrapper>
          </Wrapper>
        </AccountSettingsSect>
      </AccountSettingsWrapper>
    </Dashboard>
  );
};

export default Security;

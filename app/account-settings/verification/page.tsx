'use client';

import React, { ReactElement } from 'react';
import { TabWrapper } from '../../create-trade-ad/components/trade-type/tradeType.styles';
import { AccountSettingsSect, AccountSettingsWrapper } from '../account-settings.styles';

import VerificationComponent from '../components/verification';
import Tabs from '../components/tabs';
import { usePathname } from 'next/navigation';
import Dashboard from '../../dashboard/browse';
import { Wrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';

const Verification = (): ReactElement => {
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
            $padding="30px 20px"
            $marginT="50px"
            $mobileMarginT="0px"
            $display="flex"
            $justify="space-between"
            $mobileColumn="column"
            $gap="100px"
            $mobileGap="30px">
            <TabWrapper $width="35%" $mobileWidth="100%">
              <Tabs pathname={pathname} />
            </TabWrapper>
            <Wrapper $mobileWidth="100%" $width="65%">
              <VerificationComponent />
            </Wrapper>
          </Wrapper>
        </AccountSettingsSect>
      </AccountSettingsWrapper>
    </Dashboard>
  );
};

export default Verification;

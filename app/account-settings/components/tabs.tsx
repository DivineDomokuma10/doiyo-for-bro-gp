import React, { ReactElement } from 'react';
import { Tab } from '../../create-trade-ad/components/trade-type/tradeType.styles';
import { Wrapper } from '../../styles/layout.styles';
import { ACCOUNT_SETTINGS_TABS } from '../constants';
import Image from 'next/image';
import { CustomizableText } from '../../styles/text.styles';

interface TabsProps {
  pathname: string;
}
const Tabs = ({ pathname }: TabsProps): ReactElement => {
  return (
    <Wrapper $bg="white" $width="100%" $mobileWidth="100%" $overflow="auto">
      <Wrapper
        $mobileWidth="500px"
        $mobileBg="rgb(246, 246, 249)"
        $padding="10px"
        $display="flex"
        $direction="column"
        $mobileColumn="row"
        $width="100%">
        {ACCOUNT_SETTINGS_TABS.map((tab) => (
          <Tab href={`${tab.path}`} $width="65%" $mobileWidth="100%" key={tab.index}>
            <Wrapper
              $cursor="pointer"
              $display="flex"
              $align="center"
              $mobileJustify="center"
              $gap="15px"
              $marginB="10px"
              $mobileMarginB="0px"
              $bg={pathname === `${tab.path}` ? '#19B536' : ''}
              $borderRadius="4px"
              $paddingB="8px"
              $paddingT="8px"
              $paddingL="12px"
              $paddingR="12px"
              $width="100%"
              $mobileWidth="auto"
              $mobileHeight="30px"
              $mobileGap="10px"
              $padding="8px">
              <Image
                alt={tab.tabName}
                src={pathname === `${tab.path}` ? tab.icon : tab.activeIcon}
                width={16}
                height={16}
              />
              <CustomizableText
                $size="14px"
                $fontWeight={pathname === `${tab.path}` ? '700' : '500'}
                $lineHeight="20px"
                $color={pathname === `${tab.path}` ? 'white' : '#666'}
                $margin="0px">
                {tab.tabName}
              </CustomizableText>
            </Wrapper>
          </Tab>
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default Tabs;

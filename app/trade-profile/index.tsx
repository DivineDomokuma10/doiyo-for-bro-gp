'use client';
import moment from 'moment';
import Image from 'next/image';
import React, { ReactElement, useContext } from 'react';

import {
  TradeProfileItemOne,
  TradeProfileItemTwo,
  TradeProfileWrapper,
  VerificationDetailsSect
} from './trade-profile.styles';

import { Wrapper } from '../styles/layout.styles';
import { AppContextStore } from '../contexts/app-context';
import { TabWrapper } from '../create-trade-ad/components/trade-type/tradeType.styles';
import useGetUserTradeAdsMutation from '../hooks/api-hooks/useGetUserTradeAdsMutation';
import { AccountSettingsWrapper, UploadImage } from '../account-settings/account-settings.styles';
import { getUserTradeAdsTypeFrequency } from './helperMethods';
import { CustomizableText } from '../styles/text.styles';
import UserTradeAds from './components/user-trade-ads';

const TradeProfile = (): ReactElement => {
  const {
    state: { user }
  } = useContext(AppContextStore);

  const { data } = useGetUserTradeAdsMutation();

  const { buy, sell } = getUserTradeAdsTypeFrequency(data);

  return (
    <AccountSettingsWrapper>
      <TradeProfileWrapper>
        <TradeProfileItemOne>
          <UploadImage
            src={user?.avatar ? user?.avatar : '/assets/avatar2.svg'}
            $width={'192px'}
            $height={'192px'}
            $mobileHeight={'100px'}
            $mobileWidth={'100px'}
            alt="user Image"
          />
          <VerificationDetailsSect>
            <CustomizableText
              $letterSpacing="0.96px"
              $color="#1A202C"
              $size="12px"
              $fontWeight="600"
              $textTransform="uppercase">
              Verifications
            </CustomizableText>
            <Wrapper $display="flex" $gap="10px" $align="center">
              <Image src={'/assets/phone.svg'} alt="phone" width={16} height={16} />
              <CustomizableText $color="#1A202C" $size="14px" $fontWeight="400">
                Phone Verified
              </CustomizableText>
            </Wrapper>
            <Wrapper $display="flex" $gap="10px" $align="center">
              <Image src={'/assets/email.svg'} alt="phone" width={16} height={16} />
              <CustomizableText $color="#1A202C" $size="14px" $fontWeight="400">
                Email Verified
              </CustomizableText>
            </Wrapper>
            <Wrapper $display="flex" $gap="10px" $align="center">
              <Image src={'/assets/ID.svg'} alt="phone" width={16} height={16} />
              <CustomizableText $color="#1A202C" $size="14px" $fontWeight="400">
                ID Verified
              </CustomizableText>
            </Wrapper>
            <Wrapper $display="flex" $gap="10px" $align="center">
              <Image src={'/assets/address.svg'} alt="phone" width={16} height={16} />
              <CustomizableText $color="#1A202C" $size="14px" $fontWeight="400">
                Address Verified
              </CustomizableText>
            </Wrapper>
          </VerificationDetailsSect>
        </TradeProfileItemOne>
        <TradeProfileItemTwo>
          <Wrapper
            $paddingB="25px"
            $paddingL="25px"
            $paddingR="25px"
            $paddingT="25px"
            $borderRadius="4px"
            $border="1px solid #E5E7EB">
            <Wrapper
              $marginB="20px"
              $mobileMarginB="10px"
              $display="flex"
              $justify="space-between"
              $align="center">
              <CustomizableText
                $mobileWeight="500"
                $mobileSize="20px"
                $margin="0px"
                $color="#000759"
                $size="32px"
                $fontWeight="700"
                $lineHeight="40px">
                @{user?.username}
              </CustomizableText>
              <Wrapper $display="flex" $gap="10px" $align="center">
                <Image src={'/Ellipse.svg'} alt="live image" height={10} width={10} quality={100} />
                <CustomizableText
                  $margin="0px"
                  $color="#1A202C"
                  $size="15px"
                  $fontWeight="400"
                  $mobileSize="0px"
                  $lineHeight="28px">
                  Online now
                </CustomizableText>
              </Wrapper>
            </Wrapper>
            <CustomizableText
              $mobileSize="14px"
              $margin="0px"
              $color="#1A202C"
              $size="16px"
              $fontWeight="400"
              $lineHeight="24px">
              {user?.bio
                ? user?.bio
                : ' TESTED & TRUSTED. Send money using Chipper cash with Nigerian Naira Only. 100% Trusted'}
            </CustomizableText>
            <Wrapper
              $mobileGap="10px"
              $mobileMarginT="20px"
              $mobileColumn="column"
              $mobileAlign="start"
              $marginT="30px"
              $display="flex"
              $justify="space-between"
              $align="center">
              <Wrapper $display="flex" $gap="10px" $align="center">
                <CustomizableText
                  $margin="0px"
                  $color="#1A202C"
                  $size="14px"
                  $fontWeight="400"
                  $lineHeight="20px">
                  Join
                </CustomizableText>
                <CustomizableText
                  $margin="0px"
                  $color="#1A202C"
                  $size="14px"
                  $fontWeight="400"
                  $lineHeight="20px">
                  {moment(user?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </CustomizableText>
              </Wrapper>
              <Wrapper $display="flex" $gap="10px" $align="center">
                <CustomizableText
                  $margin="0px"
                  $color="#1A202C"
                  $size="14px"
                  $fontWeight="400"
                  $lineHeight="20px">
                  Location
                </CustomizableText>
                <Wrapper $display="flex" $gap="10px" $align="center">
                  <Image src={'/nigeria_flag.svg'} width={16} height={16} alt="nigeria_flag" />
                  <CustomizableText
                    $margin="0px"
                    $color="#1A202C"
                    $size="14px"
                    $fontWeight="400"
                    $lineHeight="20px">
                    {user?.state}, {user?.country}
                  </CustomizableText>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper
              $wrap="wrap"
              $mobileGap="15px"
              $display="flex"
              $gap="25px"
              $align="center"
              $marginT="20px">
              <Wrapper
                $borderRadius="100px"
                $border="1px solid #E5E7EB"
                $display="flex"
                $gap="5px"
                $paddingB="8px"
                $paddingL="10px"
                $paddingR="10px"
                $paddingT="8px"
                $align="center">
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="600">
                  ~$25,000
                </CustomizableText>
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="400">
                  Volume
                </CustomizableText>
              </Wrapper>
              <Wrapper
                $borderRadius="100px"
                $border="1px solid #E5E7EB"
                $display="flex"
                $gap="5px"
                $paddingB="8px"
                $paddingL="10px"
                $paddingR="10px"
                $paddingT="8px"
                $align="center">
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="600">
                  268
                </CustomizableText>
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="400">
                  Trades
                </CustomizableText>
              </Wrapper>
              <Wrapper
                $borderRadius="100px"
                $border="1px solid #E5E7EB"
                $display="flex"
                $gap="5px"
                $paddingB="8px"
                $paddingL="10px"
                $paddingR="10px"
                $paddingT="8px"
                $align="center">
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="600">
                  ~$25,000
                </CustomizableText>
                <CustomizableText $margin="0px" $color="#1A202C" $size="14px" $fontWeight="400">
                  Volume
                </CustomizableText>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper
            $paddingB="25px"
            $paddingL="25px"
            $paddingR="25px"
            $paddingT="25px"
            $borderRadius="4px"
            $border="1px solid #E5E7EB"
            $marginT="50px">
            <Wrapper $display="flex" $align="center" $justify="space-between">
              <CustomizableText
                $size="18px"
                $fontWeight="700"
                $color="#000759"
                $lineHeight="36px"
                $letterSpacing="0.45px"
                $margin="0px"
                $mobileSize="15px">
                Trade Ads
              </CustomizableText>
              <Wrapper $display="flex" $align="center" $gap="10px">
                <Wrapper
                  $borderRadius="4px"
                  $border="1px solid #E5E7EB"
                  $paddingB="4px"
                  $paddingL="12px"
                  $paddingR="12px"
                  $paddingT="4px">
                  <CustomizableText
                    $margin="0px"
                    $color="#999"
                    $size="14px"
                    $mobileSize="13px"
                    $fontWeight="500"
                    $lineHeight="24px">
                    Buy FX({buy})
                  </CustomizableText>
                </Wrapper>
                <Wrapper
                  $borderRadius="4px"
                  $border="1px solid #E5E7EB"
                  $paddingB="4px"
                  $paddingL="12px"
                  $paddingR="12px"
                  $paddingT="4px">
                  <CustomizableText
                    $margin="0px"
                    $color="#999"
                    $size="14px"
                    $mobileSize="13px"
                    $fontWeight="500"
                    $lineHeight="24px">
                    Sell FX({sell})
                  </CustomizableText>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <TabWrapper $mobileWidth="100%">
              <Wrapper $overflow="scroll">
                <UserTradeAds tradeAds={data} />
              </Wrapper>
            </TabWrapper>
          </Wrapper>
        </TradeProfileItemTwo>
      </TradeProfileWrapper>
    </AccountSettingsWrapper>
  );
};

export default TradeProfile;

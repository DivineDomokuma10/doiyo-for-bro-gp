'use client';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Button, CircularProgress } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useState } from 'react';
import Image from 'next/image';

import { ButtonWrapper, FormInputsWrapper } from '../../create-account/create-account.styles';
import { filterPayMethods, getCurrencySymbol, getPaymentMethodsName } from '../../helperMethods';
import { TRADE_AD_TYPE } from '../../utils/interfaces/trade-ad.interface';
import useGetTradeAdMutation from '../../hooks/api-hooks/useGetTradeAdMutation';
import Dropdown from '../../components/dropdown/dropdown';
import { startTradeSchema } from './start-trade.schema';
import { getTradeAdHeaderText } from './helperMethods';

import {
  TradeAdIndicatorText,
  TradeAdUserName,
  TradeAdPercentText,
  TradeAdPaymentMethodSect,
  TradeAdItemSectOne,
  TradeAdContainerHeaderText,
  TradeAdItemUserNameSect,
  NumberOfTradeText,
  SideBarAmountWrapper,
  SelectedCurrencyWrapper,
  SelectedCurrencyText,
  SidebarLabelText,
  TradeAdViewInputs,
  TradeAmountNotificationWrapper,
  TransferText,
  TradeAdItemsWrapper,
  TradeAdTextWrapper,
  TradeAdViewHeaderText,
  TradeAdViewItemTwo,
  TradeAdViewWrapper,
  TradeAdViewItemOne
} from '../../dashboard/dashboard.styles';

import { PAYMENT_METHOD } from '../../utils/constants';
import useStartTradeMutation from '../../hooks/api-hooks/useStartTradeMutation';
import AddAccountDetailsModal from '../../components/modals/add-account-details-modal';
import { AppContextStore } from '../../contexts/app-context';
import { UploadImage } from '../../account-settings/account-settings.styles';
import { LinkText } from '../../components/header/header.styles';
import { FlexWrapper } from '../../styles/layout.styles';

interface Props {
  params: { id: string };
}

interface StartTradeData {
  amount: number;
  payMethod: PAYMENT_METHOD;
}

const TradeAdDetails = ({ params }: Props) => {
  const { data: tradeAdData } = useGetTradeAdMutation(params.id);
  const { mutate, isLoading } = useStartTradeMutation();

  const { state } = useContext(AppContextStore);
  const userPaymentMethods = state?.user?.payMethods || [];

  const {
    payMethods = [],
    price,
    creator: { username } = { username: '' },
    type: tradeAdType,
    duration,
    exCurrency,
    bsCurrency,
    minAmount,
    maxAmount,
    availableAmount
  } = tradeAdData || {};

  const {
    register,
    control,
    getValues,
    formState: { isValid }
  } = useForm<StartTradeData>({
    resolver: yupResolver(startTradeSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      amount: 0
    }
  });

  const payableAmount = (useWatch({ control, name: 'amount' }) * price)?.toLocaleString() || '';

  const payMethodNames = getPaymentMethodsName(payMethods);
  const exCurrencySymbol = getCurrencySymbol(exCurrency);
  const headerText = getTradeAdHeaderText(tradeAdType, exCurrency, exCurrencySymbol);
  const filteredPayMethods = filterPayMethods({ userPaymentMethods, payMethods });

  const handleOpenTrade = () => {
    mutate({
      payMethod: getValues('payMethod') as PAYMENT_METHOD,
      amount: +getValues('amount'),
      tradeAdId: tradeAdData._id
    });
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = (): void => setIsModalOpen((prev) => !prev);

  return (
    <TradeAdViewWrapper>
      {isModalOpen && (
        <AddAccountDetailsModal
          exCurrency={exCurrency}
          open={isModalOpen}
          onClose={handleModal}
          payMethods={payMethods}
        />
      )}
      <TradeAdViewHeaderText>
        {headerText} <span>@{username}</span>
      </TradeAdViewHeaderText>
      <TradeAdIndicatorText>
        {tradeAdType === TRADE_AD_TYPE.BUY ? 'You are the Seller' : 'You are the buyer'}
      </TradeAdIndicatorText>
      <TransferText>
        {tradeAdType === TRADE_AD_TYPE.BUY
          ? 'Make Payment using User Provided Methods only'
          : 'Send money using Bank Transfer with Nigeria Naira'}
      </TransferText>
      <TradeAdItemsWrapper>
        <TradeAdViewItemOne>
          <TradeAdViewHeaderText $fontSize="20px">About the offer</TradeAdViewHeaderText>
          <TradeAdTextWrapper>
            <TransferText>
              {tradeAdType === TRADE_AD_TYPE.SELL ? 'Seller’s Rate' : 'Buyer’s Rate'}
            </TransferText>
            <TradeAdUserName>
              {bsCurrency}
              {price}/{exCurrencySymbol}
            </TradeAdUserName>
            <TradeAdPercentText>34% above market</TradeAdPercentText>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <TransferText>Payment Method(s)</TransferText>
            <TradeAdPaymentMethodSect>
              {payMethodNames.map((methodText, index) => {
                return (
                  <TradeAdContainerHeaderText $width="33.3%" $textTransform={true} key={index}>
                    {methodText}
                  </TradeAdContainerHeaderText>
                );
              })}
            </TradeAdPaymentMethodSect>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <TransferText>Location</TransferText>
            <TradeAdItemSectOne $width="60%">
              <Image
                src={'/assets/nigeria-flag.svg'}
                alt={username}
                width={20}
                height={20}
                quality={100}
              />
              <TradeAdContainerHeaderText $textTransform={true} $width={'100%'}>
                Bayelsa, Nigeria
              </TradeAdContainerHeaderText>
            </TradeAdItemSectOne>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <TransferText>Payment Window</TransferText>
            <TradeAdItemSectOne $width="60%">
              <Image
                src={'/assets/timer.svg'}
                alt={username}
                width={20}
                height={20}
                quality={100}
              />
              <TradeAdContainerHeaderText $textTransform={true} $width={'100%'}>
                {duration} mins
              </TradeAdContainerHeaderText>
            </TradeAdItemSectOne>
          </TradeAdTextWrapper>
          <TradeAdViewHeaderText $fontSize="20px">About the Seller</TradeAdViewHeaderText>
          <TradeAdTextWrapper>
            <TradeAdItemSectOne $width="50%">
              <UploadImage
                src={state?.user?.avatar ? state?.user?.avatar : '/assets/avatar2.svg'}
                alt={username}
                $width={'40px'}
                $height={'40px'}
              />
              <TradeAdItemUserNameSect>
                <TradeAdUserName>@{username}</TradeAdUserName>
                <NumberOfTradeText>Seen 4 mins ago</NumberOfTradeText>
              </TradeAdItemUserNameSect>
            </TradeAdItemSectOne>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper $width="100%" $direction="column">
            {state?.user?.trades && <TransferText>~1,600 trades</TransferText>}
            {state?.user?.trade_volumes && <TransferText>~$25,000 volume</TransferText>}

            <TradeAdItemSectOne $width="60%">
              <Image
                src={'/assets/nigeria-flag.svg'}
                alt="Flag"
                width={20}
                height={20}
                quality={100}
              />
              <TradeAdContainerHeaderText $textTransform={true} $width={'100%'}>
                Bayelsa, Nigeria
              </TradeAdContainerHeaderText>
            </TradeAdItemSectOne>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <TradeAdItemSectOne $width="60%">
              <Image src={'/assets/phone.svg'} alt="Phone" width={20} height={20} quality={100} />
              <TradeAdContainerHeaderText $weight={600} $textTransform={true} $width={'100%'}>
                Phone Verified
              </TradeAdContainerHeaderText>
            </TradeAdItemSectOne>
            {state?.user?.id?.status && (
              <TradeAdItemSectOne $width="60%">
                <Image
                  src={'/assets/ID.svg'}
                  alt="User name"
                  width={20}
                  height={20}
                  quality={100}
                />
                <TradeAdContainerHeaderText $weight={600} $textTransform={true} $width={'100%'}>
                  ID Verified
                </TradeAdContainerHeaderText>
              </TradeAdItemSectOne>
            )}
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <TradeAdItemSectOne $width="60%">
              <Image src={'/assets/email.svg'} alt="email" width={20} height={20} quality={100} />
              <TradeAdContainerHeaderText $weight={600} $textTransform={true} $width={'100%'}>
                Email Verified
              </TradeAdContainerHeaderText>
            </TradeAdItemSectOne>
            {state?.user?.address?.status && (
              <TradeAdItemSectOne $width="60%">
                <Image
                  src={'/assets/address.svg'}
                  alt="address"
                  width={20}
                  height={20}
                  quality={100}
                />
                <TradeAdContainerHeaderText $weight={600} $textTransform={true} $width={'100%'}>
                  Address Verified
                </TradeAdContainerHeaderText>
              </TradeAdItemSectOne>
            )}
          </TradeAdTextWrapper>
          <TradeAdTextWrapper>
            <LinkText
              $display="flex"
              $align="center"
              href={'/account-settings/profile'}
              $gap="10px"
              $width="50%">
              <TransferText $color="#138829">View Profile</TransferText>
              <Image src={'/assets/user.svg'} alt="user" width={20} height={20} quality={100} />
            </LinkText>
          </TradeAdTextWrapper>
          <TradeAdViewHeaderText $fontSize="20px">Terms of Doiyo Trade Ad</TradeAdViewHeaderText>
          <TradeAdTextWrapper $width="100%">
            <TransferText>Attention! Attention!! Attention!!!</TransferText>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper $width="95%">
            <TransferText>
              Please have in mind that, it is your responsibility not to loss funds using our
              service, Ensure to confirm successful receipt of funds by logging into your
              bank/payment method apps to verify actual receipt of funds, do not confirm receipt in
              the basis of email or sms notification.
            </TransferText>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper $width="100%">
            <TransferText>NB: i reserve the rights to trade or not to trade...</TransferText>
          </TradeAdTextWrapper>
        </TradeAdViewItemOne>
        <TradeAdViewItemTwo>
          <TradeAdViewHeaderText $margin="0px" $fontSize="20px" $borderBottom="1px">
            Start Trade
          </TradeAdViewHeaderText>
          <TradeAdViewHeaderText $fontSize="18px" $margin="0" $color="black">
            {tradeAdType === TRADE_AD_TYPE.SELL
              ? 'How much do you want to buy'
              : 'How much do you want to sell'}
          </TradeAdViewHeaderText>
          <TradeAdTextWrapper $width="60%" $justify="space-between">
            <TradeAdUserName>Available Amount</TradeAdUserName>
            <TransferText $align="end">
              {exCurrencySymbol}
              {availableAmount}
            </TransferText>
          </TradeAdTextWrapper>
          <TradeAdTextWrapper $width="60%" $justify="space-between">
            <TradeAdUserName>Trade Limit</TradeAdUserName>
            <TransferText $align="end">
              {exCurrencySymbol}
              {minAmount} - {exCurrencySymbol}
              {maxAmount}
            </TransferText>
          </TradeAdTextWrapper>
          <SidebarLabelText>
            {tradeAdType === TRADE_AD_TYPE.SELL ? 'I want to buy' : 'I want to Sell'}
          </SidebarLabelText>
          <SideBarAmountWrapper $flexDirection="row-reverse" $width="100%">
            <SelectedCurrencyWrapper $border="0px 4px 4px 0px">
              <SelectedCurrencyText>{exCurrency}</SelectedCurrencyText>
            </SelectedCurrencyWrapper>
            <TradeAdViewInputs
              type="number"
              {...register('amount')}
              placeholder="$ 0.00"
              // pattern="[0-9]*"
            />
          </SideBarAmountWrapper>
          <SidebarLabelText>
            {tradeAdType === TRADE_AD_TYPE.BUY ? 'I will get' : 'I Will pay'}
          </SidebarLabelText>
          <SideBarAmountWrapper $flexDirection="row-reverse" $width="100%">
            <SelectedCurrencyWrapper $border="0px 4px 4px 0px">
              <SelectedCurrencyText>NGN</SelectedCurrencyText>
            </SelectedCurrencyWrapper>
            <TradeAdViewInputs type="text" disabled value={payableAmount} placeholder="₦ 0.00" />
          </SideBarAmountWrapper>
          <TradeAdTextWrapper
            $marginTop="20px"
            $direction="column"
            $justify="space-between"
            $width="100%">
            <FlexWrapper $desktop={{ $justify: 'space-between', $width: '100%' }}>
              <TransferText>Account to receive payment ({exCurrencySymbol})</TransferText>
              <TradeAdItemSectOne $cursor="pointer" $width="40%">
                <AddIcon />
                <TradeAdContainerHeaderText
                  $fontSize="15px"
                  $weight={500}
                  $textTransform={true}
                  onClick={handleModal}
                  $width={'100%'}>
                  Add Account
                </TradeAdContainerHeaderText>
              </TradeAdItemSectOne>
            </FlexWrapper>
          </TradeAdTextWrapper>
          <FormInputsWrapper $margin="0px 0px 10px 0px" $width="100%">
            <Controller
              name="payMethod"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  width="100%"
                  items={filteredPayMethods}
                  placeHolder="Select Payment account"
                />
              )}
            />
          </FormInputsWrapper>
          <TradeAdContainerHeaderText $width="100%" $fontSize="13px" $color="#F10909">
            **Only {payMethodNames.join(',')} is accepted by this seller
          </TradeAdContainerHeaderText>
          <TradeAmountNotificationWrapper>
            <Image alt="info" width={20} height={20} src={'/assets/info.svg'} />
            <TransferText>
              You are currently only allowed to trade between $200 to $1m. This would increase after
              a steady successful trade count
            </TransferText>
          </TradeAmountNotificationWrapper>
          <ButtonWrapper $marginTop="20px">
            <Button
              disabled={!isValid}
              type="submit"
              onClick={handleOpenTrade}
              sx={{ height: 50, fontSize: 16 }}
              fullWidth
              title="Open Trade"
              variant="contained">
              {isLoading ? <CircularProgress sx={{ color: '#fff' }} size={24} /> : 'Open Trade'}
            </Button>
          </ButtonWrapper>
        </TradeAdViewItemTwo>
      </TradeAdItemsWrapper>
    </TradeAdViewWrapper>
  );
};

export default TradeAdDetails;

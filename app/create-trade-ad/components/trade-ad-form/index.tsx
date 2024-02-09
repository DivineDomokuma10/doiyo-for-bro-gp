import React, { ReactElement, ReactNode, useContext, useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

import { NUMBERS } from '../../../utils/constants';
import StepOne from '../create-ad-steps/stepOne';
import StepTwo from '../create-ad-steps/stepTwo';
import StepThree from '../create-ad-steps/stepThree';
import { BoxWrapper } from '../trade-type/tradeType.styles';
import { ButtonWrapper } from '../../../create-account/create-account.styles';
import { FieldValues, FormProvider } from 'react-hook-form';
import TabsComponent from '../tabs/tabs';
import { useCreateTradeAdFormState } from '../../../hooks/useCreateTradeAdFormState';
import { Wrapper } from '../../../styles/layout.styles';
import SummaryWrapper from '../summary';
import { checkSteps } from '../../../dashboard/helperMethods';
import useCreateTradeAdMutation from '../../../hooks/useCreateTradeAdMutation';
import { TRADE_AD_TYPE } from '../../../utils/interfaces/trade-ad.interface';
import CreateAdModal from '../create-ad-modal';
import { getUserSelectedWithdrawalDetails } from '../../../helperMethods';
import { AppContextStore } from '../../../contexts/app-context';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <BoxWrapper>
          <Typography>{children}</Typography>
        </BoxWrapper>
      )}
    </div>
  );
}

const TradeAdForm = (): ReactElement => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(NUMBERS.ZERO);
  const { mutate, isLoading, isSuccess } = useCreateTradeAdMutation();

  const { state } = useContext(AppContextStore);

  const userWithdrawalMethods = state?.user?.withdrawalMethods || [];

  const { formMethods, handleSubmit, isValid } = useCreateTradeAdFormState(activeStep);

  const { type } = formMethods.getValues();
  const offerType = type === TRADE_AD_TYPE.BUY ? 'Buy' : 'Sell';

  const buttonText = checkSteps(activeStep);

  const closeSuccessModal = () => {
    router.push('/trade-profile');
  };
  const navigateTabs = (value: number): void => {
    setActiveStep(value);
  };

  const handleCreateAd = (data: FieldValues): void => {
    switch (activeStep) {
      case NUMBERS.ZERO:
        setActiveStep(NUMBERS.ONE);
        break;
      case NUMBERS.ONE:
        setActiveStep(NUMBERS.TWO);
        break;
      case NUMBERS.TWO:
        const { totalAmount, minAmount, maxAmount, type, withdrawalMethod } = data;
        if (type === TRADE_AD_TYPE.SELL) {
          const withdrawalDetails = getUserSelectedWithdrawalDetails(
            withdrawalMethod[0],
            userWithdrawalMethods
          );
          mutate({
            ...data,
            totalAmount: +totalAmount,
            minAmount: +minAmount,
            maxAmount: +maxAmount,
            withdrawalMethod: withdrawalDetails
          });
          return;
        }
        mutate({
          ...data,
          totalAmount: +totalAmount,
          minAmount: +minAmount,
          maxAmount: +maxAmount
        });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
      {isSuccess && (
        <CreateAdModal
          paragraph={`Your ${offerType} Trade Ad has been successfully created`}
          headerText={`${offerType} Offer Created"`}
          createAdModal={isSuccess}
          toggleCreateAdModal={closeSuccessModal}
        />
      )}
      <FormProvider {...formMethods}>
        <Wrapper
          $mobileColumn="column"
          $gap="50px"
          $width="100%"
          $display="flex"
          $justify="space-between">
          <Wrapper $mobileWidth="100%" $width="60%">
            <TabsComponent activeStep={activeStep} navigateTabs={navigateTabs} />
            {activeStep === NUMBERS.ZERO && (
              <CustomTabPanel value={activeStep} index={0}>
                <StepOne />
              </CustomTabPanel>
            )}
            {activeStep === NUMBERS.ONE && (
              <CustomTabPanel value={activeStep} index={1}>
                <StepTwo />
              </CustomTabPanel>
            )}
            {activeStep === NUMBERS.TWO && (
              <CustomTabPanel value={activeStep} index={2}>
                <StepThree />
              </CustomTabPanel>
            )}
          </Wrapper>
          <SummaryWrapper />
        </Wrapper>
        <ButtonWrapper $width="348px" $margin="20px 20px">
          <Button
            disabled={!isValid}
            onClick={handleSubmit(handleCreateAd)}
            variant="contained"
            sx={{ height: 50, width: '100%', fontWeight: 700, textTransform: 'capitalize' }}>
            {isLoading ? <CircularProgress size={24} /> : buttonText}
          </Button>
        </ButtonWrapper>
      </FormProvider>
    </Box>
  );
};

export default TradeAdForm;

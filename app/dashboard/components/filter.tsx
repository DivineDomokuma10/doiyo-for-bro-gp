import React, { ChangeEvent, ReactElement, useContext } from 'react';

import Dropdown from '../../components/dropdown/dropdown';

import {
  CustomButton,
  SelectedCurrencyText,
  SelectedCurrencyWrapper,
  SideBarAmountWrapper,
  SideBarBody,
  SidebarAmountInput,
  SidebarLabelText
} from '../dashboard.styles';
import { FormInputsWrapper } from '../../create-account/create-account.styles';

import MultipleSelect from '../../components/select-multiple/select-multiple';
import { SUPPORTED_COUNTRIES } from '../../create-account/constants';

import { CURRENCIES, PAYMENT_METHODS } from '../../utils/constants';
import { BROWSE_TRADE_ADS_ACTIONS } from '../../utils/actions';
import { BrowseAdsContextStore } from '../../contexts/browse-ads-context';
import { Wrapper } from '../../styles/layout.styles';
import { getCurrencySymbol } from '../../helperMethods';
import { CustomizableText } from '../../styles/text.styles';

interface FilterProps {
  filter: boolean;
}

function Filter({ filter }: FilterProps): ReactElement {
  const {
    state: { exCurrency },
    dispatch
  } = useContext(BrowseAdsContextStore);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: BROWSE_TRADE_ADS_ACTIONS.CHANGE_AMOUNT, payload: e.target.value });
  };

  const exCurrencySymbol = getCurrencySymbol(exCurrency);

  const handleCurrencyChange = (selectedCurrency: string) => {
    dispatch({ type: BROWSE_TRADE_ADS_ACTIONS.CHANGE_CURRENCY, payload: selectedCurrency });
  };

  const handleSelectPaymentMethod = (value: string[]) => {
    dispatch({
      type: BROWSE_TRADE_ADS_ACTIONS.SELECT_PAY_METHODS,
      payload: value
    });
  };

  return (
    <SideBarBody $filter={filter}>
      <FormInputsWrapper $width="100%">
        <Dropdown
          name="currency"
          value={exCurrency}
          onChange={handleCurrencyChange}
          width="100%"
          items={CURRENCIES}
          label="Select Currency"
        />
      </FormInputsWrapper>
      <SidebarLabelText>Amount</SidebarLabelText>
      <SideBarAmountWrapper $width="100%">
        <SelectedCurrencyWrapper>
          <Wrapper
            $display="flex"
            $align="center"
            $justify="center"
            $bg="#19B536"
            $height="25px"
            $width="25px"
            $borderRadius="50%">
            <CustomizableText $fontWeight="400" $margin="0px" $size="12px" $color="white">
              {exCurrencySymbol}
            </CustomizableText>
          </Wrapper>
          <SelectedCurrencyText>{exCurrency}</SelectedCurrencyText>
        </SelectedCurrencyWrapper>
        <SidebarAmountInput
          onChange={handleAmountChange}
          style={{ width: '95%', margin: 'auto', borderColor: 'red' }}
        />
      </SideBarAmountWrapper>
      <FormInputsWrapper $width="100%">
        <MultipleSelect
          handleChange={handleSelectPaymentMethod}
          options={PAYMENT_METHODS}
          width="100%"
          placeholder="All Payment Methods"
          label="Payment Method(s)"
        />
      </FormInputsWrapper>
      <FormInputsWrapper $width="100%">
        <Dropdown
          isDisabled
          width="100%"
          items={SUPPORTED_COUNTRIES}
          label="Location"
          value="NGN"
          name={''}
          onChange={handleCurrencyChange}
        />
      </FormInputsWrapper>
      <CustomButton variant="contained" $width={'93%'}>
        Find Trades
      </CustomButton>
    </SideBarBody>
  );
}

export default Filter;

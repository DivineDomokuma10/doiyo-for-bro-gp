import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FlexWrapper } from '../../styles/layout.styles';
import { TextInput } from '../formInputs/formInputs';
import { PAYMENT_METHOD, SUPPORTED_CURRENCIES } from '../../utils/constants';

interface Props {
  paymentMethod: PAYMENT_METHOD;
  exCurrency: SUPPORTED_CURRENCIES;
}

const AddPaymentMethod = ({ paymentMethod, exCurrency }: Props): ReactElement => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <FlexWrapper $desktop={{ $direction: 'column', $spaceY: '2px' }}>
      {[
        PAYMENT_METHOD.ACCESS_BANK,
        PAYMENT_METHOD.ZENITH_BANK,
        PAYMENT_METHOD.GTB,
        PAYMENT_METHOD.PERFECT_MONEY
      ].includes(paymentMethod) && (
        <>
          <TextInput
            name="accountNumber"
            errors={errors}
            register={register}
            label={`Account number (${exCurrency})*`}
            placeholder="Enter your bank’s account number"
          />
          <TextInput
            name="accountName"
            errors={errors}
            register={register}
            label="Account name"
            placeholder="Enter your bank’s account name"
          />
        </>
      )}

      {[
        PAYMENT_METHOD.SKRILL,
        PAYMENT_METHOD.BINANCE_PAY,
        PAYMENT_METHOD.ZELLE,
        PAYMENT_METHOD.WISE
      ].includes(paymentMethod) && (
        <TextInput
          name="email"
          errors={errors}
          register={register}
          label="Email Address"
          placeholder="Enter your wallet email address"
        />
      )}
    </FlexWrapper>
  );
};

export default AddPaymentMethod;

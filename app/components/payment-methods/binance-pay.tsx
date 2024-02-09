import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FlexWrapper } from '../../styles/layout.styles';
import { TextInput } from '../formInputs/formInputs';

const BinancePay = (): ReactElement => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <FlexWrapper $desktop={{ $direction: 'column', $spaceY: '2px' }}>
      <TextInput
        name="binanceId"
        errors={errors}
        register={register}
        label="Binance ID"
        placeholder="Enter your binance ID"
      />

      <TextInput
        name="binanceEmail"
        errors={errors}
        register={register}
        label="or Email/Phone(optional)"
        placeholder="Enter your email or phone"
      />
    </FlexWrapper>
  );
};

export default BinancePay;

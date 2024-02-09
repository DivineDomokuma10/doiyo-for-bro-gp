import React, { Fragment, ReactElement } from 'react';

import { NIGERIA_STATES, SUPPORTED_COUNTRIES } from '../constants';
import Dropdown from '../../components/dropdown/dropdown';
import { FormHeaderTextContainer, FormInputsWrapper } from '../create-account.styles';
import { Controller, useFormContext } from 'react-hook-form';
import { TitleText } from '../../styles/text.styles';

export const StepOne = (): ReactElement => {
  const { control } = useFormContext();
  return (
    <Fragment>
      <FormHeaderTextContainer $widthValue="60%">
        <TitleText $margin="">Where do you live?</TitleText>
      </FormHeaderTextContainer>
      <FormInputsWrapper $width="60%">
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              items={SUPPORTED_COUNTRIES}
              width="100%"
              label="Country"
              value="NGN"
              isDisabled
            />
          )}
        />
      </FormInputsWrapper>
      <FormInputsWrapper $width="60%">
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown {...field} items={NIGERIA_STATES} width="100%" label="State" />
          )}
        />
      </FormInputsWrapper>
    </Fragment>
  );
};

'use client';
import React, { ReactElement, useContext, useState } from 'react';

import { CREATE_TRADE_AD_TYPE, EX_CURRENCIES } from '../../../utils/constants';
import MultipleSelect from '../../../components/select-multiple/select-multiple';
import { CustomizableText } from '../../../styles/text.styles';
import { Controller, useFormContext } from 'react-hook-form';
import { FlexWrapper } from '../../../styles/layout.styles';
import CurrencyCard from '../trade-type/currency-card';
import TodoCard from '../trade-type/todo-card';
import { carnero } from '../../../utils/fonts';
import AddAccountDetailsModal from '../../../components/modals/add-account-details-modal';
import { AppContextStore } from '../../../contexts/app-context';
import { filterPayMethods } from '../../../helperMethods';

const StepOne = (): ReactElement => {
  const { getValues, control, watch } = useFormContext();
  const { exCurrency, type } = getValues();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { state } = useContext(AppContextStore);
  const userPaymentMethods = state?.user?.payMethods || [];

  const filteredPayMethods = filterPayMethods({ userPaymentMethods, path: 'label' });

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  watch(['exCurrency', 'type']);

  return (
    <FlexWrapper className={carnero.className} $desktop={{ $direction: 'column', $spaceY: '25px' }}>
      {isModalOpen && (
        <AddAccountDetailsModal exCurrency={exCurrency} open={isModalOpen} onClose={toggleModal} />
      )}
      <CustomizableText $margin="0" $color="#000759" $size="24px" $fontWeight="600">
        What would you like to do?
      </CustomizableText>
      <FlexWrapper
        $desktop={{ $direction: 'row', $spaceX: '25px' }}
        $mobile={{ $direction: 'column', $spaceY: '25px', $width: '100%' }}>
        {CREATE_TRADE_AD_TYPE.map((todo) => (
          <Controller
            key={todo.id}
            name="type"
            control={control}
            render={({ field }) => (
              <TodoCard
                onChange={field.onChange}
                key={todo.mainText}
                active={type === todo.id}
                mainText={todo.mainText}
                subText={todo.subText}
                id={todo.id}
              />
            )}
          />
        ))}
      </FlexWrapper>
      <CustomizableText $margin="0" $color="#000759" $size="24px" $fontWeight="600">
        Choose the currency you want to trade
      </CustomizableText>
      <FlexWrapper
        $desktop={{ $direction: 'row', $spaceX: '10px' }}
        $mobile={{ $direction: 'column', $spaceX: '0px', $spaceY: '20px' }}>
        {EX_CURRENCIES.map((currency) => (
          <Controller
            key={currency.id}
            name="exCurrency"
            control={control}
            render={({ field }) => (
              <CurrencyCard
                onChange={field.onChange}
                key={currency.id}
                img={currency.img}
                active={exCurrency === currency.id}
                currency={currency.currency}
                id={currency.id}
              />
            )}
          />
        ))}
      </FlexWrapper>

      <CustomizableText $margin="0" $color="#000759" $size="24px" $fontWeight="600">
        What payment method can you accept?
      </CustomizableText>
      <CustomizableText $margin="0" $color="#98A2B3" $size="13px" $fontWeight="400">
        You can provide a maximum of 3 account
      </CustomizableText>
      <Controller
        name="payMethods"
        control={control}
        render={({ field }) => (
          <MultipleSelect
            openModal={toggleModal}
            isShowAddBtn
            placeholder="Select Payment Method"
            options={filteredPayMethods}
            handleChange={field.onChange}
            width="100%"
          />
        )}
      />
    </FlexWrapper>
  );
};

export default StepOne;

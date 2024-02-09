import React, { ReactElement, useContext, useState } from 'react';
import { CreateAdStepTwoWrapper } from '../trade-type/tradeType.styles';
import { FormInputsWrapper } from '../../../create-account/create-account.styles';
import { carnero } from '../../../utils/fonts';
import Dropdown from '../../../components/dropdown/dropdown';
import { TIMER } from '../../../utils/constants';
import { Wrapper } from '../../../styles/layout.styles';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomizableText } from '../../../styles/text.styles';
import MultipleSelect from '../../../components/select-multiple/select-multiple';
import { getUserWithdrawalMethodsForMultiSelect } from '../../../helperMethods';
import { AppContextStore } from '../../../contexts/app-context';
import { TRADE_AD_TYPE } from '../../../utils/interfaces/trade-ad.interface';
import AddAccountDetailsModal from '../../../components/modals/add-account-details-modal';

const StepThree = (): ReactElement => {
  const { control, watch, getValues } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { state } = useContext(AppContextStore);

  const userWithdrawalMethods = state?.user?.withdrawalMethods || [];

  const withdrawalMethods = getUserWithdrawalMethodsForMultiSelect(userWithdrawalMethods);

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const tradeAdType = getValues('type');

  watch('duration');

  return (
    <CreateAdStepTwoWrapper className={carnero.className}>
      {isModalOpen && (
        <AddAccountDetailsModal isWithdrawal open={isModalOpen} onClose={toggleModal} />
      )}
      <CustomizableText $size="24px" $lineHeight="32px" $color="#000759" $fontWeight="600">
        Offer Time Limit
      </CustomizableText>
      <CustomizableText $size="14px" $lineHeight="20px" $color="#666" $fontWeight="400">
        This is how much time your trade partner has to make the payment and click Paid before the
        trade is automatically cancelled
      </CustomizableText>
      <Wrapper $marginT="30px" $marginB="80px">
        <CustomizableText $color="#2A2A2A" $size="14px" $lineHeight="20px" $fontWeight="500">
          Select TimeFrame
        </CustomizableText>
        <FormInputsWrapper $margin="0" $width="53%">
          <Controller
            name="duration"
            control={control}
            render={({ field }) => <Dropdown {...field} width="100%" items={TIMER} />}
          />
        </FormInputsWrapper>
      </Wrapper>
      {tradeAdType === TRADE_AD_TYPE.SELL && (
        <Wrapper $marginT="30px" $marginB="80px">
          <CustomizableText $size="24px" $lineHeight="32px" $color="#000759" $fontWeight="600">
            Withdrawal Method
          </CustomizableText>
          <CustomizableText $size="14px" $lineHeight="20px" $color="#666" $fontWeight="400">
            Provide the Naira account you want to receive the value of your trade into
          </CustomizableText>
          <Controller
            name="withdrawalMethod"
            control={control}
            render={({ field }) => (
              <MultipleSelect
                openModal={toggleModal}
                isShowAddBtn
                btnText="Add new withdrawal Method"
                placeholder="Select Payment Method"
                options={withdrawalMethods}
                handleChange={field.onChange}
                width="100%"
              />
            )}
          />
        </Wrapper>
      )}
    </CreateAdStepTwoWrapper>
  );
};

export default StepThree;

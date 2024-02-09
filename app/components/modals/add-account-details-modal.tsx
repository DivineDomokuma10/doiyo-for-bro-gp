import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import React, { ReactElement, useState } from 'react';

import Modal from '.';
import { carnero, plusJakartaSans } from '../../utils/fonts';
import { CustomButton, FlexWrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';

import useAddPaymentMethodToUserMutation from '../../hooks/api-hooks/useAddPaymentMethodToUserMutation';
import { useFinancialInstitutionFormState } from '../../hooks/usePaymentMethodFormState';
import {
  BankAccountInterface,
  PaymentMethodFormInterface,
  PaymentMethodInterface
} from '../../utils/interfaces/user.interface';
import { PAYMENT_METHOD, PAYMENT_METHODS, SUPPORTED_CURRENCIES } from '../../utils/constants';
import AddPaymentMethod from '../payment-methods/add-payment-method';
import Dropdown from '../dropdown/dropdown';
import { ModalButtonWrapper } from './modals.styles';
import { CircularProgress } from '@mui/material';
import { getPaymentMethodsName, getSupportedPayMethods } from '../../helperMethods';
import AddWithdrawalMethod from '../payment-methods/add-withdrawal-method';
import useAddWithdrawalMethodToUserMutation from '../../hooks/api-hooks/useAddWithdrawalMethodToUserMutation';

interface Props {
  open: boolean;
  onClose: () => void;
  payMethods?: PAYMENT_METHOD[];
  isWithdrawal?: boolean;
  exCurrency?: SUPPORTED_CURRENCIES;
}

const AddAccountDetailsModal = ({
  open,
  onClose,
  payMethods,
  exCurrency,
  isWithdrawal
}: Props): ReactElement => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PAYMENT_METHOD | string>('');
  const { mutate, isLoading, isSuccess } = useAddPaymentMethodToUserMutation();
  const { mutate: addWithdrawalMethodMutation, isSuccess: isWithdrawalMethodAdded } =
    useAddWithdrawalMethodToUserMutation();

  const handleSelectPaymentMethod = (selectedValue: string): void =>
    setSelectedPaymentMethod(selectedValue as PAYMENT_METHOD);

  const { formMethods, handleSubmit, isValid } =
    useFinancialInstitutionFormState(selectedPaymentMethod);

  const filteredPayMethods = payMethods ? getSupportedPayMethods(payMethods) : [];
  const payMethodNames = payMethods ? getPaymentMethodsName(payMethods) : [];

  const items = filteredPayMethods.length ? filteredPayMethods : PAYMENT_METHODS;

  const onSubmit = (accountDetails: PaymentMethodFormInterface): void => {
    if (isWithdrawal) {
      addWithdrawalMethodMutation(accountDetails as BankAccountInterface);
      return;
    }
    const payload = {
      ...accountDetails,
      paymentMethod: selectedPaymentMethod
    };
    mutate(payload as PaymentMethodInterface);
  };

  if (isSuccess || isWithdrawalMethodAdded) {
    onClose();
  }

  return (
    <Modal width="368px" open={open} onClose={onClose} direction="column">
      <FlexWrapper
        $desktop={{
          $width: '100%',
          $direction: 'row',
          $items: 'center',
          $justify: 'space-between'
        }}>
        <CustomizableText
          $color="#000"
          $size="20px"
          $fontWeight="700"
          className={carnero.className}>
          Add Account Details
        </CustomizableText>

        <Image src="/cancelIcon.svg" alt="cancel icon" width={16} height={16} onClick={onClose} />
      </FlexWrapper>

      <FlexWrapper $desktop={{ $width: '100%', $spaceY: '20px', $direction: 'column' }}>
        <CustomizableText
          $size="14px"
          $fontWeight="500"
          $alignText="center"
          $color="#F10909"
          className={plusJakartaSans.className}>
          {payMethodNames.length
            ? `**Only ${payMethodNames.join(',')} is accepted by this seller. Please
          make sure you are adding a corresponding  payment method`
            : isWithdrawal
              ? 'Please Add withdrawal method with which you can use to receive your local currency'
              : `Please Add Payment method with which you can send or receive payments`}
        </CustomizableText>

        {!isWithdrawal && (
          <Dropdown
            width="100%"
            name="financial institution"
            label="Financial institution"
            onChange={handleSelectPaymentMethod}
            value={selectedPaymentMethod}
            items={items}
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...formMethods}>
            {isWithdrawal ? (
              <AddWithdrawalMethod />
            ) : (
              <AddPaymentMethod
                exCurrency={exCurrency || SUPPORTED_CURRENCIES.USD}
                paymentMethod={selectedPaymentMethod as PAYMENT_METHOD}
              />
            )}
          </FormProvider>
          <ModalButtonWrapper $width="100%">
            <CustomButton
              fullWidth
              variant="contained"
              $height="44px"
              type="submit"
              disabled={!isValid}>
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <CustomizableText $size="16px" $fontWeight="600" className={carnero.className}>
                  Add Account
                </CustomizableText>
              )}
            </CustomButton>
          </ModalButtonWrapper>
        </form>
      </FlexWrapper>
    </Modal>
  );
};

export default AddAccountDetailsModal;

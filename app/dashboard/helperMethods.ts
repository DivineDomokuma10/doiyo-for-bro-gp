import { NUMBERS, PAYMENT_METHOD } from '../utils/constants';
import { SelectItemInterface } from '../utils/interfaces/generic.interface';

export function getSelectedPaymentMethod(selectedItems: SelectItemInterface[]): PAYMENT_METHOD[] {
  const paymentMethods = selectedItems.map((item) => item.value) as PAYMENT_METHOD[];

  return paymentMethods;
}

export const checkSteps = (value: number): string => {
  return value === NUMBERS.ZERO
    ? 'Continue To Pricing Details'
    : value === NUMBERS.ONE
      ? 'Continue To Trade Ad Details'
      : 'Create Trade Ad';
};

export const checkDisable = (
  totalAmount: string,
  minAmount: string,
  maxAmount: string,
  price: string,
  exCurrency: string,
  activeType: string,
  selectedValues: string[],
  timer: string,
  completedStep: number
) => {
  if (
    activeType !== '' &&
    exCurrency !== '' &&
    selectedValues.length > NUMBERS.ZERO &&
    completedStep === NUMBERS.ZERO
  ) {
    return false;
  } else if (
    totalAmount !== '' &&
    minAmount !== '' &&
    maxAmount !== '' &&
    price !== '' &&
    completedStep === NUMBERS.ONE
  ) {
    return false;
  } else if (timer !== '') {
    return false;
  } else {
    return true;
  }
};

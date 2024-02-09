import {
  CURRENCIES,
  PAYMENT_METHOD,
  PAYMENT_METHODS,
  SUPPORTED_CURRENCIES
} from './utils/constants';
import { SelectItemInterface } from './utils/interfaces/generic.interface';
import {
  BankAccountInterface,
  FilterPaymentMethodInterface
} from './utils/interfaces/user.interface';

export function getCurrencySymbol(currency: SUPPORTED_CURRENCIES): string {
  let currencySymbol = '';
  CURRENCIES.forEach((val) => {
    if (currency === val.value) {
      currencySymbol = val.symbol;
    }
  });
  return currencySymbol;
}

export function getCurrencyName(currency: SUPPORTED_CURRENCIES): string {
  const data = CURRENCIES.filter((val) => val.value === currency);
  return data[0]?.label;
}

export function getPaymentMethodsName(payMethods: PAYMENT_METHOD[]): string[] {
  const payMethodsName: string[] = [];
  PAYMENT_METHODS.forEach(({ value, label }) => {
    if (payMethods.includes(value as PAYMENT_METHOD)) {
      payMethodsName.push(label);
    }
  });
  return payMethodsName;
}

export function getPaymentMethodName(payMethod: PAYMENT_METHOD): string {
  const method = PAYMENT_METHODS.filter(({ value }) => value === payMethod);
  return method[0]?.label;
}

export function filterPayMethods({
  userPaymentMethods,
  path,
  payMethods
}: FilterPaymentMethodInterface): SelectItemInterface[] {
  const payMethodData = payMethods || Object.values(PAYMENT_METHOD);
  const filtered: SelectItemInterface[] = [];
  userPaymentMethods.forEach((method) => {
    if (payMethodData.includes(method.paymentMethod)) {
      filtered.push({
        [path || 'name']:
          `${getPaymentMethodName(method.paymentMethod)} (${
            method.accountNumber || method.email || method.binanceId
          })` || '',
        value: method.paymentMethod || ''
      });
    }
  });
  return filtered as SelectItemInterface[];
}

export function getUserWithdrawalMethodsForMultiSelect(withdrawalMethods: BankAccountInterface[]) {
  const structuredPayMethods: SelectItemInterface[] = [];
  withdrawalMethods.map((method) =>
    structuredPayMethods.push({ value: method.accountNumber, label: `${method.bankName}` })
  );
  return structuredPayMethods;
}

export function getSupportedPayMethods(paymentMethods: PAYMENT_METHOD[]): SelectItemInterface[] {
  const structuredPayMethods: SelectItemInterface[] = [];
  paymentMethods.forEach((method) =>
    structuredPayMethods.push({ label: getPaymentMethodName(method), value: method })
  );
  return structuredPayMethods;
}

export function getUserSelectedWithdrawalDetails(
  accountNumber: string,
  userWithdrawalMethods: BankAccountInterface[]
): BankAccountInterface {
  const data = userWithdrawalMethods.filter((method) => method.accountNumber !== accountNumber);
  return data[0];
}

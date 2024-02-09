import { FlexWrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import { carneroBold, plusJakartaSans } from '../../utils/fonts';
import { PaymentMethodInterface } from '../../utils/interfaces/user.interface';
import {
  checkPaymentMethodAccountName,
  checkPaymentMethodAccountNumber,
  checkPaymentMethodText
} from '../helperMethods';

interface Props {
  paymentMethod: PaymentMethodInterface;
  paymentMethodName: string;
  exCurrencySymbol?: string;
}

function PaymentDetails({ paymentMethodName, paymentMethod, exCurrencySymbol }: Props) {
  const { accountName, accountNumber, email } = paymentMethod;

  return (
    <>
      <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '2px' }}>
        <CustomizableText
          $margin="0"
          $size="14px"
          $color="#666"
          $fontWeight="500"
          className={plusJakartaSans.className}>
          {checkPaymentMethodText(paymentMethodName)}
        </CustomizableText>
        <CustomizableText
          $margin="0"
          $size="16px"
          $color="#000759"
          $fontWeight="700"
          className={carneroBold.className}>
          {paymentMethodName?.toUpperCase()}
        </CustomizableText>
      </FlexWrapper>

      <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '2px' }}>
        <CustomizableText
          $margin="0"
          $size="14px"
          $color="#666"
          $fontWeight="500"
          className={plusJakartaSans.className}>
          {checkPaymentMethodAccountName(paymentMethodName)}
        </CustomizableText>
        <CustomizableText
          $margin="0"
          $size="16px"
          $color="#000759"
          $fontWeight="700"
          className={carneroBold.className}>
          {accountName?.toUpperCase() || email}
        </CustomizableText>
      </FlexWrapper>

      {checkPaymentMethodAccountNumber(paymentMethodName) && (
        <FlexWrapper $desktop={{ $direction: 'column', $items: 'center', $spaceY: '2px' }}>
          <CustomizableText
            $margin="0"
            $size="14px"
            $color="#666"
            $fontWeight="500"
            className={plusJakartaSans.className}>
            Account Number ({exCurrencySymbol || 'NGN'})
          </CustomizableText>
          <CustomizableText
            $margin="0"
            $size="16px"
            $color="#000759"
            $fontWeight="700"
            className={carneroBold.className}>
            {accountNumber}
          </CustomizableText>
        </FlexWrapper>
      )}
    </>
  );
}

export default PaymentDetails;

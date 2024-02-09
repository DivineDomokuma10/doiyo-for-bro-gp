import Summary from '../../components/summary';
import { SummaryBody, SummaryItem } from '../../components/summary/summary.styles';
import { FlexWrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import { inter, plusJakartaSans } from '../../utils/fonts';

interface Props {
  isUserBuyer: boolean;
  amount: string;
  transactionFee: number;
  price: string;
  payableAmount: string;
  exCurrencySymbol: string;
}

function TradeSummary({
  isUserBuyer,
  amount,
  payableAmount,
  transactionFee,
  price,
  exCurrencySymbol
}: Props) {
  return (
    <Summary summaryTitle="Trade Details">
      <SummaryBody>
        <SummaryItem>
          <CustomizableText
            $margin="3px"
            $color="#666"
            $size="14px"
            $fontWeight="400"
            className={plusJakartaSans.className}>
            Type
          </CustomizableText>
          <CustomizableText
            $margin="3px"
            $color="#2A2A2A"
            $size="14px"
            $fontWeight="600"
            className={plusJakartaSans.className}>
            {isUserBuyer ? 'Buy FX' : 'Sell FX'}
          </CustomizableText>
        </SummaryItem>

        <SummaryItem>
          <CustomizableText $margin="3px" $color="#3C366B" $size="14px" $fontWeight="700">
            {isUserBuyer ? 'You are the Buyer' : 'You are the Seller'}
          </CustomizableText>

          <FlexWrapper $desktop={{ $width: 'fit-content', $direction: 'column', $spaceY: '5px' }}>
            <CustomizableText
              $margin="3px"
              $alignText="right"
              $color="#000"
              $size="14px"
              $fontWeight="700"
              className={inter.className}>
              {amount}
            </CustomizableText>
            <CustomizableText
              $margin="3px"
              $alignText="right"
              $color="#6B7280"
              $size="14px"
              $fontWeight="500"
              className={inter.className}>
              {exCurrencySymbol}1 ~ ₦{price}
            </CustomizableText>
          </FlexWrapper>
        </SummaryItem>

        <SummaryItem>
          <CustomizableText $margin="3px" $color="#3C366B" $size="14px" $fontWeight="700">
            You will Receive
          </CustomizableText>
          <FlexWrapper $desktop={{ $width: 'fit-content', $direction: 'column', $spaceY: '5px' }}>
            <CustomizableText
              $margin="3px"
              $alignText="right"
              $color="#1A202C"
              $size="14px"
              $fontWeight="700"
              className={inter.className}>
              {!isUserBuyer ? ` ₦${payableAmount}` : `${amount}`}
            </CustomizableText>
          </FlexWrapper>
        </SummaryItem>

        <SummaryItem>
          <CustomizableText $margin="3px" $color="#3C366B" $size="14px" $fontWeight="700">
            You will Send
          </CustomizableText>
          <FlexWrapper $desktop={{ $width: 'fit-content', $direction: 'column', $spaceY: '5px' }}>
            <CustomizableText
              $margin="3px"
              $alignText="right"
              $color="#1A202C"
              $size="14px"
              $fontWeight="700"
              className={inter.className}>
              {isUserBuyer ? ` ₦${payableAmount}` : `${amount}`}
            </CustomizableText>
          </FlexWrapper>
        </SummaryItem>

        <SummaryItem>
          <CustomizableText
            $margin="3px"
            $alignText="right"
            $color="#6B7280"
            $size="14px"
            $fontWeight="400"
            className={inter.className}>
            *fee
          </CustomizableText>
          <CustomizableText
            $margin="3px"
            $alignText="right"
            $color="#1A202C"
            $size="14px"
            $fontWeight="600"
            className={inter.className}>
            ₦{transactionFee.toLocaleString()}
          </CustomizableText>
        </SummaryItem>

        <SummaryItem>
          <CustomizableText $margin="3px">Via</CustomizableText>
          <CustomizableText
            $margin="3px"
            $alignText="right"
            $color="#1A202C"
            $size="14px"
            $fontWeight="600"
            className={inter.className}>
            Doiyo
          </CustomizableText>
        </SummaryItem>
      </SummaryBody>
    </Summary>
  );
}

export default TradeSummary;

import React, { ReactElement } from 'react';
import {
  AmountTextField,
  CreateAdStepTwoWrapper,
  InputWrapper,
  MinimumAmountInput
} from '../trade-type/tradeType.styles';
import { carnero } from '../../../utils/fonts';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import { Wrapper } from '../../../styles/layout.styles';
import { useFormContext } from 'react-hook-form';
import { CustomizableText } from '../../../styles/text.styles';
import { getCurrencySymbol } from '../../../helperMethods';

const StepTwo = (): ReactElement => {
  const { register, getValues } = useFormContext();
  const { exCurrency } = getValues();
  const exCurrencySymbol = getCurrencySymbol(exCurrency);

  return (
    <CreateAdStepTwoWrapper className={carnero.className}>
      <CustomizableText $size="24px" $lineHeight="32px" $color="#000759" $fontWeight="600">
        Trade Limit
      </CustomizableText>
      <CustomizableText $size="14px" $lineHeight="20px" $color="#666" $fontWeight="400">
        Leave this blank if you would to accept any trade size.
      </CustomizableText>
      <Wrapper>
        <CustomizableText $color="#2A2A2A" $size="14px" $lineHeight="20px" $fontWeight="500">
          Total FX Amount
        </CustomizableText>
        <AmountTextField placeholder="Total" type="text" {...register('totalAmount')} />
      </Wrapper>

      <Wrapper $mobileColumn="column" $display="flex" $gap="10px" $width="100%">
        <Wrapper $width="50%" $mobileWidth="100%">
          <CustomizableText $color="#2A2A2A" $size="14px" $lineHeight="20px" $fontWeight="500">
            Minimum Amount
          </CustomizableText>
          <InputWrapper $height="45px" $width="90%">
            <CustomizableText $color="#666666" $size="14px">
              {exCurrencySymbol}
            </CustomizableText>
            <MinimumAmountInput
              {...register('minAmount')}
              className={carnero.className}
              placeholder="1,500.00"
            />
            <Wrapper
              $width="10%"
              $align="center"
              $justify="center"
              $display="flex"
              $borderLeft="1px solid #D0D5DD"
              $paddingL="10px"
              $gap="10px">
              <CustomizableText $color="#000" $fontWeight="500" $lineHeight="24px" $size="14px">
                {exCurrency}
              </CustomizableText>
            </Wrapper>
          </InputWrapper>
        </Wrapper>
        <Wrapper $width="50%" $mobileWidth="100%">
          <CustomizableText $color="#2A2A2A" $size="14px" $lineHeight="20px" $fontWeight="500">
            Maximum Amount
          </CustomizableText>
          <InputWrapper $height="45px" $width="90%">
            <CustomizableText $color="#666666" $size="14px">
              {exCurrencySymbol}
            </CustomizableText>
            <MinimumAmountInput
              {...register('maxAmount')}
              className={carnero.className}
              placeholder="1,500.00"
            />
            <Wrapper
              $width="10%"
              $align="center"
              $justify="center"
              $display="flex"
              $borderLeft="1px solid #D0D5DD"
              $paddingL="10px"
              $gap="10px"
              $mobileColumn="row">
              <CustomizableText $color="#000" $fontWeight="500" $lineHeight="24px" $size="14px">
                {exCurrency}
              </CustomizableText>
            </Wrapper>
          </InputWrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper
        $borderRadius="5px"
        $bg="#FFEFEF"
        $marginT="30px"
        $paddingB="15px"
        $paddingL="15px"
        $paddingT="15px"
        $paddingR="15px"
        $display="flex"
        $align="flex-start"
        $gap="20px">
        <InfoIcon sx={{ color: '#E14242', width: '20px', height: '20px' }} />
        <CustomizableText
          $margin="0px"
          $color="#666"
          $size="14px"
          $lineHeight="20px"
          $fontWeight="500">
          You are currently only allowed to trade between $200 to $1m. This would increase after a
          steady successful trade count
        </CustomizableText>
      </Wrapper>
      <CustomizableText $size="24px" $lineHeight="32px" $color="#000759" $fontWeight="600">
        What are your rates?
      </CustomizableText>
      <Wrapper $mobileColumn="column" $display="flex" $gap="10px" $width="100%">
        <Wrapper $width="50%" $mobileWidth="100%">
          <CustomizableText $color="#2A2A2A" $size="14px" $lineHeight="20px" $fontWeight="500">
            Enter your preferred exchange rate
          </CustomizableText>
          <InputWrapper $width="90%" $height="45px">
            <CustomizableText $color="#666666" $size="14px">
              {exCurrencySymbol}
            </CustomizableText>
            <MinimumAmountInput disabled className={carnero.className} placeholder="1" />
          </InputWrapper>
        </Wrapper>
        <Wrapper $width="50%" $mobileWidth="100%">
          <CustomizableText
            $visibility="hidden"
            $color="#2A2A2A"
            $size="14px"
            $lineHeight="20px"
            $fontWeight="500">
            Maximum trade size
          </CustomizableText>
          <InputWrapper $height="45px" $width="90%">
            <Image
              alt="dollar_svg"
              style={{ marginTop: 3 }}
              width={10}
              height={10}
              src={'/naira.svg'}
            />
            <MinimumAmountInput
              className={carnero.className}
              placeholder="750"
              {...register('price')}
            />
          </InputWrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper
        $width="96.5%"
        $border="1px solid rgba(17, 221, 54, 0.16)"
        $marginT="30px"
        $bg="#11DD3629"
        $borderRadius="2px"
        $paddingB="2px"
        $paddingT="2px"
        $paddingL="10px"
        $paddingR="10px"
        $align="center"
        $display="flex"
        $justify="center"
        $mobileWidth="auto">
        <CustomizableText
          $textTransform="uppercase"
          $color="#19B536"
          $margin="0"
          $size="14px"
          $fontWeight="700">
          *** One Dollar is currently trading at ₦1,150
        </CustomizableText>
      </Wrapper>
    </CreateAdStepTwoWrapper>
  );
};

export default StepTwo;

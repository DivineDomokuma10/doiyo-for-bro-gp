import React, { ReactElement } from 'react';
import Image from 'next/image';
import { VERIFICATION_STEPS } from '../constants';
import { Button } from '@mui/material';
import { carnero } from '../../utils/fonts';
import { Wrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';

const VerificationComponent = (): ReactElement => {
  return (
    <div>
      <CustomizableText
        $margin="0px"
        $size="20px"
        $fontWeight="700"
        $lineHeight="32px"
        $color="#000759">
        Account Verification
      </CustomizableText>
      <Wrapper $mobileMarginB="20px" $marginB="70px" $marginT="10px">
        <CustomizableText
          $margin="0px"
          $size="14px"
          $fontWeight="400"
          $lineHeight="20px"
          $color="#444">
          Vendors will be able to give you better deals when you are verified
        </CustomizableText>
      </Wrapper>
      <Wrapper $display="flex" $direction="column" $gap="40px">
        {VERIFICATION_STEPS.map((verification, index) => (
          <Wrapper key={index}>
            <Wrapper
              $bg={verification.complete ? '#EDFDF0' : ''}
              $borderRadius="8px"
              $border={verification.complete ? '1px solid #19B536' : '1px solid #D0D5DD'}
              $paddingB="24px"
              $paddingL="24px"
              $paddingR="24px"
              $paddingT="24px">
              <Wrapper $marginB="20px" $display="flex" $align="center" $justify="space-between">
                <Wrapper>
                  <CustomizableText
                    $margin="0px"
                    $size="20px"
                    $fontWeight="700"
                    $lineHeight="32px"
                    $color="#000759">
                    {verification.level}
                  </CustomizableText>
                  <Wrapper $marginT="5px">
                    <CustomizableText
                      $margin="0px"
                      $size="14px"
                      $fontWeight="400"
                      $lineHeight="20px"
                      $color="#6B7280">
                      {verification.amount}
                    </CustomizableText>
                  </Wrapper>
                </Wrapper>
                {verification.complete && (
                  <Wrapper
                    $display="flex"
                    $align="center"
                    $gap="5px"
                    $bg="#19B536"
                    $borderRadius="100px"
                    $paddingB="8px"
                    $paddingT="8px"
                    $paddingL="16px"
                    $paddingR="16px">
                    <Image src={'/verification.svg'} height={16} width={16} alt="verification" />
                    <CustomizableText
                      $margin="0px"
                      $lineHeight="24px"
                      $fontWeight="600"
                      $size="14px"
                      $color="white">
                      Verified
                    </CustomizableText>
                  </Wrapper>
                )}
              </Wrapper>
              <Wrapper $marginB="20px">
                <CustomizableText $size="14px" $fontWeight="400" $lineHeight="20px" $margin="0px">
                  This level requires the following:
                </CustomizableText>
              </Wrapper>
              {verification.steps.map((state, index) => {
                return (
                  <Wrapper
                    $marginB="15px"
                    $display="flex"
                    $align="center"
                    $gap={'10px'}
                    key={index}>
                    <Image
                      src={state.status ? '/checked.svg' : '/cancel.svg'}
                      alt="check"
                      width={16}
                      height={16}
                    />
                    <CustomizableText
                      $size="14px"
                      $fontWeight="600"
                      $lineHeight="20px"
                      $margin="0px">
                      {state.step}
                    </CustomizableText>
                  </Wrapper>
                );
              })}
            </Wrapper>
            {verification.currentStep === 'active' && (
              <Wrapper $marginT="20px" $display="flex" $justify="flex-end">
                <Button
                  variant="contained"
                  className={carnero.className}
                  sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                  Proceed to next step
                </Button>
              </Wrapper>
            )}
          </Wrapper>
        ))}
      </Wrapper>
    </div>
  );
};

export default VerificationComponent;

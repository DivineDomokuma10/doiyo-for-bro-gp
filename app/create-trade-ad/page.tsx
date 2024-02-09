'use client';
import React, { ReactElement } from 'react';

import Dashboard from '../dashboard/browse';
import { FlexWrapper, TradeContainer } from '../styles/layout.styles';
import TradeAdForm from './components/trade-ad-form';
import { CustomizableText } from '../styles/text.styles';

export interface ISummary {
  type: string;
  buying: string;
  location: string;
}

const CreateTradeAd = (): ReactElement => {
  return (
    <Dashboard>
      <TradeContainer $padding="0px">
        <FlexWrapper
          $desktop={{
            $direction: 'row',
            $items: 'center',
            $spaceX: '150px',
            $justify: 'space-between'
          }}
          $mobile={{
            $spaceX: '0px',
            $spaceY: '10px',
            $direction: 'column',
            $justify: 'flex-start',
            $items: 'center'
          }}>
          <FlexWrapper $margin="0 auto" $desktop={{ $direction: 'column', $spaceY: '20px' }}>
            <div>
              <CustomizableText
                $size="32px"
                $lineHeight="40px"
                $color="#000759"
                $fontWeight="700"
                $margin="0px">
                Create a trade
              </CustomizableText>
              <CustomizableText
                $width="60%"
                $size="16px"
                $lineHeight="24px"
                $color="#666"
                $mobileWidth="100%"
                $fontWeight="400">
                {`Enter trade details carefully. Ad will be listed. Set fair rates, min/max values, and complete transactions promptly.`}
              </CustomizableText>
            </div>
            <TradeAdForm />
          </FlexWrapper>
        </FlexWrapper>
      </TradeContainer>
    </Dashboard>
  );
};

export default CreateTradeAd;

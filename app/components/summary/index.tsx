import React, { ReactElement, ReactNode } from 'react';

import { carneroBold } from '../../utils/fonts';
import { CustomizableText } from '../../styles/text.styles';
import { SummaryBody, SummaryHeader, SummaryWrapper } from './summary.styles';

interface Props {
  subTitle?: string;
  children: ReactNode;
  summaryTitle: string;
}

const Summary = ({ summaryTitle, subTitle, children }: Props): ReactElement => {
  return (
    <SummaryWrapper>
      <SummaryHeader>
        <CustomizableText
          className={carneroBold.className}
          $color="#000759"
          $size="20px"
          $fontWeight="700">
          {summaryTitle}
        </CustomizableText>
      </SummaryHeader>

      <SummaryBody>
        <CustomizableText $color="#2A2A2A" $size="14px" $fontWeight="600">
          {subTitle}
        </CustomizableText>

        {children}
      </SummaryBody>
    </SummaryWrapper>
  );
};

export default Summary;

import Image from 'next/image';
import React, { ReactElement } from 'react';

import { DragAndDropWrapper } from './steps/steps.styles';
import { CustomizableText } from '../../styles/text.styles';
import { FlexWrapper } from '../../styles/layout.styles';
import { plusJakartaSans } from '../../utils/fonts';

const DragAndDrop = (): ReactElement => {
  return (
    <DragAndDropWrapper>
      <Image src={'/uploadIcon.svg'} alt="" width={48} height={48} />

      <FlexWrapper $desktop={{ $direction: 'row', $spaceX: '3px', $justify: 'center' }}>
        <CustomizableText
          $margin="0"
          $size="14px"
          $fontWeight="600"
          $color="#000759"
          $alignText="center"
          className={plusJakartaSans.className}>
          Drag & drop files or
        </CustomizableText>

        <CustomizableText
          $margin="0"
          $size="14px"
          $fontWeight="600"
          $color="#138829"
          className={plusJakartaSans.className}>
          Browse
        </CustomizableText>
      </FlexWrapper>

      <CustomizableText
        $margin="0"
        $alignText="center"
        $size="12px"
        $fontWeight="400"
        $color="#999"
        className={plusJakartaSans.className}>
        Supported format: JPEG, PNG, JPG, and PDF
      </CustomizableText>
    </DragAndDropWrapper>
  );
};

export default DragAndDrop;

import { Radio } from '@mui/material';
import React, { ChangeEvent, ReactNode } from 'react';

import activeSvg from '../../../../public/active.svg';
import inActiveSvg from '../../../../public/inactive.svg';

import { FlexWrapper } from '../../../styles/layout.styles';
import { CustomizableText } from '../../../styles/text.styles';
import { CardContainer } from './tradeType.styles';
import Image from 'next/image';

interface Props {
  active: boolean;
  mainText?: string;
  subText?: string;
  onChange: (val: string) => void;
  id?: string;
}

const TodoCard = ({ active, subText, mainText, onChange, id }: Props): ReactNode => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.id);
  };

  return (
    <CardContainer $active={active} $padding="15px">
      <FlexWrapper $desktop={{ $direction: 'row', $spaceX: '15px', $items: 'center' }}>
        <Image src={active ? activeSvg : inActiveSvg} alt="create-ad-svg" />
        <FlexWrapper $desktop={{ $direction: 'column' }}>
          <CustomizableText $margin="0" $color="#2A2A2A" $size="15px" $fontWeight="600">
            {mainText}
          </CustomizableText>
          <CustomizableText $margin="0" $color="#98A2B3" $size="13px" $fontWeight="400">
            {subText}
          </CustomizableText>
        </FlexWrapper>
      </FlexWrapper>

      <Radio id={id} checked={active} name="radio-buttons" onChange={handleChange} />
    </CardContainer>
  );
};

export default TodoCard;

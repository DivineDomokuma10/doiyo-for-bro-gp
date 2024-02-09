import Image from 'next/image';
import { Radio } from '@mui/material';
import React, { ChangeEvent, ReactElement } from 'react';

import { CardContainer } from './tradeType.styles';
import { CustomizableText } from '../../../styles/text.styles';

interface Props {
  img: string;
  active: boolean;
  currency: string;
  id: string;
  onChange: (value: string) => void;
}

const CurrencyCard = ({ img, active, currency, id, onChange }: Props): ReactElement => {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.target.id);
  }

  return (
    <CardContainer $boxSizing="border-box" $active={active} $padding={'1px 10px'}>
      <Image src={img} alt={currency} width={14} height={14} />

      <CustomizableText
        $margin="0px"
        $size="11px"
        $color={active ? '#000' : '#999'}
        $fontWeight={active ? '600' : '400'}>
        {currency}
      </CustomizableText>

      <Radio id={id} checked={active} size="small" onChange={handleChange} name="radio-buttons" />
    </CardContainer>
  );
};

export default CurrencyCard;

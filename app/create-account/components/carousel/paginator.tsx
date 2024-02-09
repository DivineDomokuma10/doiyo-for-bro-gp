import React, { ReactElement } from 'react';
import { PaginatorContainer, PaginatorItem } from '../../create-account.styles';
import { NUMBERS } from '../../../utils/constants';

interface PaginatorProps {
  activeIndex: number;
}

const Paginator = ({ activeIndex }: PaginatorProps): ReactElement => {
  return (
    <PaginatorContainer>
      <PaginatorItem $isActive={activeIndex === NUMBERS.ZERO && true} />
      <PaginatorItem $isActive={activeIndex === NUMBERS.ONE && true} />
      <PaginatorItem $isActive={activeIndex === NUMBERS.TWO && true} />
    </PaginatorContainer>
  );
};

export default Paginator;

import React, { ReactElement } from 'react';
import { ItemContainer, Text, Title } from '../../create-account.styles';
import Image from 'next/image';

interface CarouselItemProps {
  title: string;
  text: string;
  src: string;
  id: number;
}

export const CarouselItem = ({ src, text, title }: CarouselItemProps): ReactElement => {
  return (
    <ItemContainer>
      <Image src={src} alt={title} quality={100} height={300} width={300} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </ItemContainer>
  );
};

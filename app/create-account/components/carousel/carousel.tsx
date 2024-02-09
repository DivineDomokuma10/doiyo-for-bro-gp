import React, { ReactElement, useEffect, useState } from 'react';

import { CAROUSEL_ITEMS } from '../../constants';
import { CarouselItem } from './carouselItem';
import Paginator from './paginator';
import {
  CarouselMainContainer,
  SphereImageContainer,
  CarouselFooterLink,
  CarouselContainer,
  CarouselFooter
} from './carousel.styles';
import Image from 'next/image';
import { NUMBERS } from '../../../utils/constants';

export const Carousel = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(NUMBERS.ZERO);

  useEffect((): void => {
    setTimeout(() => {
      if (activeIndex === NUMBERS.TWO) {
        setActiveIndex(NUMBERS.ZERO);
      } else {
        setActiveIndex(activeIndex + NUMBERS.ONE);
      }
    }, NUMBERS.FIVE * NUMBERS.ONE_THOUSAND);
  }, [activeIndex]);

  return (
    <CarouselContainer>
      <SphereImageContainer>
        <Image src="/assets/carousel_sphere.png" alt="sphere" height={100} width={100} />
      </SphereImageContainer>
      <CarouselMainContainer>
        <CarouselItem {...CAROUSEL_ITEMS[activeIndex]} />
      </CarouselMainContainer>
      <Paginator activeIndex={activeIndex} />
      <CarouselFooter>
        <CarouselFooterLink $width="">© Doiyo 2024</CarouselFooterLink>
        <CarouselFooterLink $width="">Get Help</CarouselFooterLink>
      </CarouselFooter>
    </CarouselContainer>
  );
};

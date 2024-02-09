import React, { ReactElement } from 'react';

import Image from 'next/image';

import {
  FooterItemOneWrapper,
  FooterItemOneListOne,
  FooterText,
  FooterItemOneListTwo,
  FooterHeaderText,
  FooterSocialsWrapper
} from '../footer.styles';
import { LinkText } from '../../header/header.styles';

export const FooterItem = (): ReactElement => {
  return (
    <FooterItemOneWrapper>
      <FooterItemOneListOne>
        <Image
          src={'/assets/logo-white.png'}
          width={125}
          height={40}
          quality={100}
          alt="header logo"
        />
        <FooterText $margin={20}>
          We are building a P2P platform that enables Africans starting from Nigeria to access
          foreign currencies securely from an online pool of merchants, more of like Binance P2P for
          FX in Africa.
        </FooterText>
      </FooterItemOneListOne>
      <FooterItemOneListTwo>
        <FooterHeaderText>Trade</FooterHeaderText>
        <FooterText>Buy FX</FooterText>
        <FooterText>Sell FX</FooterText>
        <FooterText $visibility="hidden"> hello </FooterText>
      </FooterItemOneListTwo>
      <FooterItemOneListTwo>
        <FooterHeaderText>Company</FooterHeaderText>
        <FooterText>About us</FooterText>
        <FooterText>Terms of Service</FooterText>
        <FooterText>Support Center</FooterText>
      </FooterItemOneListTwo>
      <FooterItemOneListTwo>
        <FooterHeaderText>Follow Us</FooterHeaderText>
        <FooterSocialsWrapper>
          <LinkText href={'#'} target="_blank">
            <Image
              src={'/assets/mdi_facebook.svg'}
              alt="facebook"
              quality={100}
              width={20}
              height={20}
            />
          </LinkText>
          <LinkText target="_blank" href={'https://www.instagram.com/doiyoafrica/'}>
            <Image
              src={'/assets/mdi_instagram.svg'}
              alt="facebook"
              quality={100}
              width={20}
              height={20}
            />
          </LinkText>
          <LinkText href={'#'} target="_blank">
            <Image src={'/assets/x.svg'} alt="facebook" quality={100} width={20} height={20} />
          </LinkText>
        </FooterSocialsWrapper>
        <FooterText>CONTACT</FooterText>
        <FooterText>contact@doiyo.ng</FooterText>
        <FooterText>WHATSAPP</FooterText>
        <FooterText>+234 814 692 5495</FooterText>
      </FooterItemOneListTwo>
    </FooterItemOneWrapper>
  );
};

import React, { ReactElement } from 'react';

import { FooterItem } from './components/footer-item';

import { FooterText, FooterWrapper } from './footer.styles';

function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <FooterItem />
      <FooterText $center="center">© 2023 Doiyo All rights reserved.</FooterText>
    </FooterWrapper>
  );
}

export default Footer;

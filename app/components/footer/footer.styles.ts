import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000759;
  padding: 50px;
  @media (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const FooterItemOneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4b5563;
  margin-bottom: 35px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterItemOneListOne = styled.div`
  width: 50%;
  margin-right: 100px;
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0px;
  }
`;

interface FooterTextProps {
  $center?: string;
  $margin?: number;
  $visibility?: string;
}

export const FooterText = styled.p<FooterTextProps>`
  font-size: 14px;
  font-weight: 400;
  color: #f0f0f0;
  line-height: 24px;
  text-align: ${(props) => props.$center};
  margin-top: ${(props) => props.$margin};
  visibility: ${(props) => props.$visibility};
`;

export const FooterHeaderText = styled.h3`
  color: #fcfcfc;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const FooterItemOneListTwo = styled.div`
  width: 16.5%;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const FooterSocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

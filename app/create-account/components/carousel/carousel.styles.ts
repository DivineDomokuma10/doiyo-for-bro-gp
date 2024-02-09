import Image from 'next/image';
import styled from 'styled-components';

export const CarouselMainContainer = styled.div`
  display: flex;
`;

export const CarouselContainer = styled.section`
  width: 37%;
  border-right: 1px solid #f6f6f6;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const CarouselFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  margin-top: 30px;
  width: 100%;
`;

interface CarouselFooterLinkProp {
  $width: string;
}

export const CarouselFooterLink = styled.p<CarouselFooterLinkProp>`
  color: #a2a2a2;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.28px;
  margin: ${(props) => props.$width && 'auto'};
  margin-bottom: 30px;
  text-align: ${(props) => (props.$width ? 'start' : 'center')};
  width: ${(props) => props.$width && props.$width};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SphereImageContainer = styled.div`
  margin-top: 0px;
  position: absolute;
  inset: 0;
`;
export const CarouselItemImage = styled(Image)``;

export const SphereImage = styled(Image)`
  width: 30%;
  height: auto;
`;

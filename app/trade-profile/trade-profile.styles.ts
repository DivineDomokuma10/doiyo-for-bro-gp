import Image from 'next/image';
import styled from 'styled-components';

export const TradeProfileWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const TradeProfileItemOne = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TradeProfileItemTwo = styled.div`
  width: 65%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50px;
`;

export const VerificationDetailsSect = styled.div`
  border-radius: 16px;
  border: 1px solid #eaeaea;
  padding: 24px;
  @media (max-width: 600px) {
    width: 80%;
    margin: auto;
  }
`;

export const TradeProfileItemTwoUserDetailsSect = styled.div``;

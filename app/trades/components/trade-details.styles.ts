import styled from 'styled-components';

export const TradeDetailsWrapper = styled.main`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    padding: 10px;
    row-gap: 50px;
    flex-direction: column;
    width: auto;
  }
`;

export const TradeStartedWrapper = styled.section`
  width: 40%;
  height: 100%;
  row-gap: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TradeStartedContentWrapper = styled.section`
  width: 100%;
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  align-items: flex-start;
`;

export const TradeStartedStepperWrapper = styled.div`
  width: 100%;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
`;

export const StepControlWrapper = styled.div<{ $width?: string }>`
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  width: ${({ $width }) => $width || '100%'};

  @media (max-width: 600px) {
    width: 340px;
  }
`;

export const StepControlButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  @media (max-width: 600px) {
    row-gap: 20px;
    align-items: start;
    flex-direction: column;
  }
`;

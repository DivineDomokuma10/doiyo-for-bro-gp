import styled from 'styled-components';

export const SummaryWrapper = styled.section`
  width: 450px;
  height: fit-content;
  display: flex;
  border-radius: 8px;
  padding: 30px 25px;
  flex-direction: column;
  border: 2px solid rgba(237, 239, 237, 0.4);

  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const SummaryHeader = styled.div`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e7eb;
`;

export const SummaryBody = styled.div`
  display: flex;
  row-gap: 20px;
  padding-top: 10px;
  flex-direction: column;
`;

export const SummaryItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

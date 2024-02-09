import styled from 'styled-components';

export const StepWrapper = styled.section`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  row-gap: 22px;
  align-items: center;
  border-radius: 8px;
  background: #f9fbf9;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const GreenWrapper = styled.div<{ $isTradeCancelled?: boolean }>`
  width: 100%;
  row-gap: 20px;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  background: ${(props) => (props.$isTradeCancelled ? '#ffcccc' : '#f8ffef')};
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    width: 97%;
    padding: 10px;
  }
`;

export const DragAndDropWrapper = styled.div`
  gap: 16px;
  width: 92%;
  display: flex;
  padding: 24px 32px;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  border: 1px dashed var(--Primary-Blue-Dark, #000759);

  @media (max-width: 600px) {
    width: 80%;
  }
`;

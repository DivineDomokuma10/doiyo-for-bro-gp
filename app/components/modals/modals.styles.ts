import styled from 'styled-components';

interface ModalWrapperProp {
  $items?: string;
  $width?: string;
  $direction?: 'row' | 'column';
}

export const ModalWrapper = styled.section<ModalWrapperProp>`
  gap: 20px;
  display: flex;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  width: ${({ $width }) => $width};
  align-items: ${({ $items }) => $items};
  flex-direction: ${({ $direction }) => $direction};

  @media (max-width: 600px) {
    width: fit-content;
    height: 70%;
    padding: 20px;
    flex-direction: column;
  }
`;

export const ModalHeaderWrapper = styled.div`
  padding: 5px;
`;

export const ModalContentWrapper = styled.div<{ $items?: string; $width?: string }>`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => $width};
  align-items: ${({ $items }) => $items || 'flex-start'};
`;

export const ModalButtonWrapper = styled.div<{ $width?: string }>`
  gap: 30px;
  display: flex;
  justify-content: flex-end;
  width: ${(props) => props.$width || '100%'};

  @media (max-width: 600px) {
    gap: 25px;
    width: 100%;
    flex-direction: column;
  }
`;

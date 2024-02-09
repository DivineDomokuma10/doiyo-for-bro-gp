import styled from 'styled-components';

export const FormFieldContainer = styled.div`
  width: 30%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: 95%;
  padding: 20px 0px;
  padding-left: 30px;
  height: fit-content;
  @media (max-width: 600px) {
    width: fit-content;
    diplay: flex;
    padding: 5px 0px;
    align-items: center;
  }
`;

import styled from 'styled-components';

export const PasswordFormatContainer = styled.div`
  width: 94%;
  display: flex;
  padding: 10px;
  gap: 10px 12px;
  flex-wrap: wrap;
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: flex-start;
  align-content: flex-start;
  background: rgba(227, 254, 232, 0.2);
  border: 1px solid rgba(235, 243, 255, 0.5);
`;

export const PasswordFormat = styled.span`
  padding: 5px;
  display: flex;
  font-size: 11px;
  width: fit-content;
  align-items: center;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.67);
  border: 1px dashed rgba(152, 162, 179, 0.48);
`;

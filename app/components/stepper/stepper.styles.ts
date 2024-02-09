import { Stepper } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const StyledStepper = styled(Stepper)`
  width: 100%;

  .step-label {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    color: #138829;
    font-family: inherit;
    text-transform: capitalize;
  }

  .custom-step-style {
    color: #667085;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-transform: uppercase;
  }

  .custom-text-style {
    font-size: 12;
    font-weight: 400;
    color: #667085;
    font-family: inherit;
    text-transform: uppercase;
  }

  & .Mui-active {
    & .MuiStepConnector-line {
      border-color: #19b536;
      border-width: 1.5px;
    }
  }

  & .Mui-disabled {
    & .MuiStepConnector-line {
      border-color: #eaecf0;
      border-width: 1.5px;
    }
  }
  ,
  & .Mui-completed {
    & .MuiStepConnector-line {
      border-color: #19b536;
      border-width: 1.5px;
    }
  }
`;

export const GoBack = styled(ArrowBackIosNewIcon)`
  width: 3%;
  cursor: pointer;
  color: #138829;
  margin-right: -50px;
  z-index: 999;
  @media (max-width: 600px) {
    margin-right: 0px;
    width: 5%;
  }
`;

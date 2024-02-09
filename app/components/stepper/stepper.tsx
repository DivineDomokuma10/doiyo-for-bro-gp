import React, { ReactElement, memo } from 'react';
import { Step, StepLabel, Typography } from '@mui/material';

import { NUMBERS } from '../../utils/constants';
import CustomStepIcon from './custom-step-icon';
import { GoBack, StyledStepper } from './stepper.styles';
import { Wrapper } from '../../styles/layout.styles';
interface StepperProps {
  steps: string[];
  activeStep: number;
  completedStep: number;
  goToPreviousStep?: () => void;
}

const Stepper = ({
  steps,
  activeStep,
  completedStep,
  goToPreviousStep
}: StepperProps): ReactElement => {
  return (
    <Wrapper $display="flex">
      {completedStep !== NUMBERS.ZERO && goToPreviousStep && <GoBack onClick={goToPreviousStep} />}
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel
                className="custom-step-style"
                icon={
                  <CustomStepIcon
                    index={index + NUMBERS.ONE}
                    completedStep={completedStep}
                    activeStep={activeStep}
                  />
                }
                optional={
                  activeStep === index + NUMBERS.ONE ? (
                    <Typography className="step-label">{step}</Typography>
                  ) : (
                    <></>
                  )
                }>
                <Typography className="custom-step-style">
                  {activeStep === index + NUMBERS.ONE ? `Step ${index + NUMBERS.ONE}` : ''}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </StyledStepper>
    </Wrapper>
  );
};

export default memo(Stepper);

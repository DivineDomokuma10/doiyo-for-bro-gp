import React, { ReactElement } from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { NUMBERS } from '../../utils/constants';

interface CustomStepIconProps {
  index: number;
  completedStep: number;
  activeStep: number;
}
const CustomStepIcon = ({
  index,
  completedStep,
  activeStep
}: CustomStepIconProps): ReactElement => {
  // Customize this function to render your own icon based on the step index
  const renderIcon = (): ReactElement => {
    switch (index) {
      case NUMBERS.ONE:
        return completedStep >= NUMBERS.ONE ? (
          <CheckCircleIcon style={{ color: '#19B536' }} />
        ) : (
          <AlbumIcon style={{ color: '#19B536' }} />
        );
      case NUMBERS.TWO:
        return completedStep >= NUMBERS.TWO ? (
          <CheckCircleIcon style={{ color: '#19B536' }} />
        ) : (
          <AlbumIcon style={{ color: activeStep !== NUMBERS.TWO ? '#EAECF0' : '#19B536' }} />
        );
      case NUMBERS.THREE:
        return completedStep >= NUMBERS.THREE ? (
          <CheckCircleIcon style={{ color: '#19B536' }} />
        ) : (
          <AlbumIcon style={{ color: activeStep < NUMBERS.THREE ? '#EAECF0' : '#19b536' }} />
        );
      case NUMBERS.FOUR:
        return completedStep === NUMBERS.FOUR ? (
          <CheckCircleIcon style={{ color: '#19B536' }} />
        ) : (
          <AlbumIcon style={{ color: activeStep < NUMBERS.FOUR ? '#EAECF0' : '#19B536' }} />
        );
      // Add more cases for other steps
      default:
        return <></>; // Default case, you can return an empty fragment or another default icon
    }
  };

  return renderIcon();
};

export default CustomStepIcon;

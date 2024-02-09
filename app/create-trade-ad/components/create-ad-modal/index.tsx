import { Button, Modal } from '@mui/material';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import { AddAccountWrapper } from '../trade-type/tradeType.styles';
import { carnero } from '../../../utils/fonts';
import { CustomizableText } from '../../../styles/text.styles';

interface CreateAdModalProps {
  createAdModal: boolean;
  toggleCreateAdModal: () => void;
  headerText: string;
  paragraph: string;
}

const CreateAdModal = ({
  createAdModal,
  toggleCreateAdModal,
  headerText,
  paragraph
}: CreateAdModalProps): ReactElement => {
  return (
    <Modal
      sx={{ border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      open={createAdModal}
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      onClose={toggleCreateAdModal}>
      <AddAccountWrapper $width="50%">
        <Image src={'/create_ad_complete.svg'} height={145} width={160} alt="create_ad_complete" />
        <CustomizableText
          $align="center"
          $margin="0px"
          $color="#000759"
          $size="20px"
          $fontWeight="700"
          $lineHeight="32px">
          {headerText}
        </CustomizableText>
        <CustomizableText
          $width="70%"
          $align="center"
          $color="#666"
          $size="14px"
          $fontWeight="500"
          $lineHeight="20px"
          $textTransform="capitalize">
          {paragraph}
        </CustomizableText>
        <Button
          className={carnero.className}
          onClick={toggleCreateAdModal}
          sx={{ height: 50, width: '70%', fontWeight: 700, textTransform: 'capitalize' }}
          variant="contained">
          Okay
        </Button>
      </AddAccountWrapper>
    </Modal>
  );
};

export default CreateAdModal;

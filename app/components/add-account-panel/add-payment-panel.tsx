import { Button } from '@mui/material';
import { CustomizableText } from '../../styles/text.styles';
import Image from 'next/image';
import { Wrapper } from '../../styles/layout.styles';

interface Props {
  openModal: () => void;
}
function AddPaymentPanel({ openModal }: Props) {
  return (
    <Wrapper
      $padding="20px 0"
      $boxSizing="border-box"
      $rowGap="20px"
      $width="80%"
      $margin="0 auto"
      $align="center"
      $display="flex"
      $direction="column">
      <Image src="/assets/slate.svg" width={150} height={150} alt="Slate" />
      <CustomizableText $alignText="center" $color="#000759" $size="20px" $fontWeight="800">
        No Payment Method Added
      </CustomizableText>
      <CustomizableText
        $alignText="center"
        $size="16px"
        $lineHeight="24px"
        $color="#666"
        $fontWeight="400">
        You do not have any payment method added yet, please use the button below to add payment
        method to your profile
      </CustomizableText>
      <Button onClick={openModal} sx={{ textTransform: 'inherit' }} variant="contained">
        Add a new Payment method
      </Button>
    </Wrapper>
  );
}

export default AddPaymentPanel;

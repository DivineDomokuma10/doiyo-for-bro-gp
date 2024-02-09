import React, { ReactElement } from 'react';
import { Button, TextField } from '@mui/material';
import Image from 'next/image';
import { UserInterface } from '../../../utils/interfaces/user.interface';
import { Wrapper } from '../../../styles/layout.styles';
import { CustomizableText } from '../../../styles/text.styles';

interface UserProps {
  user: UserInterface;
}

const Form = ({ user }: UserProps): ReactElement => {
  return (
    <Wrapper>
      <Wrapper
        $mobileColumn="column"
        $display="flex"
        $justify="space-between"
        $gap="30px"
        $mobileGap="20px">
        <Wrapper $mobileWidth="100%" $width="50%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Username
          </CustomizableText>
          <TextField placeholder={`@${user?.username}`} />
        </Wrapper>
        <Wrapper $mobileWidth="100%" $width="50%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Full name
          </CustomizableText>
          <TextField placeholder={`${user?.firstName} ${user?.lastName}`} disabled />
        </Wrapper>
      </Wrapper>
      <Wrapper
        $mobileColumn="column"
        $marginT="15px"
        $display="flex"
        $justify="space-between"
        $gap="30px"
        $mobileGap="20px">
        <Wrapper $mobileWidth="100%" $width="50%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Email Address
          </CustomizableText>
          <Wrapper
            $display="flex"
            $align="center"
            $justify="space-between"
            $border="1px solid #D0D5DD"
            $paddingB="8px"
            $paddingL="14px"
            $paddingR="14px"
            $paddingT="8px"
            $borderRadius="4px"
            $height="45px"
            $mobileHeight="48px">
            <CustomizableText $size="14px" $fontWeight="400" $lineHeight="24px" $margin="0px">
              {user?.email}
            </CustomizableText>
            <Image
              src={'/verified.svg'}
              height={16}
              width={16}
              quality={100}
              alt="verification icon"
            />
          </Wrapper>
        </Wrapper>
        <Wrapper $mobileWidth="100%" $width="50%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Phone Number
          </CustomizableText>
          <Wrapper
            $display="flex"
            $align="center"
            $justify="space-between"
            $border="1px solid #D0D5DD"
            $paddingB="8px"
            $paddingL="14px"
            $paddingR="14px"
            $paddingT="8px"
            $borderRadius="4px"
            $height="45px"
            $mobileHeight="50px">
            <CustomizableText $size="14px" $fontWeight="400" $lineHeight="24px" $margin="0px">
              {user?.phone}
            </CustomizableText>
            <Image
              src={'/verified.svg'}
              height={16}
              width={16}
              quality={100}
              alt="verification icon"
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper
        $mobileColumn="column"
        $marginT="100px"
        $mobileMarginT="30px"
        $display="flex"
        $justify="space-between"
        $gap="30px">
        <Wrapper $width="50%" $mobileWidth="100%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Bio
          </CustomizableText>
          <textarea
            name=""
            id=""
            style={{ height: 100, padding: 10 }}
            placeholder="Your bio appears on your profile picture"></textarea>
        </Wrapper>
        <Wrapper $width="50%" $mobileWidth="100%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Preferred Currency
          </CustomizableText>
          <TextField defaultValue={'Nigerian Naira (NGN)'} disabled={true} />
        </Wrapper>
      </Wrapper>
      <Wrapper
        $mobileColumn="column"
        $marginT="30px"
        $display="flex"
        $justify="space-between"
        $gap="30px">
        <Wrapper $width="50%" $mobileWidth="100%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Language
          </CustomizableText>
          <TextField defaultValue={'English'} disabled={true} />
        </Wrapper>
        <Wrapper $width="50%" $mobileWidth="100%" $display="flex" $direction="column" $gap="10px">
          <CustomizableText
            $color="#2A2A2A"
            $margin="0px"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px">
            Timezone
          </CustomizableText>
          <TextField defaultValue={'(GMT+1) Africa,Lagos - 5:39PM'} disabled={true} />
        </Wrapper>
      </Wrapper>
      <Wrapper $marginT="40px" $display="flex" $justify="flex-end">
        <Button disabled={true} sx={{ fontWeight: 600 }} variant="contained">
          Save Changes
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default Form;

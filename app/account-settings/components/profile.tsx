'use client';
import React, { ChangeEvent, ReactElement, useContext, useState } from 'react';
import { ImageInput, ProfileWrapper, UploadImage } from '../account-settings.styles';
import { UploadLabel } from '../../create-trade-ad/components/trade-type/tradeType.styles';
import Image from 'next/image';
import { AppContextStore } from '../../contexts/app-context';
import Form from '../components/form';
import { Wrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';

export const ProfileComponent = (): ReactElement => {
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const {
    state: { user }
  } = useContext(AppContextStore);
  // Handler for Upload Image
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileList: FileList | null = e.target.files;
    if (fileList) {
      setUploadedImage(URL.createObjectURL(fileList[0]));
    }
  };

  return (
    <ProfileWrapper>
      <CustomizableText
        $margin="0px"
        $size="20px"
        $fontWeight="700"
        $lineHeight="32px"
        $color="#000759">
        Profile
      </CustomizableText>
      <Wrapper $mobileMarginB="20px" $marginB="50px" $marginT="10px">
        <CustomizableText
          $margin="0px"
          $size="14px"
          $fontWeight="400"
          $lineHeight="20px"
          $color="#444">
          Information would be displayed publicly. So be careful what you share
        </CustomizableText>
      </Wrapper>
      <CustomizableText
        $margin="0px"
        $color="#374151"
        $fontWeight="500"
        $lineHeight="20px"
        $size="14px">
        Your photo
      </CustomizableText>
      <Wrapper
        $marginB="50px"
        $mobileMarginB="20px"
        $marginT="7px"
        $display="flex"
        $align="center"
        $gap="30px"
        $mobileGap="15px">
        <UploadImage
          $mobileHeight="60px"
          $mobileWidth="60px"
          alt="upload-image"
          src={uploadedImage ? uploadedImage : '/assets/avatar2.svg'}
        />
        <Wrapper $mobileWidth="80%">
          <Wrapper $mobileWidth="100%" $display="flex" $gap="10px">
            <UploadLabel
              $mobileWidth="50%"
              $justify="center"
              $cursor="pointer"
              htmlFor="upload-image"
              $bg="#19B536"
              $paddingB="8px"
              $paddingT="8px"
              $paddingL="16px"
              $paddingR="16px"
              $borderRadius="4px"
              $display="flex"
              $align="center"
              $gap="8px">
              <ImageInput type="file" id="upload-image" onChange={handleImageChange} />
              <Image width={12} height={12} src={'/export.svg'} alt="upload" />
              <CustomizableText
                $margin="0px"
                $color="#fff"
                $fontWeight="600"
                $lineHeight="16px"
                $size="12px">
                Upload
              </CustomizableText>
            </UploadLabel>
            <Wrapper
              $mobileWidth="50%"
              $justify="center"
              $border="1px solid #D0D5DD"
              $paddingB="8px"
              $paddingT="8px"
              $paddingL="16px"
              $paddingR="16px"
              $borderRadius="4px"
              $display="flex"
              $align="center"
              $gap="8px">
              <CustomizableText
                $margin="0px"
                $color="black"
                $fontWeight="600"
                $lineHeight="16px"
                $size="12px">
                Remove
              </CustomizableText>
              <Image width={12} height={12} src={'/delete.svg'} alt="delete" />
            </Wrapper>
          </Wrapper>
          <Wrapper $marginT="10px">
            <CustomizableText
              $margin="0px"
              $size="14px"
              $fontWeight="400"
              $lineHeight="20px"
              $color="#666">
              This will be displayed on your profile.
            </CustomizableText>
          </Wrapper>
          <Wrapper $marginT="5px">
            <CustomizableText
              $margin="0px"
              $size="10px"
              $fontWeight="400"
              $lineHeight="16px"
              $color="#F10909">
              We do not accept any explicit or otherwise inappropriate image. We may terminate your
              account!
            </CustomizableText>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Form user={user} />
    </ProfileWrapper>
  );
};

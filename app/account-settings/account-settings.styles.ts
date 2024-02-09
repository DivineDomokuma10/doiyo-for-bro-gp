import styled from 'styled-components';

export const AccountSettingsWrapper = styled.section`
  width: 100%;
`;
export const AccountSettingsSect = styled.section`
  width: 80%;
  margin: auto;
  padding: 50px 0;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
`;

export const SecurityWrapper = styled(ProfileWrapper)``;

export const ImageInput = styled.input`
  display: none;
`;
interface UploadImageProps {
  $width?: string;
  $height?: string;
  $mobileWidth?: string;
  $mobileHeight?: string;
}

export const UploadImage = styled.img<UploadImageProps>`
  border-radius: 100px;
  object-fit: cover;
  width: ${(props) => (props.$width ? props.$width : '80px')};
  height: ${(props) => (props.$height ? props.$height : '80px')};
  @media (max-width: 600px) {
    width: ${(props) => (props.$mobileHeight ? props.$mobileHeight : '20%')};
    height: ${(props) => props.$mobileHeight && props.$mobileHeight};
  }
`;

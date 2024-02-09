import React, { ReactElement, useContext, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';

import {
  HeaderWrapper,
  HeaderButton,
  HeaderProfile,
  HeaderNameText,
  MobileHeader,
  HamburgerSect,
  HamburgerWrapper,
  HeaderItemsLeftWrapper,
  HeaderItemsRightWrapper,
  HeaderNavigationDropdown,
  LinkText,
  DropDownArrowWrapper
} from './header.styles';
import { usePathname, useRouter } from 'next/navigation';
import { UploadImage } from '../../account-settings/account-settings.styles';
import { CustomizableText } from '../../styles/text.styles';
import { AppContextStore } from '../../contexts/app-context';

interface Props {
  toggleSideNavBar: () => void;
}

const Header = ({ toggleSideNavBar }: Props): ReactElement => {
  const [dropdown, setDropdown] = useState(false);
  const redirectTo = useRouter();

  const {
    state: { user }
  } = useContext(AppContextStore);

  const toggleHeaderDropdown = () => setDropdown(!dropdown);

  const pathName = usePathname();

  const handleSignOut = (): void => {
    localStorage.removeItem('token');
    redirectTo.push('/login');
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderItemsLeftWrapper>
          <Image
            style={{ alignSelf: 'center', marginRight: 20 }}
            src={'/assets/logo-white.png'}
            width={75}
            height={25}
            quality={100}
            alt="header logo"
          />
          <HeaderButton $active={pathName == '/dashboard'} href="/dashboard">
            <SearchIcon style={{ fontSize: 20 }} /> Browse
            <KeyboardArrowDownIcon style={{ fontSize: 20 }} />
          </HeaderButton>
          <HeaderButton $active={pathName === '/create-trade-ad'} href="/create-trade-ad">
            <AddCircleOutlineIcon style={{ fontSize: 20 }} /> Create a Trade Ad
          </HeaderButton>
          <HeaderButton $active={pathName === '/trades'} href="/trades">
            <TimelineIcon style={{ fontSize: 20 }} /> My Trades
          </HeaderButton>
        </HeaderItemsLeftWrapper>
        <HeaderItemsRightWrapper>
          <NotificationsIcon style={{ fontSize: 20, color: 'white', cursor: 'pointer' }} />
          <HeaderProfile onClick={toggleHeaderDropdown}>
            <UploadImage
              src={user?.avatar ? user?.avatar : '/assets/avatar2.svg'}
              alt="profile"
              $height={'32px'}
              $width={'32px'}
            />
            <HeaderNameText>{user?.firstName}</HeaderNameText>
            {dropdown ? (
              <KeyboardArrowUpIcon style={{ fontSize: 20, color: 'white' }} />
            ) : (
              <KeyboardArrowDownIcon style={{ fontSize: 20, color: 'white' }} />
            )}
          </HeaderProfile>
        </HeaderItemsRightWrapper>
      </HeaderWrapper>
      <MobileHeader>
        <HamburgerSect>
          <HamburgerWrapper onClick={toggleSideNavBar}>
            <MenuIcon sx={{ fontSize: 16 }} />
          </HamburgerWrapper>
          <Image src={'/logo.svg'} width={50} height={18} quality={100} alt="mobile logo" />
        </HamburgerSect>
        <HamburgerSect>
          <UploadImage
            src={user?.avatar ? user?.avatar : '/assets/avatar2.svg'}
            alt="profile"
            $mobileWidth={'30px'}
            $mobileHeight={'30px'}
          />
          <DropDownArrowWrapper>
            <KeyboardArrowDownIcon sx={{ fontSize: 16, cursor: 'pointer' }} />
          </DropDownArrowWrapper>
        </HamburgerSect>
      </MobileHeader>
      {dropdown && (
        <HeaderNavigationDropdown>
          <LinkText href={'/trade-profile'}>Trade profile</LinkText>
          <LinkText href={'/account-settings/profile'}>Account settings</LinkText>
          <CustomizableText
            $cursor="pointer"
            $color="#666"
            $size="14px"
            $fontWeight="500"
            $lineHeight="20px"
            $marginB="15px"
            $margin="0px"
            onClick={handleSignOut}>
            Sign out
          </CustomizableText>
        </HeaderNavigationDropdown>
      )}
    </>
  );
};

export default Header;

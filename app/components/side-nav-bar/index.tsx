import Image from 'next/image';
import React, { ReactElement, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  LinkItem,
  NavItemWrapper,
  NavLinkChildrenWrapper,
  NavLinkWrapper,
  SideNavBarBodyWrapper,
  SideNavBarFooterWrapper,
  SideNavBarHeaderWrapper,
  SideNavBarWrapper
} from './side-nav-bar.styled';

import { plusJakartaSans } from '../../utils/fonts';
import { BrowseAdsContextStore } from '../../contexts/browse-ads-context';
import { TRADE_TYPE } from '../../dashboard/constants';
import { BROWSE_TRADE_ADS_ACTIONS } from '../../utils/actions';

interface Props {
  toggleSideNavBar(): void;
}

const SideNavBar = ({ toggleSideNavBar }: Props): ReactElement => {
  const pathName = usePathname();
  const redirectTo = useRouter();
  const [showBrowseChildren, setShowBrowseChildren] = useState<boolean>(false);

  const handleSignOut = (): void => {
    localStorage.removeItem('token');
    redirectTo.push('/login');
  };

  const handleShowBrowseChildren = (): void => setShowBrowseChildren((prev) => !prev);

  const { state, dispatch } = useContext(BrowseAdsContextStore);

  const handleTradeType =
    (tradeType: TRADE_TYPE): (() => void) =>
    (): void => {
      dispatch({ type: BROWSE_TRADE_ADS_ACTIONS.SWITCH_TRADE_TYPE, payload: tradeType });
    };

  return (
    <SideNavBarWrapper>
      <SideNavBarHeaderWrapper>
        <Image src="/logo_2.svg" alt="" width={62.222} height={20} />

        <Image alt="" width={24} height={24} src="/cancelBoxIcon.svg" onClick={toggleSideNavBar} />
      </SideNavBarHeaderWrapper>

      <SideNavBarBodyWrapper>
        <NavItemWrapper>
          <NavLinkWrapper>
            <LinkItem
              $size="16px"
              href="/dashboard"
              $active={pathName === '/dashboard'}
              className={plusJakartaSans.className}>
              Browse
            </LinkItem>

            {showBrowseChildren ? (
              <Image
                src="/arrowDown.svg"
                alt=""
                width={12}
                height={12}
                onClick={handleShowBrowseChildren}
              />
            ) : (
              <Image
                src="/arrowRight.svg"
                alt=""
                width={12}
                height={12}
                onClick={handleShowBrowseChildren}
              />
            )}
          </NavLinkWrapper>

          {showBrowseChildren && (
            <NavLinkChildrenWrapper>
              <NavLinkWrapper>
                <LinkItem
                  $size="14px"
                  $active={state?.tradeType === TRADE_TYPE.BUY}
                  onClick={handleTradeType(TRADE_TYPE.BUY)}
                  className={plusJakartaSans.className}>
                  Buy FX
                </LinkItem>
              </NavLinkWrapper>

              <NavLinkWrapper>
                <LinkItem
                  $size="14px"
                  $active={state?.tradeType === TRADE_TYPE.SELL}
                  onClick={handleTradeType(TRADE_TYPE.SELL)}
                  className={plusJakartaSans.className}>
                  Sell FX
                </LinkItem>
              </NavLinkWrapper>
            </NavLinkChildrenWrapper>
          )}
        </NavItemWrapper>

        <NavItemWrapper>
          <NavLinkWrapper>
            <LinkItem
              $size="16px"
              href="/create-trade-ad"
              $active={pathName === '/create-trade-ad'}
              className={plusJakartaSans.className}>
              Create a Trade Ad
            </LinkItem>
          </NavLinkWrapper>
        </NavItemWrapper>

        <NavItemWrapper>
          <NavLinkWrapper>
            <LinkItem
              $size="16px"
              href="/trades"
              $active={pathName === '/trades'}
              className={plusJakartaSans.className}>
              My Trades
            </LinkItem>
          </NavLinkWrapper>
        </NavItemWrapper>
      </SideNavBarBodyWrapper>

      <SideNavBarFooterWrapper>
        <LinkItem
          $size="14px"
          href="/trade-profile"
          $active={pathName === '/trade-profile'}
          className={plusJakartaSans.className}>
          Trade profile
        </LinkItem>

        <LinkItem
          $size="14px"
          href="/account-settings/profile"
          $active={pathName === '/account-settings/profile'}
          className={plusJakartaSans.className}>
          Account settings
        </LinkItem>

        <LinkItem $size="14px" onClick={handleSignOut} className={plusJakartaSans.className}>
          Sign out
        </LinkItem>
      </SideNavBarFooterWrapper>
    </SideNavBarWrapper>
  );
};

export default SideNavBar;

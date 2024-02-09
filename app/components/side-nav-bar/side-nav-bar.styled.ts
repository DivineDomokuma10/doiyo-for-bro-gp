import styled from 'styled-components';

export const SideNavBarWrapper = styled.nav`
  display: none;

  @media (max-width: 600px) {
    width: 100%;
    z-index: 100;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    flex-direction: column;
    box-sizing: border-box;
    background: var(--Primary-Green-Light, #19b536);
  }
`;

export const SideNavBarHeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  height: 64px;
  padding: 0px 20px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px solid rgba(19, 136, 41, 0.24);
`;

export const SideNavBarBodyWrapper = styled.section`
  width: 100%;
  height: 65%;
  display: flex;
  row-gap: 30px;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(19, 136, 41, 0.24);
`;

export const NavItemWrapper = styled.div`
  width: 100%;
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  box-sizing: border-box;
`;

interface LinkItemProps {
  $size: string;
  $active?: boolean;
}

export const NavLinkWrapper = styled.span`
  width: 100%;
  display: flex;
  font-style: normal;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const LinkItem = styled.a<LinkItemProps>`
  text-decoration: none;
  font-size: ${({ $size }) => $size};
  color: ${({ $active }) => ($active ? '#fff' : '#f8ffef')};
  font-weight: ${({ $active }) => ($active ? '700' : '6 00')};
`;

export const NavLinkChildrenWrapper = styled.div`
  display: flex;
  row-gap: 20px;
  padding: 0px 17px;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SideNavBarFooterWrapper = styled(NavItemWrapper)`
  padding: 20px;
`;

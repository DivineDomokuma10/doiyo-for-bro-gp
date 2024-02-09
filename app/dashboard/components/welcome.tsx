import React, { ReactElement, useContext } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import {
  WelcomeSect,
  WelcomeSectOne,
  WelcomeTextsWrapper,
  WelcomeText,
  WelcomeBoldText
} from '../dashboard.styles';

import { AppContextStore } from '../../contexts/app-context';
import { WelcomeButton } from '../../components/header/header.styles';
import { useRouter } from 'next/navigation';

interface WelcomeProps {
  toggleFilter: () => void;
  filter: boolean;
}

export const Welcome = ({ toggleFilter, filter }: WelcomeProps): ReactElement => {
  const {
    state: { user }
  } = useContext(AppContextStore);

  const router = useRouter();
  const navigateToCreateNewAd = (): void => router.push('/create-trade-ad');

  return (
    <WelcomeSect>
      <WelcomeSectOne>
        <WelcomeTextsWrapper>
          <WelcomeText>Welcome {user?.username},</WelcomeText>
          <WelcomeBoldText>What would you like to do?</WelcomeBoldText>
        </WelcomeTextsWrapper>
        <WelcomeButton onClick={navigateToCreateNewAd}>
          <AddCircleOutlineIcon style={{ fontSize: 15 }} /> New Trade Ad
        </WelcomeButton>
      </WelcomeSectOne>
      <WelcomeSectOne>
        <WelcomeTextsWrapper>
          <WelcomeBoldText $color={'#3C366B'}>Browse Trades</WelcomeBoldText>
        </WelcomeTextsWrapper>
        <WelcomeButton $filter={filter} onClick={toggleFilter} $color={'#D0D5DD'}>
          <FilterAltIcon style={{ fontSize: 15 }} /> Filter
        </WelcomeButton>
      </WelcomeSectOne>
    </WelcomeSect>
  );
};

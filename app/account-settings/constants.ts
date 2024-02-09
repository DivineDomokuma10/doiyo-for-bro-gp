import { NUMBERS } from '../utils/constants';

export const VERIFICATION_STEPS = [
  {
    amount: 'Up to 1,000$/month trade volume',
    level: 'Basic KYC',
    steps: [
      { step: 'Email Verification', status: true },
      { step: 'Phone Verification', status: true },
      { step: 'Full Name Validation', status: true },
      { step: 'Country of Residence', status: true }
    ],
    currentStep: 'true',
    complete: true
  },
  {
    amount: 'Up to 2,000$/month trade and transaction volume',
    level: 'Intermediate',
    steps: [
      { step: 'Basic Tier Verification', status: true },
      { step: 'ID Verification', status: false },
      { step: 'Face Verification', status: false }
    ],
    currentStep: 'active',
    complete: false
  },
  {
    amount: 'Up to 5,000$/month trade and transaction volume',
    level: 'Advanced',
    steps: [
      { step: 'Basic Tier Verification', status: true },
      { step: 'Intermediate Tier Verification', status: false },
      { step: 'Video Verification', status: false },
      { step: 'Address Verification', status: false }
    ],
    currentStep: 'pending',
    complete: false
  }
];

export const ACCOUNT_SETTINGS_TABS = [
  {
    tabName: 'Profile',
    icon: '/active_profile.svg',
    activeIcon: '/inactive_profile.svg',
    path: '/account-settings/profile',
    index: NUMBERS.ZERO
  },
  {
    tabName: 'Security',
    icon: '/active_security.svg',
    activeIcon: '/inactive_security.svg',
    path: '/account-settings/security',
    index: NUMBERS.ONE
  },
  {
    tabName: 'Verification',
    icon: '/active_verification.svg',
    activeIcon: '/inactive_verification.svg',
    path: '/account-settings/verification',
    index: NUMBERS.TWO
  }
];

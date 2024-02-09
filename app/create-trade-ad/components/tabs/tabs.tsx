import GridViewIcon from '@mui/icons-material/GridView';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import { NUMBERS } from '../../../utils/constants';
import { ReactElement } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { FlexWrapper } from '../../../styles/layout.styles';
import { carnero } from '../../../utils/fonts';
import { CustomizableText } from '../../../styles/text.styles';

const CREATE_AD_TABS = [
  { tabName: 'Trade Type', icon: <GridViewIcon />, index: NUMBERS.ZERO },
  { tabName: 'Pricing', icon: <CreditCardIcon />, index: NUMBERS.ONE },
  { tabName: 'Ad Details', icon: <DescriptionIcon />, index: NUMBERS.TWO }
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

interface Props {
  activeStep: number;
  navigateTabs: (value: number) => void;
}

function TabsComponent({ activeStep, navigateTabs }: Props): ReactElement {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs scrollButtons="auto" value={activeStep}>
        {CREATE_AD_TABS.map((tab) => (
          <Tab
            disabled={activeStep >= tab.index ? false : true}
            onClick={() => navigateTabs(tab.index)}
            key={tab.index}
            sx={{ fontWeight: 800, textTransform: 'capitalize' }}
            label={
              <FlexWrapper
                className={carnero.className}
                $desktop={{ $direction: 'row', $items: 'center', $spaceX: '5px' }}>
                {tab.icon}
                <CustomizableText $margin="0px">{tab.tabName}</CustomizableText>
              </FlexWrapper>
            }
            {...a11yProps(tab.index)}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default TabsComponent;

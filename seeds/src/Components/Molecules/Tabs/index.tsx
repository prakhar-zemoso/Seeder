import React from 'react';
import {styled, Tab as myTabs} from '@mui/material'
import { Box, Grid } from '@mui/material';
import theme from '../../../theme';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {withStyles} from '@mui/styles';


export type Tab = {
    name: string;
    children: React.ReactNode;

}


interface TabsProps{
    tabs: Tab[];
    tabValue: string;
}

const CustomTab = withStyles({
    root:{
        minWidth:98,
        minHeight: 43,
        borderRadius: 12,
        marginRight:12,
        color: '#C9C8CC',
        backgroundColor: '#262529',
        padding: '12px 24px'
    },
    selected:{
        color: `${theme.palette.primaryPurple400.main} !important`,
        backgroundColor: theme.palette.primaryPurple600.main,
        border: `5px solid theme.palette.primaryPurple400.main`
    },
})(myTabs);

const TabIndicatorPropsStyling: React.CSSProperties = {
    display:'none'
}

const CustomizeTabs : React.FC<TabsProps> = ({tabs,tabValue}:TabsProps) => {
    const [value, setValue] = React.useState(tabValue);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
}

return(
    <Grid>
    <TabContext value={value}>
      <Box>
        <TabList
        TabIndicatorProps={{style: TabIndicatorPropsStyling}}
          onChange={handleChange}
          
        >
          {tabs.map((tab, index) => {
            return (
              <CustomTab
                label={tab.name}
                key={tab.name}
                value={`${index + 1}`}
              />
            );
          })}
        </TabList>
      </Box>
      {tabs.map((tab, index) => {
        return <TabPanel value={`${index + 1}`}>{tab.children}</TabPanel>;
      })}
    </TabContext>
  </Grid>
);
};

export default CustomizeTabs;

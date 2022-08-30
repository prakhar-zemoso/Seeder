import CustomizeTabs, { Tab } from '.';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import {BasicTable} from '../../Organisms/DataTable';


export default {
  title: 'Molecules/Tabs',
  component: CustomizeTabs,
};

const Template: ComponentStory<typeof CustomizeTabs> = (args) => (
  <CustomizeTabs {...args} />
);

const TestTabs: Tab[] = [
  {
    name: 'My Contracts',
    children: <BasicTable/>,
  },
  {
    name: 'My Cash Kicks',
    children: 'Dummy data',
  },
];


export const Tabs = Template.bind({});
Tabs.args = {
  tabs: TestTabs,
};


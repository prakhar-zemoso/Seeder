import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LaunchCard from './index';
import {Typography} from '@mui/material';
import theme from '../../../theme/index';

export default {
  title: 'Molecules/LaunchCard',
  component: LaunchCard,
} as ComponentMeta<typeof LaunchCard>;

const Template: ComponentStory<typeof LaunchCard> = (args) => (
  <LaunchCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Launch a new Cash Kick',
  discription: (
    <Typography variant="body1">
      You have upto{' '}
      <strong style={{ color: '#E8E7F0' }}>$880,000.00</strong>{' '}
      available for a new cash advance
    </Typography>
  ),
  label: 'New Cash Kick',
  disabled: false,
};

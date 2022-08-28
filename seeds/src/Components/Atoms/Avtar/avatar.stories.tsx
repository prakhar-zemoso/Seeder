import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AvatarIcon from '.';
import avatarImage from './../../../images/Avatar/Golden path/title-bar/avatarImage.svg'


export default{
    title: 'Atoms/Avatar',
    component : AvatarIcon
}as ComponentMeta<typeof AvatarIcon>;

const Template :ComponentStory<typeof AvatarIcon> = (args:any) => (
    <AvatarIcon {...args}></AvatarIcon>
  );

  export const Default = Template.bind({});

  Default.args ={
    src: avatarImage,
    alt: 'Avatar',
  }

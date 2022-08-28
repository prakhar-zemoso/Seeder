import { ThemeContext } from '@emotion/core';
import { Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonComponent from '.';
import theme from "./../../../theme/index"




export default{
    title: 'Atoms/Button',
    component: ButtonComponent,
    argTypes: {onclick:{action:'clicked'}}, 
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />

export const Default = Template.bind({});

Default.args={
    childern:'Button',
    variant: 'contained',
    disabled: false,
    sx:{
        width: theme.spacing(69),
        height:theme.spacing(14.75),
        background:theme.palette.primaryPurple500.main,
        //color:theme.palette.primary.main,
        padding:'20px 40px',
        borderRadius: '12PX'
                
    }
}

export const Button2 = Template.bind({});
Button2.args ={
    childern:<Typography variant='button' color="#FFFFF">Button</Typography>,
    disabled:false,
    style:{
        padding: '20px 40px',
        borderRadius:'12px'
        },

    variant: 'contained'

}


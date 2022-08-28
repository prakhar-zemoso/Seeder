import Box from '@mui/material/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import CustomizedSlider from './index'




const onChange = (value:number)=>{
    return `${value}`
};

export default {
    title: 'Atoms/Slider',
    component: CustomizedSlider,
} as ComponentMeta<typeof CustomizedSlider>


const Template: ComponentStory<typeof CustomizedSlider> = (args) =>(
    <Box>
        <CustomizedSlider {...args}/>{''}
    </Box>
);

export const Slider = Template.bind({});

Slider.args = {
    value:0,
    onChange:onChange,
};

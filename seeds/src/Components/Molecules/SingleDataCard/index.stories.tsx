import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import TextData from './index'
import Calender from '../../../../public/images/calender/data-block/bg+icon.svg'



export default {
    title:"Molecules/Text TextData",
    component: TextData
}as ComponentMeta<typeof TextData>;

const Template: ComponentStory<typeof TextData> = (args)=>(
    <TextData {...args} />
)

export const TempData = Template.bind({});

TempData.args={
    icon: <Calender/>,
    label:"Term Cap",
    value: "12 Months",
}




import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import seederLogo from "./../../../images/seederLogo/logo/icon+name.svg"
import Logo from '.'


export default{
    title:'Atoms/Icon',
    conponent: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args)=>
<Logo{...args}/>

export const CompanyLogo = Template.bind({});

CompanyLogo.args={
    src:seederLogo
}








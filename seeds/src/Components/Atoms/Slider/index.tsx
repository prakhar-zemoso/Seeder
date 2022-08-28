import React from 'react';
import Slider from '@mui/material/Slider'
import {styled} from '@mui/material';
import { border } from '@mui/system';
import { Box } from '@mui/material';



const ModifiedSlider = styled(Slider)({

    color: '#6C5DD3',
    borderRadius: '8px',
    height:'8px',
    width:"104px",

    '& .MuiSlider-track':{
        border:'none'
    },

    '& .MuiSlider-rail':{
        opacity:0.5,
        background:"#3A3A3D"
    },
    '& .MuiSlider-thumb':{
        width:'23px',
        height:'23px',
        backgroundColor:"#6C5DD3",
        border:'3px solid #B4A9FF',
        borderRadius: "8px",
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible':{
            boxShadow:'inherit'
        },
        '&:before':{
            display:"none"
        }
    }  
});

interface SliderProps{
    onChange: (value:number)=> string;
    value: number;
    maxValue : number;
    onSliderChange:(e:any)=> void | undefined;
}

const CustomizedSlider:React.FC<SliderProps> = ({value,maxValue,onSliderChange, onChange}:SliderProps)=>{

    return(
<Box>
    <Box sx = {{m:3}}/>
    <ModifiedSlider
    value={value}
    defaultValue={0.0}
    getAriaValueText= {onChange}
    max ={maxValue}
    onChange={onSliderChange}/>
    <Box sx={{m :3}}/>
</Box>
);

};


export default CustomizedSlider;
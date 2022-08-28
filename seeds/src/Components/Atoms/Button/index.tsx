import React from 'react';
import {Button, ButtonProps} from '@mui/material';

interface ButtonType extends ButtonProps {
    childern:React.ReactNode;
    variant?: 'contained'| "outlined";
    size?: 'medium'|"large";
    sx?: React.CSSProperties;
    onClick?: () => void;
    startIcon?: React.ReactNode;
    disabled?: boolean;
    

}

const ButtonComponent:React.FC<ButtonType> = ({childern,variant,size,sx,onClick,startIcon,disabled}:ButtonType) => {
  return (
    <Button disableRipple variant={variant} size={size} sx=
    {{...sx, 
      '&:hover':
       {
      backgroundColor:
        variant === 'contained' ? 'primaryPurple500.main' : 'primaryPurple400.main'
    }
  }} 
    onClick={onClick} startIcon={startIcon} disabled={disabled} >{childern}</Button>
  )
}

export default ButtonComponent;
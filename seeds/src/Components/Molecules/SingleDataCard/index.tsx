import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'
import theme from '../../../theme';

interface DataProps{
    label: string;
    value: string;
    icon: React.ReactNode
}

const TextData: React.FC<DataProps> = ({label,value,icon}:DataProps)=>{
    return(
        <>
        <Box

        sx={{
            width: theme.spacing(51),
            height: theme.spacing(42),
            backgroundColor:"#201F24"
        }}
        
        >
            <Box
            sx={{
                height: theme.spacing(20),
                width: theme.spacing(20),
                backgroundColor:  "#28272B",    
            }}
            >
                <Box
                sx={{
                    width: '30px',
                    height: '30.83',
                    paddingLeft: '25px',
                    paddingTop:'25px',
                    paddingBottom:'23.33'
                }}
                >
                    {icon}

                </Box>

            </Box>
        <Box
        sx={{
            marginTop:'24px',
            display: 'flex',
            
        }}>
            <Typography variant='body1' sx={{color:"#C9C8CC"}}>
                {label}
            </Typography>
            
        </Box>
        <Box sx={{marginTop:"8px"}}>
            <Typography variant='h1' sx={{color:"#E8E7F0"}}>
                {value}
            </Typography>

        </Box>
        </Box>
        </>
    )
}

export default TextData;
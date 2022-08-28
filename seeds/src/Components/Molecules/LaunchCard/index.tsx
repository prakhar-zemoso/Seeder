import { Box, Grid, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react'
import { Button } from 'theme-ui';
import theme from '../../../theme';

interface LaunchCardProps {
    title:string;
    discription: React.ReactNode;
    label:string;
    disabled? : boolean;
    onClicked?: ()=>void;
}

const LaunchCard:React.FC<LaunchCardProps> = ({title,discription,label,disabled,onClicked}:LaunchCardProps)=>{
    return(
        <>
        <Grid sx={{
            width: theme.spacing(85),
            height: theme.spacing(68.75),
            background:theme.palette.backgroundElevation1.main,
            borderRadius: theme.spacing(3)
            }}
        >
            <Grid
            item
            sx={{
                paddingTop: theme.spacing(8),
                paddingLeft: theme.spacing(8),
                color:theme.palette.textColor.main,
            }}
            >
                <Box sx={{
                    width: theme.spacing(48)
                }}>
                    <Typography variant='h1'>{title}</Typography>
                </Box>
                </Grid>
                <Grid
                item
                sx={{
                    paddingTop:theme.spacing(4),
                    paddingLeft: theme.spacing(8),
                    width: theme.spacing(79),
                    color:"#A5A5A6"
                }}
                >
                    {discription}
                </Grid>

                <Grid
                item
                sx={{
                    paddingTop: theme.spacing(6),
                    paddingLeft: theme.spacing(8)
                }}
                >
                    <Button
                    variant='contained'
                    disabled={disabled}
                    onClick={onClicked}
                    sx={{
                        width: theme.spacing(69),
                        height: theme.spacing(14.75),
                        background: theme.palette.primaryPurple500.main,
                        color: '#E8E8E9',
                        borderRadius: theme.spacing(3)
                    }}
                    >
                        {label}
                    </Button>
                </Grid>
        </Grid>
        </>
    )
}

export default LaunchCard;

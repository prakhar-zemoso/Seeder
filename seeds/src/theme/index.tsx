import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import React from 'react';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    mainBackground: PaletteColorOptions;
    backgroundElevation1:PaletteColorOptions;
    primaryPurple600:PaletteColorOptions;
    primaryPurple500:PaletteColorOptions;
    grey100:PaletteColorOptions;
    primaryPurple400:PaletteColorOptions;
    backgroundElevation2:PaletteColorOptions;
    textColor:PaletteColorOptions;

    
  }

  interface Palette {
    mainBackground: PaletteColor;
    backgroundElevation1:PaletteColor;
    primaryPurple600:PaletteColor;
    primaryPurple500:PaletteColor;
    grey100:PaletteColor;
    primaryPurple400:PaletteColor;
    backgroundElevation2:PaletteColor;
    textColor:PaletteColor

  }

  interface TypographyVariants {
    title: React.CSSProperties;
    
  }

  interface TypographyVariantsOptions {
    title: React.CSSProperties;
    
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    mainBackground: true;
    backgroundElevation1:true;
    primaryPurple600:true;
    grey100:true;
    primaryPurple400:true;
    backgroundElevation2:true;
    textColor:true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    mainBackground: true;
    backgroundElevation1:true;
    primaryPurple600:true;
    grey100:true;
    primaryPurple400:true;
    backgroundElevation2:true;
    textColor:true
    
  
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    mainBackground: {
      main: '#040407'
    },
    backgroundElevation1:{
        main:"#201F24"
    },
    textColor:{
      main:"#E8E7F0"
    
    },
    primaryPurple600:{
        main:"#393552"
    },
    primaryPurple500:{
        main:"#6C5DD3"
    },
    grey100:{
        main:"#262529"
    },
    primaryPurple400:{
        main:"#B4A9FF"
    },
    backgroundElevation2:{
        main:"#2D2D30"
    },

    background: {
      default:
        'linear-gradient(85.82deg, #6B4DE0 -10.12%, #9C42E3 53.21%, #C339E5 106.12%)'
    }
  },

  typography: {
    title: {
      fontSize: '36px',
      lineHeight: '22px',
      fontWeight: '700',
      textTransform: 'none',
      fontFamily: ['Gilroy', 'sans-serif'].join(',')
    },
    h1: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: '700',
      textTransform: 'none',
      fontFamily: ['Gilroy', 'sans-serif'].join(',')
    },
    h2: {
      fontSize: '24px',
      lineHeight: '29.4px',
       fontWeight: '600',
      textTransform: 'none',
      fontFamily: ['Gilroy', 'sans-serif'].join(',')
    },
    body1:{
        fontSize:"16px",
        fontWeight:500,
        lineHeight: "22.4px",
        textTransform:"none"
    },

    body2:{
        fontSize:"14px",
        fontWeight:600,
        lineHeight: "17.14px",
        textTransform:"none"
    },

    caption:{
        fontSize:"12px",
        fontWeight:500,
        lineHeight: "14.64px",
        textTransform:"none"
    },

    button:{
        fontSize:"16px",
        fontWeight:600,
        lineHeight: "19px",
        textTransform:"none"
    }
    
   

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#201F24'
        }
      }
    }
  }
});



export default theme;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import BasicTable from './myApp';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BasicTable/>
    </div>
    </ThemeProvider>
  );
}



export default App;

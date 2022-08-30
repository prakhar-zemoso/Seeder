import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from 'theme-ui';
import Grid from '@mui/material/Grid';
import { makeStyles }  from '@material-ui/core/styles';
import { minHeight } from '@mui/system';


function createData(
 contract: string,
  Status: string,
  type: string,
  Perpayment: string,
  Totalfinanced: string,
  Totalavailable: string,
) {
  return {contract, Status, type, Perpayment,Totalfinanced,Totalavailable};
}

const rows = [
    createData('Frozen yoghurt', 'Available', '6.0', '24', '4.0','da'),
    createData('Ice cream sandwich', 'Available', '9.0', '37', '4.3','ad'),
    createData('Eclair', 'Available', '16.0', '24', '6.0','ads'),
    createData('Eclair', 'Available', '16.0', '24', '6.0','ads'),
    createData('Eclair', 'Available', '16.0', '24', '6.0','ads'),
    createData('Frozen yoghurt', 'Available', '6.0', '24', '4.0','da'),
    createData('Ice cream sandwich', 'Available', '9.0', '37', '4.3','ad'),
    createData('Frozen yoghurt', 'Available', '6.0', '24', '4.0','da'),
    createData('Ice cream sandwich', 'Available', '9.0', '37', '4.3','ad'),
  ];

  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '996px',
        [`& .${tableCellClasses.root}`]: {
          borderBottom: "none"
        }
        }} >
          <TableHead
          sx={{background:'#262529',
          }}>
            <TableRow>
              <TableCell
              sx={{
                width:'166px',
                height:'34px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }}
               align='left'>Due Date</TableCell>
              <TableCell
              sx={{
                width:'166px',
                height:'36px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }} align='left'>Status</TableCell>
              <TableCell
              sx={{
                width:'166px',
                height:'36px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }} align='left'>Type</TableCell>
              <TableCell
              sx={{
                width:'166px',
                height:'36px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }} align='left'>Per Payment</TableCell>
              <TableCell 
              sx={{
                width:'166px',
                height:'36px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }}align='left'>Total financed</TableCell>
               <TableCell 
              sx={{
                width:'166px',
                height:'36px',
                paddingTop:'12px',
                paddingRight:'20px',
                paddingLeft:'20px',
                paddingBottom:'12px',
                color:'#A5A5A6'

              }}align='left'>Total Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
          sx={{
            backgroundColor:'#28272B'
          }}>
          {rows.map((row) => (
            <TableRow
              key={row.contract}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: '#E8E7F0'}}
              align="left">{row.contract}</TableCell>
              <TableCell component="th" scope="row">
                <Grid sx={{
                backgroundColor: '#2D2D30',
                borderRadius: '4px',
                Height:'25px',
                width:'78px',
                color:"#C9C8CC",
                paddingTop: '4px',
                paddingLeft:'8px',
                paddingRight:'8px',
                paddingBottom:'4px',
                gap:'10px',
                
              }}>{row.Status}</Grid></TableCell>
              <TableCell sx={{
                color:'#A5A5A6'
              }} align="left">{row.type}</TableCell>
              <TableCell 
              sx={{
                color:'#A5A5A6'
              }}
              align="left">{row.Perpayment}</TableCell>
              <TableCell 
              sx={{
                color:'#A5A5A6'
              }}
              align="left">{row.Totalfinanced}</TableCell>
              <TableCell 
              sx={{
                color:'#A5A5A6'
              }}align="left">{row.Totalavailable}</TableCell>
            </TableRow>
          ))}
 </TableBody>
          </Table>
    </TableContainer>
  );
}


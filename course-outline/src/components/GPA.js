import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(grade, mark) {
  return { grade,mark };
}

const rows = [
  createData('A+', 'T>=95.0%'),
  createData('A', '90.0<=T<95.0%'),
  createData('A-', '85.0<=T<90.0%'),
  createData('B+', '80.0<=T<85.0%'),
  createData('B', '75.0<=T<80.0%'),
  createData('B-', '70.0<=T<75.0%'),
  createData('C+', '65.0<=T<70.0%'),
  createData('C', '60.0<=T<65.0%'),
  createData('C-', '56.0<=T<60.0%'),
  createData('D+', '53.0<=T<56.0%'),
  createData('D', '50.0<=T<53.0%'),
  createData('F', 'T<50.0%')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Letter Grade</TableCell>
            <TableCell align="right">Total Mark (T)</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
          
              <TableCell align="left">{row.grade}</TableCell>
              <TableCell align="right">{row.mark}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

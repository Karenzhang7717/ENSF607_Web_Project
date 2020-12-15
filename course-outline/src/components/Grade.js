

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(component, outcomes, weight) {
  return { component, outcomes, weight };
}

const rows = [
  createData('Assignment', 'aaaaaa', 25),
  createData('Quiz','bbbb', 25),
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div>
            <h1>3. Final Grade Determination</h1>
                </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell>Component</StyledTableCell>
            <StyledTableCell align="right">Learning Outcomes</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
         
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.component}</StyledTableCell>
              <StyledTableCell align="right">{row.outcomes}</StyledTableCell>
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
           
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { backendUrl } from "../../urlConfig.js";

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Card from '../../components/Dashboard/Card/Card.js';
import CardHeader from '../../components/Dashboard/Card/CardHeader.js';
import CardBody from '../../components/Dashboard/Card/CardBody.js';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import axios from "axios";


const useStyles = makeStyles(styles);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
const useStyles2 = makeStyles({
  // table: {
  //   minWidth: 500,
  // },
});



function TablePaginationActions(props) {

  const classes1 = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes1.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}



export default function ViewEmployees() {
      const classes = useStyles();
      const classes2 = useStyles2();

      const [data, setData] = useState([]);
      const getdata =() =>{
        const token = window.localStorage.getItem('token');
        
          axios.get(`${backendUrl}/admin/viewadmins`,{
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
          }).then(res =>{
            const results =  res.data.result;
            console.log(results);
            setData(results);
          })
          // .then(data =>{
          //   // console.log(data.message);
          //   // const s= res.data.result[0];
          //   // console.log(s);
          // })
        
      }
      React.useEffect(()=>{
        getdata();
      },[]);

      const columns = [
        { id: 'AdminId', label: 'Admin Id'},
        { id: 'Name', label: 'Full Name'},
        { id: 'Email', label: 'Email'},];
      const rows = data ? ( data.map((d) => [ d.adminid, d.firstname, d.lastname,d.email] )
                ) : 
                (
                  ['No data to show']
                )
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

      const handleChangePage = (event, newPage) => {
          setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
      };

  return (
    <Grid>
    <Card>
      <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Registered Admin Accounts</h4>
      </CardHeader>
      <CardBody>
      <Table  aria-label="custom pagination table">
      <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.adminid}>
              {/* <TableCell component="th" scope="row">
                {row.adminid}
              </TableCell> */}
              <TableCell align="left">
                {row.adminid}
              </TableCell>
              <TableCell align="left">
                {row.firstname}  {row.lastname}
              </TableCell>
              <TableCell align="left">
                {row.email}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
        
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </CardBody>
      </Card>
    </Grid>
  );
}

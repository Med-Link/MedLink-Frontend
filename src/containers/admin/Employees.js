/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import AddNewAdmin from "./AddNewAdmin"

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import axios from "axios";

const useStyles = makeStyles(styles);

export default function Employees() {

  const classes = useStyles();

  // const { data: alladmins } = useFetch(
	// 	'http://localhost:4000/api/admin/viewprofile'
	// );
	// console.log(alladmins);
  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get('http://localhost:4000/api/admin/viewadmins')
      .then(res =>{
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

  return (
    <div>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Registered Admin Accounts</h4>
              </CardHeader>
              <CardBody>
              <div>
                <table>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                  
                
                {data ? (
                  data.map((post) => 
                  <tr>
                  <td>
                  {post.adminid}
                  </td>
                  <td>
                  {post.firstname}
                  </td>
                  <td>
                  {post.lastname}
                  </td>
                  <td>
                  {post.email}
                  </td>
                </tr> )
                  ) : 
                  (
                    <p>Loading..</p>
                  )
                }
                </table>
              </div>
               
              {/* <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name"]}
                  tableData={[
                    ["Admin2", "Sandali Perera"],
                    ["Admin3", "Akila De Silva"],
                    ["Admin4", "Piyumi Senarath"],
                  ]} 
                /> */}
              </CardBody>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <AddNewAdmin/>
        </GridItem>
      </GridContainer>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { createMuiTheme } from '@material-ui/core/styles';
import DateRange from "@material-ui/icons/DateRange";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import PhotoSteps from "../../components/pharmacy/PhotoSteps"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Typography from '../../components/mainLandingPage/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Form from './forms/AddCsv';
import AddNewMed from './forms/AddNewMed';

const useStyles = makeStyles(styles);


export default function OrderProcess() {
  const classes = useStyles();



  const [openAccept, setOpenAccept] = React.useState(false);

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  const [openAddMeds, setOpenAddMeds] = React.useState(false);

  const handleClickOpenAddMeds = () => {
    setOpenAddMeds(true);
  };

  const handleCloseAddMeds = () => {
    setOpenAddMeds(false);
  };

  return (
    <div>
      <GridContainer>

        <GridItem xs={12} >
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Update Stock",
                // tabIcon: <AddShoppingCartIcon/>,
                tabContent: (
                  <Card>
                    <CardBody>
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Panadol"
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                      <Table
                        tableHeaderColor="secondary"
                        tableHead={["Med ID", "Batch ID", "Med Name", "Current Qty", "Unit Price(Rs.)", "Add to Stock", "Remove From Stock"]}
                        tableData={[
                          ["M001",
                            "B456",
                            "Panadol",
                            "100",
                            "1.00",
                            <div>
                              <TextField id="standard-basic" label="Qty" size='small' />
                              <Button variant="contained" color="primary" round >Add <AddCircleOutlineIcon /></Button>

                            </div>,

                            <div>
                              <TextField id="standard-basic" label="Qty" size='small' />
                              <Button variant="contained" color="primary" round>Remove <RemoveCircleOutlineOutlinedIcon /></Button>


                            </div>
                          ],
                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },

              {
                tabName: "View Stock",
                // tabIcon: AddShoppingCartIcon,
                tabContent: (
                  <Card>
                    <CardBody>
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Panadol"
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                      <Table
                        tableHeaderColor="secondary"
                        tableHead={["Medicine ID", "Batch ID", "Medicine Name", "Current Qty", "Unit Price(Rs.)"]}
                        tableData={[
                          ["M001", "B654", "Panadol", "100", 2],
                          ["M002", "B624", "Panadene", "50", 6],
                          ["M003", "B631", "Vitamin-C", "200", 4],

                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },



            ]}
          />
        </GridItem>
      </GridContainer>

      {/* Update Stock -csv */}
<GridContainer>
      <GridContainer xs={12} md={6} sm={6}>
        <GridItem  md={6} sm={12}>
          <Card >
            <CardBody color="primary" stats icon>
              {/* <div> */}
              <GridContainer>
                <GridItem>
                  <Form />
                </GridItem>
                <GridItem>
                  <Button variant="outlined" color="primary" onClick={handleClickOpenAccept}>
                    Save
                  </Button>
                  <Dialog
                    open={openAccept}
                    onClose={handleCloseAccept}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                  <DialogTitle id="alert-dialog-title">{"Do you want to Save this to the stock"}</DialogTitle>

                  <DialogActions>
                    <Button onClick={handleCloseAccept} color="secondary">
                      Cancle
                    </Button>
                    <Button onClick={handleCloseAccept} color="primary" autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
            
                {/* <Typography color="primary" variant="h6"> */}
              {/* </GridItem> */}
              
              
              {/* </Typography> */}

              {/* </div> */}
              {/* <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />, */}



            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

        


        {/* Add New Batch */}

<GridContainer xs={12} md={6} sm={6}>
        <GridItem  >
          <Card >
            <CardBody color="primary" stats icon>

              <div>


                <Typography variant="body1">
                  Add New Medicine

                  <Dialog
                    open={openAddMeds}
                    onClose={handleCloseAddMeds}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >

                    <DialogContent dividers><AddNewMed /></DialogContent>



                  </Dialog>
                  <br></br>
                  <Button variant="outlined" color="primary" onClick={handleClickOpenAddMeds}>
                    Add Medicine
                  </Button>
                </Typography>

              </div>
              {/* <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />, */}



            </CardBody>
          </Card>

        </GridItem>
      </GridContainer>
      </GridContainer>
    
</div>
  );
}

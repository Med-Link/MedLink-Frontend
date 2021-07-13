import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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



const useStyles = makeStyles(styles);


export default function OrderProcess() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAccept, setOpenAccept] = React.useState(false);

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>


          <Card>
            <CardBody color="primary" stats icon>
            
              <div className={classes.stats}>
                <h1>Michelle Fernando - 0768757722</h1>
              </div>
              <div color="primary" className={classes.stats} style={{fontSize:20}} >
                <p>I Need this medicine except Codein Zulphet</p>
              </div>
              
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                36 mins Ago
              </div>
            </CardFooter>
          </Card>
          <PhotoSteps />
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Find Medicine from Stock",
                // tabIcon: <AddShoppingCartIcon/>,
                tabContent: (
                  <Card>
                    <CardBody>
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Penadol"
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                      <Table
                        tableHeaderColor="secondary"
                        tableHead={["Med Id", "Batch Id", "Med Name", "Current Qty", "Unit Price(Rs.)", "Add to cart", "Confirm"]}
                        tableData={[
                          ["001",
                            "b456",
                            "Panadol",
                            "100",
                            "1.00",
                            <TextField id="standard-basic" label="Qty" size='small' />,
                            <Button color="primary" round>Add</Button>],
                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },

              {
                tabName: "Medicine Cart",
                // tabIcon: AddShoppingCartIcon,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="secondary"
                        tableHead={["Med Id", "Med Name", "Qty", "Price"]}
                        tableData={[
                          ["001", "Panadol", "10", 20],
                          ["001", "Amoxiline", "10", 10],
                          ["", "Total", "", "30"],

                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />

          <Card>
            <CardBody color="primary" stats icon>

              <div><Typography color="primary" variant="h6">Accept Order 
              <Button variant="outlined" color="primary" onClick={handleClickOpenAccept}>
                  Accept
                </Button>
                <Dialog
                  open={openAccept}
                  onClose={handleCloseAccept}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Do you want to accept this order ?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Once you accept this order you can't undo it. Do you want to send the confirmation to your customer?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseAccept} color="secondary">
                      Cancle
                    </Button>
                    <Button onClick={handleCloseAccept} color="primary" autoFocus>
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
              
              </Typography></div>
              {/* <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />, */}

              <div> <Typography color="secondary" variant="h6"> Reject Order  <Button id="reject" variant="outlined" color="secondary" onClick={handleClickOpen}>Reject</Button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Reason to Reject Order</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {"Reasons To reject orders:"}<br></br>

                      {"1. Prescription is not clear. Please re-send it again"}<br></br>
                      {"2. This is not a valid prescription"}<br></br>
                      {"3. Prescription is too old."}<br></br>

                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="State the reason"
                      type="email"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
              </Typography>
              </div>

              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}

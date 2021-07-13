import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";
import PhotoSteps from "../../components/admin/dialogbox/PhotoSteps";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Pharmacy Registration Requests</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
          <Table
              tableHeaderColor="primary"
              tableHead={["Pharmacy Name", "Date and Time", "Mobile Number",  "Documents"]}
              tableData={[
                ["MO2001","2021-06-05 13:54","0759865522",
                <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink)}
                    href="closeddealsdetails/"
                  >
                  <Button color="primary" round>View</Button></Link>,
                ],
                ["MO2002","2021-06-05 14:12","0712865562",<Button color="primary" round onClick={handleClickOpen}>View</Button>],
                ["MO2003","2021-06-05 14:21","0759865544", <Button color="primary" round onClick={handleClickOpen}>View</Button> ],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Documents
        </DialogTitle>
        <DialogContent dividers>
          <PhotoSteps/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
}

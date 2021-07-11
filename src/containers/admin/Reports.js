import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Button from "../../components/Dashboard/CustomButtons/Button.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";

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
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function UpgradeToPro() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              Monthly Income of MedLink
            </h4>
            <p className={classes.cardCategoryWhite}>
              June
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Expences</th>
                    <th className={classes.center}>Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Subscriptions</td>
                    <td className={classes.center}>-</td>
                    <td className={classes.center}>568200</td>
                  </tr>
                  <tr>
                    <td>Advertiesments</td>
                    <td className={classes.center}>200000</td>
                    <td className={classes.center}>-</td>
                  </tr>
                  <tr>
                    <td>Hosting Fee</td>
                    <td className={classes.center}>7578.23</td>
                    <td className={classes.center}>-</td>
                  </tr>
                  <tr>
                    <td>Login, Register, Pricing, Lock Pages</td>
                    <td className={classes.center}>
                    </td>
                    <td className={classes.center}>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ReactTables, ReactVectorMap, ReactSweetAlert, Wizard,
                      Validation, ReactBigCalendar etc...
                    </td>
                    <td className={classes.center}>
                    </td>
                    <td className={classes.center}>
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Sidebar</td>
                    <td className={classes.center}>
                    </td>
                    <td className={classes.center}>
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td className={classes.center}>90000</td>
                    <td className={classes.center}>-</td>
                  </tr>
                  <tr>
                    <td>Electricity</td>
                    <td className={classes.center}>7853</td>
                    <td className={classes.center}>-</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round color="info">
                        View Full Report
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button
                        round
                        color="primary"
                      >
                        Download
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

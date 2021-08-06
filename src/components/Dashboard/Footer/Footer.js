/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../../assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        {/* <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/" className={classes.block}>
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
              href="/adminsignin" className={classes.block}>
                Login
              </a>
            </ListItem>
             
            <ListItem className={classes.inlineBlock}>
              <Link to="/{user.role}" className={classes.block}>
                Dashboard
              </Link>
            </ListItem>
          </List>
        </div> */}
        <p className={classes.center}>
          <span>
            <a
              href="/"
              target="_blank"
              className={classes.a}
            >
             
             MedLink &copy; pvt.Ltd
             {" "}
             {1900 + new Date().getYear()}{" "}
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

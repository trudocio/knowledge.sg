// External Imports
import React from "react";
import sections from "../components/KnowledgeSharing/glossary.js";
// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import SwipeableViews from "react-swipeable-views";
const useStyles = makeStyles((theme) => ({
  tab: {
    borderRight: "1px solid #000000",
    borderLeft: "1px solid #000000",
    fontFamily: "Bree Serif",
    fontStyle: "normal",
    fontWeight: "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "14px",
    },
    fontSize: "18px",
    color: "#292828",
  },
  activeTab: {
    color: "#ffffff",
    backgroundColor: "#225A41",
  },
  tabLeft: {
    borderLeft: "unset",
    width: "200px",
  },
  tabRight: {
    borderRight: "unset",
    width: "200px",
  },
  line: {
    width: "80%",
    position: "relative",
    top: "-5px",
    border: "1px solid #000000;",
  },
  line2: {
    width: "80%",
    position: "relative",
    top: "-15px",
    border: "1px solid #292828;",
  },
  tabsPaper: {
    marginTop: "20px",
  },
}));

export default function Knowledge(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const getTabClass = (isActive) => {
    return isActive ? clsx(classes.tab, classes.activeTab) : classes.tab;
  };
  return (
    <React.Fragment>
      <Container>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Paper className={classes.tabsPaper} square elevation={0}>
            <Tabs
              value={value}
              indicatorColor={"#ffffff"}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="About us options"
            >
              <Tab
                className={clsx(getTabClass(value === 0), classes.tabLeft)}
                label="COAL GLOSSARY"
              />
              <Tab
                className={getTabClass(value === 1)}
                label="SHIPPING TERMS"
              />
              <Tab className={getTabClass(value === 2)} label="SWIFT FIELDS" />
            </Tabs>
          </Paper>
          <hr className={classes.line} />
          <hr className={classes.line2} />
        </Grid>
      </Container>
      <Typography
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "45px",
          color: "#000000",
          fontSize: 17,
          marginLeft: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        CHARTERING ABBREVATIONS- TERMS & DEFINITIONS
      </Typography>
      <Container>
        <Divider
          style={{ width: "90%", position: "relative", alignSelf: "center" }}
        />
        <div
          style={{
            display: "flex",
            width: "811px",
            flex: 1,
            justifyContent: "space-around",
            marginLeft: "50%",
            marginTop: "2%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {sections.map((item, i) => {
            return (
              <div onClick={() => window.location.replace(`#${item.title}`)}>
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
        <Divider
          style={{ width: "90%", position: "relative", alignSelf: "center" }}
        />
      </Container>
    </React.Fragment>
  );
}

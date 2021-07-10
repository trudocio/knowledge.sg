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
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import { KnowledgeSharing, CoalGlossary, SwiftField } from "../components";
import { TabPanel } from "../UI";
const useStyles = makeStyles((theme) => ({
  tab: {
    borderRight: "1px solid #000000",
    borderLeft: "1px solid #000000",
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
  },
  tabLeft: {
    borderLeft: "unset",
    width: "200px",
    fontFamily: "Poppins",
  },
  tabRight: {
    borderRight: "unset",
    width: "200px",
  },
  line: {
    width: "80%",
    position: "relative",
    height:"1px",
    backgroundColor:"#424040",
    top: "-5px",
    // border: "1px solid #424040;",
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
  const handleChangeIndex = (index) => {
    setValue(index);
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
        </Grid>
      </Container>
      {value === 1 && (
        <div>
          <Typography
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: "45px",
              color: "#000000",
              fontFamily: "Poppins",
              fontSize: 17,
              marginLeft: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            CHARTERING ABBREVATIONS- TERMS & DEFINITIONS
          </Typography>
          <Container>
            <Divider
              style={{
                width: "90%",
                position: "relative",
                alignSelf: "center",
              }}
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
                  <div
                    onClick={() => window.location.replace(`#${item.title}`)}
                  >
                    <span
                      style={{
                        color: "#225A41",
                        fontFamily: "Poppins",
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
              style={{
                width: "90%",
                position: "relative",
                alignSelf: "center",
              }}
            />
          </Container>
        </div>
      )}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={0} index={0} dir={theme.direction}>
          <CoalGlossary />
        </TabPanel>
        <TabPanel value={1} index={1} dir={theme.direction}>
          <KnowledgeSharing />
        </TabPanel>
        <TabPanel value={2} index={2} dir={theme.direction}>
          <SwiftField />
        </TabPanel>
      </SwipeableViews>
    </React.Fragment>
  );
}

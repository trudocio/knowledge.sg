// External Imports
import React from "react";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";

// Internal Imports
import { TabPanel } from "../../UI";
import { Business, Presence, Management, Strengths } from "./AboutUsTabs/index";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "50px",
    marginBottom: "20px"
  },
  tabsPaper: {
    width: "100%",
    borderBottom: "3px solid #292828"
  },
  tab: {
    borderRight: "1px solid #000000",
    borderLeft: "1px solid #000000",
    fontFamily: "Bree Serif",
    fontStyle: "normal",
    fontWeight: "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "14px"
    },
    fontSize: "18px",
    color: "#292828"
  },
  activeTab: {
    color: "#fff",
    backgroundColor: "#225A41"
  },
  tabLeft: {
    borderLeft: "unset"
  },
  tabRight: {
    borderRight: "unset"
  },
  line: {
    width: "100%",
    position: "relative",
    top: "-5px",
    border: "1px solid #292828;"
  }
}));

export default function AboutUsExtended(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const getTabClass = isActive => {
    return isActive ? clsx(classes.tab, classes.activeTab) : classes.tab;
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Container>
          <Grid
            // className={classes.footerGrid}
            container
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Paper className={classes.tabsPaper} square elevation={0}>
              <Tabs
                value={value}
                indicatorColor={"#fff"}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="About us options"
              >
                <Tab
                  className={clsx(getTabClass(value === 0), classes.tabLeft)}
                  label="OUR PRESENCE"
                />
                <Tab
                  className={getTabClass(value === 1)}
                  label="OUR BUSINESS"
                />
                <Tab
                  className={getTabClass(value === 2)}
                  label="OUR MANAGEMENT"
                />
                <Tab
                  className={clsx(getTabClass(value === 3), classes.tabRight)}
                  label="OUR STRENGTHS"
                />
              </Tabs>
            </Paper>
            <hr className={classes.line} />
          </Grid>
        </Container>
        <Container>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Presence />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Business />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Management />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <Strengths />
            </TabPanel>
          </SwipeableViews>
        </Container>
      </Box>
    </React.Fragment>
  );
}

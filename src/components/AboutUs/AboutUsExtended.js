// External Imports
import React from "react";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  useMediaQuery
} from "@material-ui/core";

// Internal Imports
import { TabPanel } from "../../UI";
import { Business, Presence, Management, Strengths } from "./AboutUsTabs/index";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "50px",
    marginBottom: "20px"
  },
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    boxShadow: "none",
    border: 0
    // "&:not(:last-child)": {
    //   borderBottom: 0
    // },
    // "&:before": {
    //   display: "none",
    // }
  },
  accordian: {
    borderBottom: "1.5px solid rgba(0, 0, 0)"
  },
  heading: {
    fontSize: 12,
    color: "#292828",
    fontFamily: "Bree Serif",
    fontStyle: "normal",
    fontWeight: "400"
  },
  activeHeading: {
    fontSize: 12,
    color: "#225A41",
    fontFamily: "Bree Serif",
    fontStyle: "normal",
    fontWeight: "400"
  },
  tabsPaper: {
    width: "100%",
    borderBottom: "3px solid #292828"
  },
  expand_icon: {
    color: "#225A41"
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
    color: "#ffffff",
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
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const getTabClass = isActive => {
    return isActive ? clsx(classes.tab, classes.activeTab) : classes.tab;
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.container}>
        {screenSmall ? (
          <div className={classes.root}>
            <Accordion
              className={classes.accordian}
              expanded={expanded === "panel1"}
              onChange={handleExpand("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expand_icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className={
                    expanded === "panel1"
                      ? classes.activeHeading
                      : classes.heading
                  }
                >
                  OUR PRESENCE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Presence />
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={classes.accordian}
              expanded={expanded === "panel2"}
              onChange={handleExpand("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expand_icon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  className={
                    expanded === "panel2"
                      ? classes.activeHeading
                      : classes.heading
                  }
                >
                  OUR BUSINESS
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Business />
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={classes.accordian}
              expanded={expanded === "panel3"}
              onChange={handleExpand("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expand_icon}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  className={
                    expanded === "panel3"
                      ? classes.activeHeading
                      : classes.heading
                  }
                >
                  OUR MANAGEMENT
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Management />
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={classes.accordian}
              expanded={expanded === "panel4"}
              onChange={handleExpand("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expand_icon}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  className={
                    expanded === "panel4"
                      ? classes.activeHeading
                      : classes.heading
                  }
                >
                  OUR STRENGTHS
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Strengths />
              </AccordionDetails>
            </Accordion>
          </div>
        ) : (
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
        )}
        {!screenSmall && (
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
        )}
      </Box>
    </React.Fragment>
  );
}

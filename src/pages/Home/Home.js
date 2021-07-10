// External Imports
import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useScrollTrigger,
  Zoom,
  Fab,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import Knowledge from "../../components/Knowledge.js";
// Internal Imports
import { NavBar, Footer } from "../../layout";
import {
  AboutUs,
  AboutUsExtended,
  Products,
  Shipping,
  ContactUs,
  Recognitions,
  Csr,
  KnowledgeSharing,
} from "../../components";
import { TabPanel } from "../../UI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabRoot: {
    backgroundColor: "transparent",
    boxShadow: "unset",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#225A41",
  },
  fabIcon: {
    color: "#225A41",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 10,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollToTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setText(event);
  };

  return (
    <React.Fragment>
      <NavBar value={value} onChange={handleChange} />
      {value === 6 && <Knowledge></Knowledge>}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <AboutUs>
            <AboutUsExtended />
          </AboutUs>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Products />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Shipping />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Csr />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          {/* <Csr /> */}
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Recognitions />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          {/* <KnowledgeSharing /> */}
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <ContactUs />
        </TabPanel>
      </SwipeableViews>
      <ScrollTop {...props}>
        <Fab
          className={classes.fabRoot}
          color="default"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp className={classes.fabIcon} fontSize="large" />
        </Fab>
      </ScrollTop>
      {value === 6 && (
        <div style={{ height: "20px", backgroundColor: "#ffffff" }}></div>
      )}
      <Footer />
    </React.Fragment>
  );
}

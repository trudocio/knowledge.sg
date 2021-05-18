// External Imports
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import CloseIcon from '@material-ui/icons/Close';
// Material Imports
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  useScrollTrigger,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Hidden,
  Drawer
} from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
// Image Imports
import logo from "../assets/logo.png";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  rootList: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    position: "absolute",
    top: "8px",
    left: "10px"
  },
  toolbar: {
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: "'Bree Serif', serif",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "48px",
    /* identical to box height */
    letterSpacing: "0.2em",
    color: "#292828",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "18px"
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "24px"
    }
  },
  tab: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.only("md")]: {
      width: "100%"
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: "100%"
    }
  },
  tabLabels: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "25px",
    /* identical to box height */
    letterSpacing: "0.08em",
    color: "#000000",
    opacity: "unset",
    minWidth: "100px",
    fontSize: "16px"
  },
  activeTab: {
    color: "#225A41"
  },
  line: {
    border: "1px solid #000000",
    width: "85%"
  },
  lineTop: {
    position: "relative",
    top: "50px",
    zIndex: "-1"
  },
  lineBottom: {
    position: "relative",
    bottom: "50px",
    zIndex: "-1"
  },
  logo: {
    width: "290px",
    height: "137.94px"
  },
  inline: {
    fontSize: "15px",
    color: "#292828",
    textAlign: "center",
    fontFamily: "'Poppins', serif"
    // marginLeft: theme.spacing(4)
  },
  inlineContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  logoSmall: {
    [theme.breakpoints.only("xs")]: {
      paddingTop: theme.spacing(2)
    },
    width: "290px",
    height: "137.94px"
  },
  logoDrawer: {
    [theme.breakpoints.only("xs")]: {
      paddingTop: theme.spacing(2)
    },
    width: "95px",
    height: "45px"
  }
}));

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { children, value, index, ...other } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const screenMedium = useMediaQuery(theme.breakpoints.only("md"));
  const getTabClass = isActive => {
    return isActive
      ? clsx(classes.tabLabels, classes.activeTab)
      : classes.tabLabels;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          className={classes.logoDrawer}
          src={logo}
          alt="Knowledge Global Singapore Logo"
        />
      </Box>
      <List>
        {[
          "ABOUT US",
          "PRODUCTS",
          "SHIPPING",
          "CSR",
          "RECOGNITIONS",
          "KNOWLEDGE SHARING",
          "CONTACT US"
        ].map((text, index) => (
          <ListItem
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center"
            }}
            key={text}
            onClick={() => {
              other.onChange(index);
              handleClick();
            }}
          >
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    align="center"
                    component="span"
                    className={classes.inline}
                  >
                    {text}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <React.Fragment>
      <div className={classes.root} id="back-to-top-anchor">
        <Hidden xsDown implementation="css">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h5" align="center">
              KNOWLEDGE INTERNATIONAL STRATEGY SYSTEMS PTE. LTD.
            </Typography>
          </Toolbar>
        </Hidden>
        <CssBaseline />
        <AppBar position="static" color="transparent" elevation={0}>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                className={classes.logoSmall}
                src={logo}
                alt="Knowledge Global Singapore Logo"
              />
            </Box>
          </Hidden>
          {screenMedium && (
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  className={classes.logoSmall}
                  src={logo}
                  alt="Knowledge Global Singapore Logo"
                />
              </Box>
            </Box>
          )}
          <Hidden mdDown implementation="css">
            <div>
              <hr className={clsx(classes.line, classes.lineTop)} />
              <Tabs
                value={value}
                onChange={other.onChange}
                centered={true}
                scrollButtons={"desktop"}
                indicatorColor={"#ffffff"}
              >
                <Tab
                  className={getTabClass(value === 0)}
                  label="ABOUT US"
                  wrapped={true}
                  disableRipple={true}
                />
                <Tab
                  className={getTabClass(value === 1)}
                  label="PRODUCTS"
                  disableRipple={true}
                />
                <Tab
                  className={getTabClass(value === 2)}
                  label="SHIPPING"
                  disableRipple={true}
                />
                <Tab
                  className={getTabClass(value === 3)}
                  label="CSR"
                  disableRipple={true}
                />
                <img
                  className={classes.logo}
                  src={logo}
                  alt="Knowledge Global Singapore Logo"
                />
                <Tab
                  className={getTabClass(value === 5)}
                  label="RECOGNITIONS"
                  disableRipple={true}
                />
                <Tab
                  className={getTabClass(value === 6)}
                  label="KNOWLEDGE SHARING"
                  disableRipple={true}
                />
                <Tab
                  className={getTabClass(value === 7)}
                  label="CONTACT US"
                  disableRipple={true}
                />
              </Tabs>
              <hr className={clsx(classes.line, classes.lineBottom)} />
            </div>
          </Hidden>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <IconButton
                color="inherit"
                aria-label="close drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        {/* </ElevationScroll> */}
      </div>
    </React.Fragment>
  );
}

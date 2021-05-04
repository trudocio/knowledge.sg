// External Imports
import React from "react";
import clsx from  'clsx';
import PropTypes from 'prop-types';

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
  // Slide,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MoveToInbox, Mail, Menu } from '@material-ui/icons';
// Image Imports
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
    fontFamily: "'Bree Serif', serif",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '48px',
    /* identical to box height */
    letterSpacing: '0.2em',
    color: '#292828',
  },
  tabLabels: {
    fontFamily: "'Poppins', serif",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '25px',
    /* identical to box height */
    letterSpacing: '0.08em',
    color: '#000000',
    opacity: 'unset',
    minWidth: '100px'
  },
  activeTab: {
    color: '#225A41',
  },
  line: {
    border: '1px solid #000000',
    width: '85%',
  },
  lineTop: {
    position: 'relative',
    top: '50px',
    zIndex: '-1',
  },
  lineBottom: {
    position: 'relative',
    bottom: '50px',
    zIndex: '-1',
  },
  logo: {
    width: '290px',
    height: '137.94px'
  },
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
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { children, value, index, ...other } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const getTabClass = (isActive) => {
    return isActive ? clsx(classes.tabLabels, classes.activeTab) : classes.tabLabels
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <React.Fragment>
    <div className={classes.root} id="back-to-top-anchor">
      <Hidden xsDown implementation="css">
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h5" noWrap>
              KNOWLEDGE INTERNATIONAL STRATEGY SYSTEMS PTE. LTD.
            </Typography>
        </Toolbar>
      </Hidden>
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Hidden smUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <img
               className={classes.logo}
               src={logo}
               alt="Knowledge Global Singapore Logo"
          />
        </Hidden>
        <Hidden xsDown implementation="css">
        <div >
            <hr className={clsx(classes.line, classes.lineTop)}/>
            <Tabs 
              value={value}
              onChange={other.onChange}
              centered={true}
              scrollButtons={'desktop'}
              indicatorColor={'#fff'}
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
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* </ElevationScroll> */}
    </div>
    </React.Fragment>
  )
}
import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Call, Place, Email} from '@material-ui/icons';
import { Box } from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: '#1C2325',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '240px'
  },
  footerGrid: {
    height: '100%',
    minHeight: '240px'
  },
  footerNestedGrid: {
    textAlign: 'right',
    minHeight: '150px',
  },
  footerIcon: {
    fontSize: "64px",
    color: "#fff"
  },
  footerText: {
    color: "#fff",
    fontFamily: "'Poppins', serif",
    fontStyle: 'normal',
  }
}));
 
export function Footer(props) {
  const classes = useStyles();
  
  return (
    <footer className={classes.footer}>
      <div>
        <Paper className={classes.root} square={true}>
        <Grid
          className={classes.footerGrid}
          container
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {/* Grid for Call Us */}
          <Grid
            className={classes.footerNestedGrid}
            key={0}
            xs={12}
            sm={3}
            container
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid
              key={0}
              xs={3}
              justify="center"
              alignItems="center"
              >
                <Call className={classes.footerIcon} />
            </Grid>
            <Grid
              className={classes.footerText}
              key={1}
              xs={8}
              justify="center"
              alignItems="center"
              >
                <Typography 
                className={classes.footerText}
                variant="h6"
                component="h6"
                align="center"
                style={{ fontWeight: 'bold'}}
                >
                CALL US NOW
                </Typography>
                <Typography
                className={classes.footerText}
                component="div"
                align="center">
                Phone: +65 6221 5818
                Fax: +65 6327 1072
                </Typography>
            </Grid>
          </Grid>
          {/* Grid for Location  */}
          <Grid 
            className={classes.footerNestedGrid}
            key={1}
            xs={12}
            sm={3}
            container
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid
              key={0}
              xs={3}
              justify="center"
              alignItems="center"
              >
                <Place className={classes.footerIcon} />
            </Grid>
            <Grid
              className={classes.footerText}
              key={1}
              xs={8}
              justify="center"
              alignItems="center"
              >
                <Typography 
                className={classes.footerText}
                variant="h6"
                component="h6"
                align="center"
                style={{ fontWeight: 'bold'}}>
                COME VISIT US
                </Typography>
                <Typography
                className={classes.footerText}
                component="div"
                align="center"
                >
                180 Cecil Street #10-01,
                Bangkok Bank Building
                Singapore 069546
                </Typography>
            </Grid>
          </Grid>

          {/* Grid for Message */}
          <Grid 
            className={classes.footerNestedGrid}
            key={2}
            xs={12}
            sm={4}
            container
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid
              key={0}
              xs={3}
              justify="center"
              alignItems="center"
              >
                <Email className={classes.footerIcon} />
            </Grid>
            <Grid
              key={1}
              xs={8}
              justify="center"
              alignItems="center"
              >
                <Typography
                className={classes.footerText}
                variant="h6"
                component="h6"
                align="center"
                style={{ fontWeight: 'bold'}}>
                SEND US A MESSAGE
                </Typography>
                <Typography
                className={classes.footerText}
                component="div"
                align="center">
                contact@knowledgeglobal.sg
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
      </div>
    </footer>
  );
}


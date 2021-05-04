// External imports
import React from "react";
import clsx from  'clsx';

// Material imports
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box } from "@material-ui/core";

// Internal imports
import businessCoal from '../../../../assets/aboutUs/business/business_coal.png'

const useStyles = makeStyles((theme) => ({
  presenceMap: {
    marginTop:"11px",
    maxHeight: "350px",
  },
  presenceText: {
    fontFamily: "'Poppins', serif",
    fontStyle: 'normal',
    fontSize: '17px',
    marginTop: '20px',
    marginBottom: '20px',
    lineHeight: '25px'
  }
}))

export default function Business(props) {
  const classes =  useStyles();
  return (
    <React.Fragment>
      <Container>
      <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
        >
        <Grid
            key={0}
            xs={6}
            justify="center"
            alignItems="center"
            item
          >
            <img
              src={businessCoal}
              className={classes.presenceMap}
              alt="Presence Map"
            />
        </Grid>
        <Grid
            key={1}
            xs={6}
            justify="center"
            alignItems="center"
            item
          >
            <Typography className={classes.presenceText} component="p">
            Part of Knowledge Group, Knowledge Singapore is a leading merchant of Energy and Metallurgical products like Thermal Coal, Iron Ore, Chrome Ore.
            </Typography>
            <Typography className={classes.presenceText} component="p">
            An end to end logistics partner with proven expertise in up-stream and down-stream.
            </Typography>
            <Typography className={classes.presenceText} component="p">
            In-house expertise in shipping and leverage our experience, volumes and scale to offer optimized solutions to our customers delivering to the port of their choice.
            </Typography>
            <Typography className={classes.presenceText} component="p">
            Consulting on techno-commercial issues is an integrated part of our business. Right product delivered from Mine to the Plant using multimodal transport in a cost-efficient way.
            </Typography>
        </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

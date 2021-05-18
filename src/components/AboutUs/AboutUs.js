// External Imports
import React from "react";
import clsx from  'clsx';

// Material Imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';

// Internal Imports
import { Calculators, HeroImage } from "../../UI"

// Image Imports
import shipyard from '../../assets/aboutUs/shipyard.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#ffffff"
  },
  heroText: {
    fontFamily: "'Poppins', serif",
    fontStyle: 'normal',
    fontSize: '18px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  heroDetailsTitle: {
    fontWeight: '600',
    fontSize: '25px',
    lineHeight: '95%',
    letterSpacing: '0.01em',
    color: "#225A41"
  },
  heroDetailsText: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '111.4%',
  },
  scrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  requestButton: {
    backgroundColor: '#225A41',
    color: "#FFFFFF",
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    borderRadius: 'unset',
    /* identical to box height */
    letterSpacing: '0.08em',
  },
  fabIcon: {
    color: '#225A41'
  }
}))

const heroDetails = () => {
  return [
    { title: '18+ years', text: 'of operations as Knowledge Group' },
    { title: '10+ years', text: 'of operations in Singapore' },
    { title: '85+', text: 'satisfied clients' },
    { title: '>25.0 MMT', text: 'of products delivered' },
    { title: '>30', text: 'vessels handled annually' },
  ]
}
  

export default function Products(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <HeroImage image_src={shipyard} />
          <Grid
            key={1}
            xs={12}
            justify="center"
            alignItems="center"
            item
          >
            <Typography
              className={classes.heroText}
              component="p"
              align="center">
                Knowledge International Strategy Systems (KISS) was incorporated in 2010 with a view to build on the Group’s knowledge, resources and network in coal business and to leverage Singapore’s pro-business policies and deep financial, trading and shipping ecosystem. As a Global Trader Program (GTP) member trader in Singapore, KISS has benefitted from proximity to Indonesia and Australia.
            </Typography>

            <Typography
              className={classes.heroText}
              component="p"
              align="center">
                In the past few years, KISS has built a fairly diversified business both in terms of markets and products in addition to the legacy of being a highly -successful merchant coal trading company with expertise in energy coal origination, land-based and seaborne logistics, related trade finance and risk management.
            </Typography>
          </Grid>
          <Grid
            key={2}
            xs={12}
            justify="center"
            alignItems="center"
            spacing = {8}
            container
          >
            {heroDetails().map((value, idx) => {
              return (
              <Grid
              key={idx}
              justify="center"
              alignItems="center"
              item
              >
                <Typography
                  className={clsx(classes.heroText, classes.heroDetailsTitle)}
                  variant="h6"
                  component="h6"
                  align="center">
                    {value.title}
                </Typography>
                <Typography
                  className={clsx(classes.heroText, classes.heroDetailsText)}
                  component="p"
                  align="center">
                    {value.text}
                </Typography>
              </Grid>
            )
            })
            }
          </Grid>
          <Calculators key={2} />
        </Grid>
      </Container>
        {children}
    </React.Fragment>
  )
}
// External imports
import React from "react";
import clsx from "clsx";

// Material imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

// Internal imports
import presenceMap from "../../../../assets/aboutUs/presence/presence_map.svg";

const useStyles = makeStyles(theme => ({
  presenceMap: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "11px",
      height: "100%",
      width: "100%"
    },
    marginTop: "11px",
    maxHeight: "350px"
  },
  presenceText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "17px",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "25px"
  }
}));

export default function Presence(props) {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          direction={screenSmall ? "column" : "row"}
          justify="space-between"
          alignItems="center"
          spacing={screenSmall ? 0 : 3}
        >
          <Grid
            key={0}
            xs={screenSmall ? 12 : 6}
            justify="center"
            alignItems="center"
            item
          >
            <img
              src={presenceMap}
              className={classes.presenceMap}
              alt="Presence Map"
              width="100%"
            />
          </Grid>
          <Grid
            key={1}
            xs={screenSmall ? 12 : 6}
            justify="center"
            alignItems="center"
            item
          >
            <Typography
              align={screenSmall ? "center" : "flex-start"}
              className={classes.presenceText}
            >
              Deep understanding and core relationships in our footprint
              countries of India, China, Indonesia, Australia, South Africa,
              Chile, Laos, Vietnam and Singapore.
            </Typography>
            <Typography
              align={screenSmall ? "center" : "flex-start"}
              className={classes.presenceText}
              component="p"
            >
              Provide multimodal logistics and commodity solutions in our
              footprint.
            </Typography>
            <Typography
              align={screenSmall ? "center" : "flex-start"}
              className={classes.presenceText}
              component="p"
            >
              Physical execution controlled by our own industry-leading credit,
              operations and risk management team based in Singapore
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

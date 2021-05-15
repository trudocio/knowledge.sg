// External imports
import React from "react";
import clsx from "clsx";

// Material imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Box,
  useMediaQuery
} from "@material-ui/core";

// Internal imports
import businessCoal from "../../../../assets/aboutUs/management.png";

const useStyles = makeStyles(theme => ({
  presenceMap: {
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

export default function Management(props) {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
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
            key={1}
            xs={screenSmall ? 12 : 6}
            justify="center"
            alignItems="center"
            item
          >
            <Typography className={classes.presenceText} component="p">
              Deep Management Team experience represents strengths such as:
              <ul>
                <li>Banking & Finance</li>
                <li>Physical bulk commodity trading</li>
                <li>Strong relationship component to success</li>
                <li>Structured merchant financing</li>
                <li>Conservative approach to risk management</li>
                <li>Dry bulk shipping</li>
              </ul>
            </Typography>
          </Grid>
          <Grid
            key={0}
            xs={screenSmall ? 12 : 6}
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
        </Grid>
      </Container>
    </React.Fragment>
  );
}

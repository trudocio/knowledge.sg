// External Imports
import React from "react";
import clsx from "clsx";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Container,
  useMediaQuery,
  CardMedia,
  Hidden,
} from "@material-ui/core";

// Internal Imports
import { Calculators, HeroImage } from "../../UI";

// Image Imports
import shipyard from "../../assets/aboutUs/shipyard.png";
import knowledge_video from "../../assets/knowledge_video.mp4";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  heroText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  heroDetailsTitle: {
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "95%",
    letterSpacing: "0.01em",
    color: "#225A41",
  },
  heroDetailsText: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "111.4%",
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  heroVideo: {
    width: "98%",
    maxHeight: "98%",
    marginTop: "11px",
    display: "flex",
    transform: "translate(-50%, -30%)",
    marginLeft: "50%",
    alignItems: "center",
  },
  requestButton: {
    backgroundColor: "#225A41",
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "30px",
    borderRadius: "unset",
    /* identical to box height */
    letterSpacing: "0.08em",
  },
  fabIcon: {
    color: "#225A41",
  },
}));

const heroDetails = () => {
  return [
    { title: "18+ years", text: "of operations as Knowledge Group" },
    { title: "10+ years", text: "of operations in Singapore" },
    { title: "85+", text: "satisfied clients" },
    { title: ">25.0 MMT", text: "of products delivered" },
    { title: ">30", text: "vessels handled annually" },
  ];
};

export default function Products(props) {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const screenMedium = useMediaQuery(theme.breakpoints.only("md"));
  return (
    <React.Fragment>
      <Container>
        <Hidden mdUp implementation="css">
          <HeroImage image_src={shipyard} />
        </Hidden>
        <Hidden mdDown implementation="css">
          <video
            src={knowledge_video}
            loop
            autoPlay
            className={classes.heroVideo}
          />
        </Hidden>
        {screenMedium && <HeroImage image_src={shipyard} />}
        <Grid
          container
          justify="center"
          alignItems="center"
          style={
            useMediaQuery(theme.breakpoints.down("md"))
              ? { marginTop: "0px" }
              : { marginTop: "-220px" }
          }
          spacing={3}
        >
          <Grid
            key={1}
            xs={12}
            justify="center"
            alignItems="center"
            item
          ></Grid>
          <Grid
            key={2}
            xs={12}
            justify="center"
            alignItems="center"
            spacing={8}
            container
          >
            {heroDetails().map((value, idx) => {
              return (
                <Grid key={idx} justify="center" alignItems="center" item>
                  <Typography
                    className={clsx(classes.heroText, classes.heroDetailsTitle)}
                    variant="h6"
                    component="h6"
                    align="center"
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    className={clsx(classes.heroText, classes.heroDetailsText)}
                    component="p"
                    align="center"
                  >
                    {value.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Calculators key={2} />
        </Grid>
      </Container>
      {children}
    </React.Fragment>
  );
}

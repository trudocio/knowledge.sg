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
  Box,
  CardMedia,
  Hidden,
} from "@material-ui/core";
import { shadows } from "@material-ui/system";
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
  paper: {
    fontFamily: "Poppins",
    paddingTop: "5px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderWidth: 1,
    fontSize: "14px",
    borderColor: "#225A41",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    border: "1px solid #225A41;",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
      width: "300px",
    },
  },
  heading: {
    display: "flex",
    fontFamily: "Poppins",
    padding: "12px",
    borderWidth: 1,
    fontSize: "14px",
    fontWeight: 600,
    color: "#225A41",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heroText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  heroTextValue: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  presenceText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "18px",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "25px",
  },
  heroDetailsTitle: {
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "20%",
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
    height: "50%",
    // maxHeight: "98%",
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
    { title: "100+", text: "satisfied clients" },
    { title: ">30 MMT", text: "of products delivered" },
    { title: ">300", text: "vessels handled" },
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
              : { marginTop: "-200px" }
          }
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
            spacing={useMediaQuery(theme.breakpoints.down("sm")) ? 2 : 8}
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
                    className={clsx(
                      classes.heroTextValue,
                      classes.heroDetailsText
                    )}
                    component="p"
                    align="center"
                  >
                    {value.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Typography className={classes.presenceText} align="center">
            Incorporated in 2010, Knowledge International Strategy Systems
            (KISS) is a leading merchant of Energy, Metals and Minerals based in
            Singapore. As a Global Trader Program (GTP) member trader, KISS has
            benefitted from Singapore’s pro-business policies and deep
            Financial, Trading and Shipping ecosystem. We are also playing our
            part to be integral to digitalizing the international trading
            ecosystem in Singapore with a venture into TradeTech.
          </Typography>
          <Grid item xs={12} md={6} lg={6}>
            <Box boxShadow={5} className={classes.paper}>
              <Typography className={classes.heading}>TRADING</Typography>
              Knowledge International Strategy Systems (KISS) was incorporated
              with a view to build on the Knowledge Group’s knowledge,
              resources, and network in coal business and to leverage
              Singapore’s pro-business policies and deep financial, trading and
              shipping ecosystem.
              <p>
                {" "}
                As a Global Trader Program (GTP) member trader in Singapore,
                KISS has benefitted from proximity to Indonesia and Australia as
                key origination markets as well as key demand markets of India &
                China.
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box boxShadow={5} className={classes.paper}>
              <Typography className={classes.heading}>TRADETECH</Typography>
              With deep insights into trading and logistics and the benefit of
              experience and network, KISS wants to participate in the Singapore
              government’s push towards a “Smart Nation” by contributing in its
              area of expertise. We believe SME space can be a big contributor
              to this agenda by playing its part as “Digital Leaders”.
              <p>
                Enabling SMEs to lead digital transformation to propel the
                ‘Smart Nation’ agenda by creating an open, customizable,
                interconnected, and interoperable solution for trade
                digitalization.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {children}
      <Calculators key={2} />
    </React.Fragment>
  );
}

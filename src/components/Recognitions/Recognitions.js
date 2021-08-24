// External Imports
import React from "react";
import clsx from "clsx";
// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Divider,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
// Internal Imports
import { Calculators, HeroImage, LinedText } from "../../UI";

// Image Imports
import shipyard from "../../assets/aboutUs/recognitions.png";

const useStyles = makeStyles((theme) => ({
  scroll: {
    height: "30vh",
    width: "600px",
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-60px",
    },
  },
  tableHead: {
    color: "#225A41",
    fontWeight: "bold",
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
}));

const keyExtractor = (item, index) => item.title + index;
const heroDetails = () => {
  return [
    { title: "18+ years", text: "of operations as Knowledge Group" },
    { title: "10+ years", text: "of operations in Singapore" },
    { title: "100+", text: "satisfied clients" },
    { title: ">30 MMT", text: "of products delivered" },
    { title: ">300", text: "vessels handled" },
  ];
};

export default function Recognitions(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const tabDetails = () => {
    return [
      {
        title: "Corporate Social Responsibility (CSR)",
        image_src: "",
        content: [
          {
            content: (
              <div>
                <Grid
                  key={2}
                  xs={12}
                  justify="center"
                  alignItems="center"
                  spacing={0}
                  style={{ marginTop: "-10px" }}
                  container
                >
                  {heroDetails().map((value, idx) => {
                    return (
                      <Grid key={idx} justify="center" alignItems="center" item>
                        <Typography
                          className={clsx(
                            classes.heroText,
                            classes.heroDetailsTitle
                          )}
                          variant="h6"
                          component="h6"
                          align="center"
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          className={clsx(
                            classes.heroText,
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
                <p class="mt-2">
                  Knowledge International, Singapore has been awarded Global
                  Trader Status under GTP by International Enterprise(IE)
                  Singapore.
                </p>
                <p>
                  It has also been awarded the BCA GREEN MARK (Office Interior -
                  Version 1.1) in 2016 as a form of recognition of the measures
                  that the company has put in place for a more sustainable
                  environment.
                </p>
              </div>
            ),
          },
        ],
      },
    ];
  };
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Grid
          container
          direction={screenSmall ? "column" : "row"}
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid
            key={0}
            xs={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
            item
          >
            <img
              src={shipyard}
              style={{
                width: "300px",
                height: "371px",
                marginLeft: screenSmall ? "0px" : "100px",
              }}
            />
          </Grid>
          <Grid
            key={1}
            xs={12}
            md={6}
            lg={6}
            justify="center"
            alignItems="center"
            item
          >
            <LinedText key={1} value={value} tabDetails={tabDetails} />
          </Grid>
        </Grid>
      </Container>
      <div style={{ height: "50px" }}></div>
      <Calculators key={2} />
    </React.Fragment>
  );
}
